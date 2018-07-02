// DELETE request to the route in the anchor's href attribute
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

// PUT request with the data from the form; sending to the route in the form's action attribute
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
