$("button").click(function(){
  $(this).toggleClass("active");
  $(this).children().toggleClass("rotate");
  $(this).next().slideToggle();
});
