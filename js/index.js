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
  alert(`Element clicked through function ${event.target}!`), this
}))


