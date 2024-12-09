
function init() {
  if (window.location.href.match('dashboard.html')) {
    navListClick(0);
  }
  if (window.location.href.match('applications.html')) {
    selectedTab('all')
  }
  updateDashboard();
  truncateName();
}
window.onload = init

function truncateName() {
  const nameElement = document.getElementById("name");
  const fullName = nameElement.textContent;
  const nameParts = fullName.split(" ");
  nameElement.textContent = `${nameParts[0]} ${nameParts[1].charAt(0)}.`;
}

function updateDashboard() {
  console.log('Retriving Data');
  const storedUser = JSON.parse(sessionStorage.getItem('user'));

  document.getElementById('name').innerText = `${storedUser.name}`;
  if (window.location.href.match('dashboard.html')) {
    document.getElementById('dashboard-title').innerText = `Hello, ${storedUser.name}`;
  }

  document.getElementById('email').innerText = `${storedUser.email}`;
  document.getElementById('profile-pic').src = `${storedUser.picture}`;
  console.log('Calling Data ' + JSON.stringify(storedUser.name));

  const isAdmin = storedUser.role === 'admin' ? true : false;

  if (isAdmin) {
    console.log('IS ADMIN');
    document.getElementById("nav-list").classList.add('hidden');
    document.getElementById("nav-list-admin").classList.add('visible');

  } else {
    document.getElementById("nav-list").classList.add('visible');
    document.getElementById("nav-list-admin").classList.add('hidden');
    document.getElementById("app-tabs").classList.add('hidden');
  }


}

function adminView() {
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const isAdmin = storedUser.role === 'Admin' ? true : false;

}


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
  var navList = document.getElementById("nav-list-admin").children;
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

function selectedTab(tabName) {
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
  document.getElementById(tabName).style.display = "block";
  document.getElementById(`${tabName}-tab`).className += " active";
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
