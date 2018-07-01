// listening for the click on anchor--prevents preventDefault
// sends AJAX DELETE request to the route in the anchor's href attribute
// the URL contains the trail id for the backend to grab
$('.delete-trail').on('click', function(e) {
  e.preventDefault();
  var url = $(this).attr('href')
  $.ajax({
    method: 'DELETE',
    url: url
  }).done(function(data) {
    window.location = '/profile/';
  });
});

// listening for the submit event on the form
// preventing default -- sending AJAX PUT request with the data from the form
// sending to the route in the form's action attribute
$('.edit-form').on('submit', function(e) {
  e.preventDefault();
  var url = $(this).attr('action');
  console.log(url);
  $.ajax({
    method: 'PUT',
    url: url,
    data: {
      name: $('#edit-name').val()
    }
  }).done(function(data) {
    window.location = '/profile/';
  });
});
