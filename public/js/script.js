// 
// $('a.trail-name-link').on('click', function(e) {
//   e.preventDefault();
//   var name = $(this).attr('data-name');
//   console.log(name)
//   var directions = $(this).attr('data-directions');
//   var description = $(this).attr('data-description');
//   var activityType = $(this).attr('data-activity-type');
//   var linkName = name.replace(/ /g, "_")
//   console.log('HERE IS NAME FROM THE FRONT', name)
//   $.ajax({
//     url: 'trail/' + linkName,
//     type: 'get',
//     data: {
//       name: name,
//       directions: directions,
//       description: description,
//       activityType: activityType,
//       linkName: linkName
//     }
//   })
// });

$(document).ready(function(){
  console.log('works')

})
function test(){
  console.log('stuff')
}
