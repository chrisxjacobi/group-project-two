
$(document).ready(function(){
  // to attach Backstrech as the jumbotron's background
  $(".jumbotron").backstretch("../images/painting.jpg");
  $("#project-one").backstretch("../images/cleaning.jpg");
  $("#project-two").backstretch("../images/push-wheelchair.jpg");
  $("#project-three").backstretch("../images/raking-leaves.jpg");

  // date and time input
  $(".form_datetime").datetimepicker({format: 'mm-dd-yy hh:ii'});
});
