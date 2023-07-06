const button = document.querySelectorAll('.component_svg_duvidas');
const dropdow  = document.querySelectorAll('.layout_dropdown_container');
const container = document.querySelectorAll('.layout_container_hidden')
const layout_title = document.querySelectorAll('.layout_title_dropdown')
const button_main = document.querySelector('#button_main')
const sidebar = document.querySelector('.layout_sidebar');
const back_button = document.querySelector('.component_svg_side');
const main = document.querySelector('main')
const header = document.querySelector('header')
const nav = document.querySelector('nav')

button_main.addEventListener('click', () => {
  sidebar.style.left = '0px'
  main.style.filter = 'blur(4px)'
  header.style.filter = 'blur(4px)'
  main.style.transition = '1s'
  header.style.transition = '1s'
  nav.style.width = '100%'
  document.body.style.overflowY = 'hidden'
})

main.addEventListener('click', () => {
  sidebar.style.left = '-100%'
  main.style.filter = 'blur(0px)'
  header.style.filter = 'blur(0px)'
  document.body.style.overflowY = 'scroll'
})

back_button.addEventListener('click', () => {
  sidebar.style.left = '-100%'
  main.style.filter = 'blur(0px)'
  header.style.filter = 'blur(0px)'
  document.body.style.overflowY = 'scroll'
})


layout_title.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(index === 0) {
      dropdow[index].classList.toggle('toggle_class');
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    } else if(index === 1) {
      dropdow[index].classList.toggle('toggle_class')
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    } else {
      dropdow[index].classList.toggle('toggle_class')
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    }
  })
})

button.forEach((item, index) => {
  item.addEventListener('click', (evento) => {
    evento.stopPropagation()
    if(index === 0) {
      dropdow[index].classList.toggle('toggle_class');
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    } else if(index === 1) {
      dropdow[index].classList.toggle('toggle_class')
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    } else {
      dropdow[index].classList.toggle('toggle_class')
      container[index].classList.toggle('toggle_class_2')
      button[index].classList.toggle('toggle_class_3')
    }  
  })  
})  

