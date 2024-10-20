
$(function () {
  $("#hm-nav").load("header.html", function (response, status, request) {
    
    switch (page) {
      case "home":
        $(".nav-link").removeClass("active");
        $(".hm-home").addClass("active bulu");
        break;
      case "tips":
        $(".nav-link").removeClass("active");
        $(".hm-tips").addClass("active bulu");

        break;
      case "about":
        $(".nav-link").removeClass("active");

        $(".hm-about").addClass("active bulu");

        break;
      case "diabetes":
        $(".nav-link").removeClass("active");
        $(".dropdown-item").removeClass("active");

        $(".hm-diabetes, .hm-services").addClass("active bulu");
        break;

        case "helpline":
        $(".nav-link").removeClass("active");
        $(".dropdown-item").removeClass("active");

        $(".hm-helpline, .hm-services").addClass("active bulu");
        break;
      
        case "bmi":
        $(".nav-link").removeClass("active");
        $(".dropdown-item").removeClass("active");

        $(".hm-bmi, .hm-services").addClass("active bulu");
        break;
        case "hospital":
        $(".nav-link").removeClass("active");
        $(".dropdown-item").removeClass("active");

        $(".hm-hospital, .hm-services").addClass("active bulu");
        break;
        case "disease":
        $(".nav-link").removeClass("active");
        $(".dropdown-item").removeClass("active");

        $(".hm-disease, .hm-services").addClass("active bulu");
        break;
        
        
        case "decibal":
        $(".nav-link").removeClass("active");
        $(".dropdown-item").removeClass("active");

        $(".hm-decibal, .hm-services").addClass("active bulu");
        break;
    }
    

  });
  $("#hm-footer").load("footer.html");
document.getElementById("darkSwitch").addEventListener("click", () => {
  setTimeout(() => {
    DarkModeToggle()
  }, 100);
})
});


function DarkModeToggle() {
  const darkSwitch = localStorage.getItem("darkSwitch");
  const elementsToToggle = {
    navLinks: document.querySelectorAll(".nav-link"),
    chatContainer: document.querySelectorAll("#user-input"),
    messages: document.querySelectorAll("div#messages"),
    forms: document.querySelectorAll("div#chat-form"),
    img: document.querySelectorAll(".img-fluid"),
    links: document.querySelectorAll(".github-profile"),
    table: document.getElementById("table"),
    helplineTables: document.getElementsByClassName("table"),
    drpdwn: document.getElementById("drpdwn"),
    allLinks: document.querySelectorAll("a"),
    textContainer: document.querySelectorAll(".text-container"),
    accordionItems: document.querySelectorAll(".accordion-item"),
    accordionButton: document.querySelectorAll(".accordion-button"),
  };

  // Function to apply dark mode classes
  function applyDarkMode() {
    Array.from(document.getElementsByClassName("active")).forEach(element => {
      element.classList.remove("text-white");
    });
    
    elementsToToggle.textContainer.forEach(el => {
      el.classList.add("bg-dark", "text-white");
    });
    
    elementsToToggle.img.forEach(el => {
      el.setAttribute("src", "github-mark-white.svg");
    });
    
    elementsToToggle.forms.forEach(el => {
      el.classList.add("bg-dark", "text-white");
    });
    
    elementsToToggle.chatContainer.forEach(el => {
      el.classList.add("bg-dark", "text-white", "dropdown-menu-dark", "dropdown-item-dark");
    });
    
    elementsToToggle.messages.forEach(el => {
      el.classList.add("bg-dark", "text-white", "dropdown-menu-dark", "dropdown-item-dark");
    });

    // Apply dark mode to the accordion items and buttons
    elementsToToggle.accordionItems.forEach(el => {
      el.classList.add("bg-dark", "text-white");
    });
    elementsToToggle.accordionButton.forEach(el => {
      el.classList.add("bg-dark", "text-white");
    });

    // Apply dark mode to the main table
    if (elementsToToggle.table) {
      elementsToToggle.table.classList.add("table-dark");
    }

    // Apply dark mode to all helpline tables
    Array.from(elementsToToggle.helplineTables).forEach(table => {
      table.classList.add("table-dark");
    });

    if (elementsToToggle.drpdwn) {
      elementsToToggle.drpdwn.classList.add("dropdown-menu-dark");
    }

    elementsToToggle.navLinks.forEach(el => {
      if (!el.classList.contains("active")) {
        el.classList.add("text-white");
      }
    });

    elementsToToggle.allLinks.forEach(el => {
      if (!el.classList.contains("active") && !el.classList.contains("btn") && !el.classList.contains("bt")) {
        el.classList.add("text-white");
      }
    });

    elementsToToggle.links.forEach(el => {
      if (!el.classList.contains("active") && !el.classList.contains("btn") && !el.classList.contains("bt")) {
        el.classList.add("text-white");
      }
    });

    document.getElementById("lastUpdated").classList.add("text-white");
    localStorage.setItem("darkSwitch", "dark");
  }

  // Function to remove dark mode classes
  function removeDarkMode() {
    Array.from(document.getElementsByClassName("active")).forEach(element => {
      element.classList.add("text-white");
    });
    
    elementsToToggle.textContainer.forEach(el => {
      el.classList.remove("bg-dark", "text-white");
    });
    
    elementsToToggle.img.forEach(el => {
      el.setAttribute("src", "github-mark.svg");
    });
    
    elementsToToggle.forms.forEach(el => {
      el.classList.remove("bg-dark", "text-white");
    });
    
    elementsToToggle.chatContainer.forEach(el => {
      el.classList.remove("bg-dark", "text-white", "dropdown-menu-dark", "dropdown-item-dark");
    });
    
    elementsToToggle.messages.forEach(el => {
      el.classList.remove("bg-dark", "text-white", "dropdown-menu-dark", "dropdown-item-dark");
    });

    // Remove dark mode from the accordion items and buttons
    elementsToToggle.accordionItems.forEach(el => {
      el.classList.remove("bg-dark", "text-white");
    });
    elementsToToggle.accordionButton.forEach(el => {
      el.classList.remove("bg-dark", "text-white");
    });

    // Remove dark mode from the main table
    if (elementsToToggle.table) {
      elementsToToggle.table.classList.remove("table-dark");
    }

    // Remove dark mode from all helpline tables
    Array.from(elementsToToggle.helplineTables).forEach(table => {
      table.classList.remove("table-dark");
    });

    if (elementsToToggle.drpdwn) {
      elementsToToggle.drpdwn.classList.remove("dropdown-menu-dark");
    }

    elementsToToggle.navLinks.forEach(el => {
      el.classList.remove("text-white");
    });

    elementsToToggle.allLinks.forEach(el => {
      el.classList.remove("text-white");
    });

    elementsToToggle.links.forEach(el => {
      el.classList.remove("text-white");
    });

    document.getElementById("lastUpdated").classList.remove("text-white");
    localStorage.setItem("darkSwitch", "light");
  }

  // Toggle dark mode based on the current state
  if (darkSwitch === "dark") {
    applyDarkMode();
  } else {
    removeDarkMode();
  }
}
