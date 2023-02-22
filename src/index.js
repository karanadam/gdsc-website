// text-clip effect

$(document).ready(function () {
  let mouseX, mouseY;
  let ww = $(window).width();
  let wh = $(window).height();
  let traX, traY;
  $(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (100 * mouseX) / 500 + 40;
    traY = (100 * mouseY) / 500 + 50;
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

// hacker
//home
// {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let interval = null;

//   document.querySelector(".nav-home").onmouseover = (event) => {
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
//teams
{
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".nav-teams").onmouseover = (event) => {
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

// const hackerEffect = (id) => {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let interval = null;
//   text = document.getElementById("id");

//   text.onmouseover = (event) => {
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
//     }, 30);
//   };
// };
