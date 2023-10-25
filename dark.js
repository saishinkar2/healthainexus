if(window.location.pathname=="/"){
window.location = "/index.html"
}
function DarkModeToggle() {
  const darkSwitch = localStorage.getItem("darkSwitch");
  const navLinks = document.querySelectorAll(".nav-link");



  if (darkSwitch === null) {
    navLinks.forEach(element => {
      element.classList.remove("text-white");
      document.getElementById("drpdwn").classList.remove(".dropdown-menu-dark")
    });
  } else if (darkSwitch === "dark"){
    navLinks.forEach(element => {
      element.classList.add("text-white");
      document.getElementById("drpdwn").classList.add(".dropdown-menu-dark")
    });
  }
}
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  function setActiveAndBuluClass() {
    const currentPage = window.location.pathname;
    const dropdownLinks = document.querySelectorAll(".dropdown-item");
    const servicesText = document.querySelector(".nav-link.serv");
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
       linkPath = link.getAttribute("href");
      if (currentPage === linkPath || (linkPath === "/")) {
        link.classList.add("active", "bulu");
      } else {
        link.classList.remove("active", "bulu");
      }
    });
    dropdownLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
      
      link.classList.remove("active", "bulu");

      if (currentPage === linkPath ) {
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
toggleDarkModeButton = document.querySelector("[sw1]");
DarkModeToggle()
toggleDarkModeButton.addEventListener("click", () => {
  setTimeout(() => {
    DarkModeToggle()
  }, 100);
})
}

// Call includeHTML when the page loads
includeHTML();

