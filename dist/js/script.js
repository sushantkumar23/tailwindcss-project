const nav = document.getElementById('menu-items')
const open = document.getElementById('menu-open')
const close = document.getElementById('menu-close')

open.addEventListener('click', () => {
  nav.classList.remove('hidden')
  open.classList.add('hidden')
  close.classList.remove('hidden')
})

close.addEventListener('click', () => {
  nav.classList.add('hidden')
  open.classList.remove('hidden')
  close.classList.add('hidden')
})
