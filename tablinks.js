var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


// JavaScript for tab switching functionality

// function opentab(tabName) {
//   var i, tabContent, tabLinks;
//   tabContent = document.getElementsByClassName("tab-contents");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }
//   tabLinks = document.getElementsByClassName("tab-links");
//   for (i = 0; i < tabLinks.length; i++) {
//     tabLinks[i].className = tabLinks[i].className.replace(" active-link", "");
//   }
//   document.getElementById(tabName).style.display = "block";
//   event.currentTarget.classList.add("active-link"); // Add class to the clicked tab link
// }
