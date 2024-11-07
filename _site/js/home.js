let auth0;

function init() {
  navListClick(0);
}
window.onload = init;



function navListClick(index) {
  let element;
  switch (index) {
    case 0:
      element = document.getElementById("dashboard-view");  // Get the DIV element
      element.classList.remove("hidden"); // Remove mystyle class from DIV
      element.classList.add("visible"); // Add newone class to DIV
      document.getElementById("apps-view").classList.remove('visible')
      document.getElementById("apps-view").classList.add('hidden')

      break;
    case 1:
      element = document.getElementById("apps-view");  // Get the DIV element
      element.classList.remove("hidden"); // Remove mystyle class from DIV
      element.classList.add("visible"); // Add newone class to DIV
      document.getElementById("dashboard-view").classList.remove('visible')
      document.getElementById("dashboard-view").classList.add('hidden')

      break;
    case 2:
      element = document.getElementById("apps-view");  // Get the DIV element
      element.classList.remove("hidden"); // Remove mystyle class from DIV
      element.classList.add("visible"); // Add newone class to DIV
      document.getElementById("dashboard-view").classList.remove('visible')
      document.getElementById("dashboard-view").classList.add('hidden')

      break;
    default:
      break;
  }
  var navList = document.getElementById("nav-list").children;
  for (var i = 0; i < navList.length; i++) {
    navList[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += "active";
    });
  }

}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "210px";
  document.getElementById("container").style.marginLeft = "225px";
  document.getElementById("header").style.marginLeft = "210px";
  document.getElementById("menu-icon").style.display = "none";
  document.getElementById("logo").style.display = "none";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "60px";
  document.getElementById("container").style.marginLeft = "60px";
  document.getElementById("header").style.marginLeft = "0px";
  document.getElementById("menu-icon").style.display = "block";
  document.getElementById("logo").style.display = "block";
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById('test').style.display = "block";
  evt.currentTarget.className += " active";
}

function selectRating(selected) {
  // Remove 'text-primary' class from all spans
  const spans = document.querySelectorAll('.modal-radio-buttons');
  spans.forEach(span => {
    span.classList.remove('text-primary');
  });
  // Add 'text-primary' class to the selected span
  selected.classList.add('text-primary');
}
