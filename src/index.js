// text-clip effect
$(document).ready(function () {
  var mouseX, mouseY;
  var ww = $(window).width();
  var wh = $(window).height();
  var traX, traY;
  $(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (100 * mouseX) / 1000 + 40;
    traY = (100 * mouseY) / 1000 + 50;
    console.log(traX);
    $(".title").css({ "background-position": traX + "%" + traY + "%" });
  });
});

// typewriter
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(80)
  .typeString("GDSC is a global program by Google that supports stoodent")
  .pauseFor(100)
  .deleteChars(8)
  .typeString(
    " student developers in enhancing their technical and professional skills, forest"
  )
  .deleteChars(6)
  .typeString(
    "fostering innovation and creating impact through resources and community."
  )
  .pauseFor(5000)
  .start();
