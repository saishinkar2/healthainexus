let sw = document.querySelector("[sw]");
let card = document.getElementsByClassName("card");
let navbar = document.getElementsByClassName("container");
let nav = document.getElementsByTagName("a");
let div = document.getElementsByTagName("div");
let tbl = document.getElementById("table")
let label = document.querySelectorAll(".form-label")
function toggleDarkMode(){
    if(localStorage.getItem("darkMode") == "enabled"){
        sw.checked = true
        enableDarkMode()
    }else if(localStorage.getItem("darkMode") == "disabled"){
        sw.checked = false
        disableDarkMode()
    }
}





function enableDarkMode() {
  document.body.style.background = "#2c3e50";
  document.getElementById("drpdwn").classList.toggle("dropdown-menu-dark")
  // Change the background and text color of the body
  document.body.style.backgroundColor = "#2c3e50";
  document.body.style.color = "white";

  for (let item of card) {
    item.style.backgroundColor = "#2c3e50";
    item.style.color = "white";
  }

  for (let item of navbar) {
    item.style.backgroundColor = "white"; // Set the background color to white
    item.style.color = "#2c3e50"; // Set the text color to the body color
  }

  for (let item of nav) {
    item.style.color = "white";
  }
  for (let item of div) {
    item.style.backgroundColor = "#2c3e50";
    item.style.color = "white";
  }
  label.forEach(element => {
    element.classList.add("dark")
  })
  document.getElementById("table").classList.add("table-dark");
}













function disableDarkMode() {
  document.body.style.background = "#2c3e50";
  document.getElementById("drpdwn").classList.remove("dropdown-menu-dark")
  // Change the background and text color of the body
  document.body.style.backgroundColor = "#FFFFFF";
  document.body.style.color = "white";

  for (let item of card) {
    item.style.backgroundColor = "#FFFFFF";
    item.style.color = "white";
  }

  for (let item of navbar) {
    item.style.backgroundColor = "white"; // Set the background color to white
    item.style.color = "#FFFFFF"; // Set the text color to the body color
  }

  for (let item of nav) {
    if (
      item.classList.forEach((element) => {
        return element == "active";
      })
    ) {
      item.style.color = "white";
    } else {
      item.style.color = "black";
    }
  }
  for (let item of div) {
    item.style.backgroundColor = "#FFFFFF";
    item.style.color = "black";
  }
  label.forEach(element => {
    element.classList.remove("dark")
  })
  tbl.classList.remove("table-dark");
}












function addEv() {
  sw.addEventListener("click", () => {
    if (sw.checked) {
      localStorage.setItem("darkMode", "enabled");
      toggleDarkMode()
      
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleDarkMode()
    }
  });
  
}











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
  label = document.querySelectorAll(".form-label")
  addEv();
  toggleDarkMode()
}

// Call includeHTML when the page loads
includeHTML();
