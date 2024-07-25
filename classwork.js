document.body.style.backgroundColor = 'yellow'

const first = document.getElementById('unique')

const second = document.querySelector('ol > li')

const sam = document.querySelectorAll('ol li')

const fifth = document.getElementsByClassName('list')

const tag = document.getElementsByTagName('li')

const nine = document.querySelector('li:nth-of-type(8) + li')


//get an element by id, select that element and insert a text to it.
first.textContent = 'Samuel'

//Using query selector target the first element with respect to its parent and give it a content.
second.textContent = 'Ayomide'

//using get element by class name apply style to the 5th and 7th list
fifth[2].style.backgroundColor = 'purple'

//using get element by class name apply style to the 5th and 7th list
fifth[3].style.backgroundColor = 'red'

//Using query selectorall target all the list for the 10th li, give a background linear gradient.
sam[9].style.background = 'linear-gradient(90deg, blue, red)'

//Using element by tag name apply content to the 4th list.
tag[3].textContent = 'Shade'

//target the ninth list with respect to the 8 list and give it a content
nine.textContent = 'femi'