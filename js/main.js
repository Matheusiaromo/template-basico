(function(){

'use strict'

var $nav = document.getElementById("nav")
var $btnMobile = document.getElementById("btn-mobile")

const toggleMenu = () => {
  $nav.classList.toggle('active')
}

$btnMobile.addEventListener('click', toggleMenu)


})()

