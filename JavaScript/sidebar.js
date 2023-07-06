const button_side = document.querySelector('#sidebar_button');
const sidebar_hidden = document.querySelector('.layout_sidebar_hidden')
const back = document.querySelector('#back_button')
const extra_info = document.querySelector('.layout_extra_info'); 
const altura = document.querySelectorAll('.altura')
const desempenho = document.querySelector('.layout_desempenho');

this.addEventListener('load', () => {
  let height = desempenho.clientHeight;
  altura.forEach((item) => {
    item.style.height = `${height}px`
  })
})

button_side.addEventListener('click', () => {
  sidebar_hidden.style.left = '0'
  extra_info.style.filter = 'blur(3px)'
  document.body.style.overflowY = 'hidden'
  desempenho.style.transition = '1.5s'
})

back.addEventListener('click', () => {
  sidebar_hidden.style.left = '-100%'
  extra_info.style.filter = 'blur(0px)'
  document.body.style.overflowY = 'scroll'
})

extra_info.addEventListener('click', () => {
  sidebar_hidden.style.left = '-100%'
  extra_info.style.filter = 'blur(0px)'
  document.body.style.overflowY = 'scroll'
})