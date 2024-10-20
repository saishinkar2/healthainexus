
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
  const navLinks = document.querySelectorAll(".nav-link");
  const img = document.querySelectorAll(".img-fluid")
  const links = document.querySelectorAll(".github-profile")

  if (darkSwitch === null) {
    img.forEach(el => {
      el.setAttribute("src", "github-mark.svg")
  })
  links.forEach(element => {
    element.classList.remove("text-white")
  })
    navLinks.forEach(element => {
      try {

        document.getElementById("table").classList.remove("table-dark")
      } catch (error) {
        
      }
      element.classList.remove("text-white");
      document.getElementById("drpdwn").classList.remove("dropdown-menu-dark")
    });
    return false
  } else if (darkSwitch === "dark"){
    img.forEach(el => {
        el.setAttribute("src", "github-mark-white.svg")
    })
    
    navLinks.forEach(element => {
      try {
        document.getElementById("table").classList.add("table-dark")
      } catch (error) {
        console.error(error)
        console.log("above error may be caused cause there is no table in the page")
      }
      element.classList.add("text-white");
      document.getElementById("drpdwn").classList.add("dropdown-menu-dark")
    });

    links.forEach(element => {
      element.classList.add("text-white")
    })
return true

  }



}

