function scrolltoskills() {
  const element = document.getElementById("features");
  element.scrollIntoView();
}

function scrolltoprojects() {
  const scroll = document.getElementById("header");
  scroll.scrollIntoView();
}

function scrolltocontactus() {
  const s2 = document.getElementById("contactus");
  s2.scrollIntoView();
}

// function scrolltohome() {
//     const scrollhome = document.getElementById("contactus");
//     scrollhome.scrollIntoView();
// }

document.addEventListener('DOMContentLoaded', function () {
  // Get the button element
  var stickyButton = document.getElementById('stickyButton');

  // Show the button when the page is scrolled
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      stickyButton.style.display = 'block';
    } else {
      stickyButton.style.display = 'none';
    }
  });

  // Scroll to the top when the button is clicked
  stickyButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
