// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal and [0] use for first element of any class name like for span
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.addEventListener('mouseover',()=>{
  setTimeout(() => {
    modal.style.display = "block";
    }, 100);
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




//*********************/ For play this it is navbar section********************//

// let obj = [
//   {
//   page : 'home',
//   link: 'home.html'
// },
//   {
//   page : 'about',
//   link: 'about.html'
// },
//   {
//   page : 'service',
//   link: 'service.html'
// },
//   {
//   page : 'contact',
//   link: 'contact.html'
// }
 

// ]

// let socialarr = [
//   {
//       href: '#',
//       icon:'<i class="fa-brands fa-facebook"></i>',
//   },
//   {
//       href: '#',
//       icon:'<i class="fa-brands fa-instagram"></i>',
//   },
//   {
//       href: '#',
//       icon:'<i class="fa-brands fa-twitter"></i>',
//   },
//   {
//       href: '#',
//       icon:'<i class="fa-brands fa-github"></i>',
//   },
// ]


// let pageContainer = document.querySelector('.pages')
// let pageArray = pageObj.map((item)=>{
//   return` <li class="page"><a href="${item.link}>${item.page}">Home</a></li>`
// })

// pageContainer.innerHTML = pageArr.join(' ');


// let btn = document.querySelector('.menu')
// btn.addEventListener('click',()=>{

// let pages = document.querySelector('.pages')
// pages.classList.toggle('show')

// let icons = document.querySelector('.social-icons')
// icons.classList.toggle('show')

// })


// let socialContainer = document.querySelector('.social-icons')
// let socialArr = socialObj.map((item)=>{
//    return`  <li class="social-icon"><a href=${item.href}>${item.page}><i class="fa-brands fa-facebook"></i></a></li>`
// })