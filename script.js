const project1 = document.querySelector('.project1');
project1.addEventListener('click', () => {
    window.open("https://kush-dine-restaurant-webite.netlify.app/", "_blank");
});

const project2 = document.querySelector('.project2');
project2.addEventListener('click', () => {
    window.open("https://kush172005.github.io/TIc-Tac-Toe-Game/", "_blank");
});

const project3 = document.querySelector('.project3');
project3.addEventListener('click', () => {
    window.open("https://kush172005.github.io/Shopping-Cart/", "_blank");
});

document.addEventListener("DOMContentLoaded", function () {
    // Sticky header
    window.addEventListener("scroll", function () {
      if (window.scrollY > 1) {
        document.querySelector(".header-area").classList.add("sticky");
      } else {
        document.querySelector(".header-area").classList.remove("sticky");
      }
  
      // Update the active section in the header
      updateActiveSection();
    });
  
    document.querySelectorAll(".header ul li a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        var target = this.getAttribute("href");
        var targetElement = document.querySelector(target);
  
        if (targetElement.classList.contains("active-section")) {
          return;
        }
  
        var scrollOptions = {
          top: target === "#home" ? 0 : targetElement.offsetTop - 40,
          behavior: "smooth"
        };
  
        window.scrollTo(scrollOptions);
  
        document.querySelectorAll(".header ul li a").forEach(function (a) {
          a.classList.remove("active");
        });
  
        this.classList.add("active");
      });
    });
  
    // Initial content revealing
    ScrollReveal({
      distance: "100px",
      duration: 1000,
      delay: 100,
    });
  
    ScrollReveal().reveal(
      ".header a, .profile-photo, .about-content, .education",
      {
        origin: "left",
      }
    );
    ScrollReveal().reveal(
      ".header ul, .profile-text, .about-skills, .internship",
      {
        origin: "right",
      }
    );
    ScrollReveal().reveal(".project-title, .contact-title", {
      origin: "top",
    });
    ScrollReveal().reveal(".projects, .contact", {
      origin: "bottom",
    });
  });
  
  function updateActiveSection() {
    var scrollPosition = window.scrollY;
  
    // Checking if scroll position is at the top of the page or not
    if (scrollPosition === 0) {
      document.querySelectorAll(".header ul li a").forEach(function (link) {
        link.classList.remove("active");
      });
      document.querySelector(".header ul li a[href='#home']").classList.add("active");
      return;
    }
  
    // Will Iterate through each section and update the active class in the header
    document.querySelectorAll("section").forEach(function (section) {
      var target = section.getAttribute("id");
      var offset = section.offsetTop;
      var height = section.offsetHeight;
  
      if (
        scrollPosition >= offset - 40 &&
        scrollPosition < offset + height - 40
      ) {
        document.querySelectorAll(".header ul li a").forEach(function (link) {
          link.classList.remove("active");
        });
        document.querySelector(".header ul li a[href='#" + target + "']").classList.add("active");
      }
    });
  }
  
