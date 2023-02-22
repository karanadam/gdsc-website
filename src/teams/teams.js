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

if (window.location.hash) scroll(0, 0);
// takes care of some browsers issue
setTimeout(function () {
  scroll(0, 0);
}, 1);

// hacker
//home
{
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".nav-home").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 32);
  };
}
//teams
// {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let interval = null;

//   document.querySelector(".nav-teams").onmouseover = (event) => {
//     let iteration = 0;

//     clearInterval(interval);

//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter, index) => {
//           if (index < iteration) {
//             return event.target.dataset.value[index];
//           }

//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//       if (iteration >= event.target.dataset.value.length) {
//         clearInterval(interval);
//       }

//       iteration += 1 / 3;
//     }, 32);
//   };
// }
//events
{
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".nav-events").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 32);
  };
}
//community
{
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".nav-comm").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 32);
  };
}
