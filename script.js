const btns = document.querySelectorAll(".box");
const tops = document.querySelectorAll(".top");

// for (let box of btns) {
//   box.addEventListener("click", function (e) {
//     e.preventDefault();
//     box.classList.toggle("active");
//   });
// }

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removeActive();
    item.classList.add("active");
    tops.forEach((top) => {
      top.classList.add("activeTop");
    });
  });
});

function removeActive() {
  btns.forEach((item) => {
    item.classList.remove("active");
  });
}

top.classList.remove("activeTop");
