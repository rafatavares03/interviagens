const modal = document.querySelector('#modal')

document.querySelector('#toggle').addEventListener('click', () => {
  if(modal.classList.contains('is-hidden')) {
    modal.classList.remove('is-hidden')
  }
})

document.querySelector('#modal-close').addEventListener('click', () => {
  if(modal.classList.contains('is-hidden') === false) {
    modal.classList.add('is-hidden')
  }
})

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal')) {
    modal.classList.add('is-hidden')
  }
})