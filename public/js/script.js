
$('a.trail-name-link').on('click', function(e) {
  e.preventDefault();
  var name = $(this).attr('data-name');
  var directions = $(this).attr('data-directions');
  var description = $(this).attr('data-description');
  var activityType = $(this).attr('data-activity-type');
  console.log('HERE IS NAME FROM THE FRONT', name)
  axios.post('/trail/' + name, { name, directions, description, activityType })
    .then(function(result) {
      console.log('here is RESULT RESULT RESULT RESULT', result);
    });
});
