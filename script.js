const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const iput = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})