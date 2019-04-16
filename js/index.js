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



// [ ] drag / drop
// Identify h2 in header
const headH2= document.querySelector('.home .intro h2')

// Drag h2 event handler
headH2.addEventListener('drag', function (event) {
  alert('Where are you dragging that?')
})

// Drop h2 event handler
// headH2.addEventListener('drop', function (event) {
//   alert('Thanks for dropping me.')
// })





// [ ] load
// Load body is complete image event handler
window.addEventListener('load', function (event) {
  alert('Body has completed loading.')
})





// [ ] focus
// Identify footer
const footer = document.querySelector(".footer p")

//Focus footer event handler
footer.addEventListener('copy', function (event) {
  event.target.style.color = 'green'
  console.log(event)
})




// [ ] resize
window.addEventListener('resize', function (event) {
  console.log('The window has been resized.')
})



// [ ] scroll
window.addEventListener('scroll', function (event) {
  console.log('The window has been scrolled.')
})

// [ ] select



// [ ] dblclick
const h2PickYourDestination = document.querySelector('.content-destination h2')

h2PickYourDestination.addEventListener('dblclick', function (event) {
  h2PickYourDestination.innerHTML = 'You have been double clicked.'
})

// [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
const textContent = document.querySelector('.text-content')
const advHead = document.querySelector('.text-content h2')

textContent.addEventListener('click', function (event) {
  alert('textContent Div fired')
})

advHead.addEventListener('click', function (event) {
  alert('advHead fired')
  event.stopPropagation()
})



