
$('a.trail-name-link').on('click', function(e) {
  e.preventDefault();
  var trailData = $(this).attr('data-trail');
  console.log('HERE IS TRAILDATA FROM THE FRONT', trailData)
  axios.post('/trail', {trailData})
    .then(function(result) {
      console.log('here is RESULT RESULT RESULT RESULT', result);
    });
});
