window.addEventListener("scroll", () => {
  let header = document.querySelector("header")
  header.classList.toggle("scrolled", window.scrollY > 0)
})


let header_burger = document.querySelector(".header_burger"),
  lines = document.querySelectorAll(".line"),
  header_list = document.querySelector(".header_list"),
  body = document.body
header_burger.addEventListener("click", () => {
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("opened")
  }
  header_list.classList.toggle("opened")
})

let header_item = document.querySelectorAll(".header_item")
for (let i = 0; i < header_item.length; i++) {
  header_item[i].addEventListener("click", () => {
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.toggle("opened")
    }
    header_list.classList.toggle("opened")
  })
}

let swiper_slide_active = document.querySelector('.swiper-slide-active img'),
  prev = document.querySelector(".swiper-button-prev"),
  next = document.querySelector(".swiper-button-next"),
  array = [prev, next],
  image_placeholder = document.querySelector('.image_placeholder')
let swiper_sliders = document.querySelectorAll(".swiper-slide")
for (let i = 0; i < swiper_sliders.length; i++) {
  console.dir(swiper_sliders[i].classList);
  arr2 = swiper_sliders[i].classList
  console.log(typeof arr2);
}
// for (var i = 0; i < array.length; i++) {
//   array[i].addEventListener("click", () => {
//     image_placeholder.src = swiper_slide_active.src
//   })
// }