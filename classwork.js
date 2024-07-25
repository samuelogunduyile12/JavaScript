document.body.style.backgroundColor = 'yellow'

const first = document.getElementById('unique')

const second = document.querySelector('ol > li')

const sam = document.querySelectorAll('ol li')

const fifth = document.getElementsByClassName('list')

const tag = document.getElementsByTagName('li')




first.textContent = 'Samuel'
second.textContent = 'Ayomide'
fifth[2].style.backgroundColor = 'purple'
fifth[3].style.backgroundColor = 'red'
sam[9].style.background = 'linear-gradient(90deg, blue, red)'
tag[3].textContent = 'Shade'