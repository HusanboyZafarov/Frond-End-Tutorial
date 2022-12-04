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

