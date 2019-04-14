// Your code goes here

// Identify buttons requiring identical action
const buttonList = document.querySelectorAll(".btn")

// Click button event handler
buttonList.forEach(button => button.addEventListener('click', function (event) {
  alert(`Element clicked through function ${event.target}!`)
}))

// Identify anchor links requiring identical action
const navList = document.querySelectorAll(".nav a")

// Mouseover nav link event handler
navList.forEach(link => link.addEventListener('mouseover', function (event) {
  link.style.color = 'red'
}))

// Identify background
const background = document.querySelector("body")

//Keydown background even handler
background.addEventListener('keydown', function (event) {
  background.style.color = 'orange'
})

// Identify image in header
const headIMG = document.querySelector('.home .intro img')

// Wheel header image event handler
headIMG.addEventListener('wheel', function (event) {
  alert('Cheat code activated')
})