// Carousel

const carousel = {
  run: function () {
    $(".carousel__slide:gt(0)").hide();
    setInterval(function () {
      $(".carousel__slide:first")
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo(".carousel");
    }, 5000);
  },
};

carousel.run();


// Navbar

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
  navBarToggle.classList.toggle('active');
})

var nav = document.querySelector('nav');
// Onscroll is set to funciton
window.onscroll = function () {
  // If y axis is greater than 100 displayed main nav background to grey
  if (window.pageYOffset > 100) {
    nav.style.background = "#1d1d1b";
    nav.style.boxShadow = "0px 4px 2px black";
    nav.style.position = "fixed";
  }
  // Otherwise leave it the same
  else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
    nav.style.position = "relative";
  }
}

// Dialog

// Getting Modal
var dialogBtns = document.querySelectorAll('.dialog-open');

dialogBtns.forEach(function (btn) {
  btn.onclick = function () {
    var dialog = btn.getAttribute('data-modal');

    document.getElementById(dialog).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll('.btn1');

closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var dialog = btn.closest('.dialog').style.display = "none";
  }
});


// FAQs

// Toggle Collapse
$('.faq li .question').click(function () {
  $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  $(this).parent().toggleClass('active');
});


//Contact


function validateForm() {
  var n = document.getElementById('name').value;
  var e = document.getElementById('email').value;
  var s = document.getElementById('subject').value;
  var m = document.getElementById('message').value;
  var onlyLetters = /^[a-zA-Z\s]*$/;
  var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  if (n == "" || n == null) {
    document.getElementById('nameLabel').innerHTML = ('Please enter your name');
    document.getElementById('name').style.borderColor = "red";
    return false;
  }


  if (!n.match(onlyLetters)) {
    document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
    document.getElementById('name').style.borderColor = "red";
    return false;
  }

  if (e == "" || e == null) {
    document.getElementById('emailLabel').innerHTML = ('Please enter your email');
    document.getElementById('email').style.borderColor = "red";
    return false;
  }

  if (!e.match(onlyEmail)) {
    document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
    document.getElementById('email').style.borderColor = "red";
    return false;
  }

  if (s == "" || s == null) {
    document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
    document.getElementById('subject').style.borderColor = "red";
    return false;
  }

  if (!s.match(onlyLetters)) {
    document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
    document.getElementById('subject').style.borderColor = "red";
    return false;
  }

  if (m == "" || m == null) {
    document.getElementById('messageLabel').innerHTML = ('Please enter your message');
    document.getElementById('message').style.borderColor = "red";
    return false;
  }

  else {
    return true;
  }

}
