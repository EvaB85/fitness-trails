$('.delete-link').on('click', function(e) {
  e.preventDefault();
  var url = $(this).attr('href')
  $.ajax({
    method: 'DELETE',
    url: url
  }).done(function(data) {
    window.location = '/profile'
  });
});

// SAMPLE CODE
// $('a.delete').click(function(e) {
//   e.preventDefault();
//   var url = $(this).attr('href')
//   // ajax allows you to send a delete request
//   $.ajax({
//     method: 'DELETE',
//     url: url
//   }).done(function(data) {
//     window.location = '/pokemon'
//   });
// });
