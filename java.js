$( ".name" ).focus(function(){
  $( ".name-help" ).slideDown(200);
}).blur(function(){
  $( ".name-help" ).slideUp(200);
});

$(".desc").click(function(){
  $(".fname-help").slideDown(500);
}).blur(function(){
  $(".fname-help").slideUp(500);
});

$("input.cat").focus(function(){
  $("p.email-help").slideDown(500);
}).blur(function(){
  $("p.email-help").slideUp(500);
});
