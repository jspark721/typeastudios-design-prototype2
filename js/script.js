let close = document.querySelector('.nav-close-icon');
let open = document.querySelector('.navbar-open-icon')
let menu = document.querySelector('.nav-main');
let navbar = document.getElementById('navbar');
let logo = document.querySelector('.logo');
let order = document.querySelector('.navbar-order');
let sticky = navbar.offsetTop;

close.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
  navbar.style.display = 'grid';
});

open.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
  navbar.style.display = 'none';
});


window.onscroll = function() {
  stickyFunction();
};


function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    // navbar.style.backgroundColor = '#FFFFFF';
    // logo.classList.remove('nodisplay');
    // order.classList.remove('nodisplay');
  } else {
    navbar.classList.remove('sticky');
  }
}
