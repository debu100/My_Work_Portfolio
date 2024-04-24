//*  Toogle menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const navLinks = document.querySelectorAll(".navlink");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

//* Change navbar style on scroll

const header = document.querySelector("#header");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtn2 = document.querySelector(".toggle-btn-2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    header.classList.add("sticky");
    navMenu.classList.add("sticky");
    toggleBtn.classList.add("toggle");
    // toggleBtn2.classList.add("toggle");
  } else {
    header.classList.remove("sticky");
    navMenu.classList.remove("sticky");
    toggleBtn.classList.remove("toggle");
    // toggleBtn2.classList.remove("toggle");
  }
});

//* Active Menu

const allNavLinks = document.querySelectorAll(".navlink a");

allNavLinks.forEach((alllink) => {
  alllink.addEventListener("click", () => {
    allNavLinks.forEach((item) => {
      item.classList.remove("active-link");
    });
    alllink.classList.add("active-link");
  });
});

//* Dark Mode and Light Mode

toggleBtn.addEventListener("click", function (e) {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    e.target.innerText = "Switch To Dark";
  } else {
    e.target.innerText = "Switch To Light";
    document.body.classList.add("dark");
  }
  //   // toggleBtn.classList.add("btnhide");
  //   // toggleBtn2.classList.add("btnshow");
  //   document.body.classList.add("dark");
});

// toggleBtn2.addEventListener("click", () => {
//   // toggleBtn2.classList.add("btnhide");
//   // toggleBtn1.classList.add("btnshow");
//   document.body.classList.remove("dark");
// });

//* Filterable Portfolio

const allProjectLinks = document.querySelectorAll(".project-link a");
const allProjectsBox = document.querySelectorAll(".projects-box ");

allProjectLinks.forEach((li) => {
  li.addEventListener("click", () => {
    let dataId = li.dataset.id;
    allProjectsBox.forEach((box) => {
      box.classList.remove("active-box");
      if (box.classList.contains(dataId)) {
        box.classList.add("active-box");
      }
    });
  });
});

//* AOS on scroll

const allHiddenBoxes = document.querySelectorAll(".hidden-content");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show-content", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0,
  }
);

allHiddenBoxes.forEach((box) => {
  observer.observe(box);
});
