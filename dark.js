let sw = document.querySelector("[sw]");
let card = document.getElementsByClassName("card");
let navbar = document.getElementsByClassName("container");
let nav = document.getElementsByTagName("a");
let div = document.getElementsByTagName("div");
let tbl = document.getElementById("table")
let ourserv = document.getElementById("ourserv")
let label = document.querySelectorAll(".form-label")
function addEv() {
  sw.addEventListener("click", () => {
document.getElementById("content").classList.toggle('dark-mode');
}
  )}
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  function setActiveAndBuluClass() {
    const currentPage = window.location.pathname;
    const dropdownLinks = document.querySelectorAll(".dropdown-item");
    const servicesText = document.querySelector(".nav-link.serv");
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
      if (currentPage === linkPath) {
        link.classList.add("active", "bulu");
      } else {
        link.classList.remove("active", "bulu");
      }
    });
    dropdownLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
      link.classList.remove("active", "bulu");
      if (currentPage === linkPath) {
        link.classList.add("active", "bulu");
        servicesText.classList.add("active", "bulu");
      }
    });
  }

  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];

    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;

            setActiveAndBuluClass();
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }

          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();

      return;
    }
  }

  setActiveAndBuluClass();

  sw = document.querySelector("[sw]");
  card = document.getElementsByClassName("card");
  navbar = document.getElementsByClassName("container");
  nav = document.getElementsByTagName("a");
  div = document.getElementsByTagName("div");
  tbl = document.getElementById("table")
  ourserv = document.getElementById("ourserv")
  label = document.querySelectorAll(".form-label")
addEv()

}

// Call includeHTML when the page loads
includeHTML();
