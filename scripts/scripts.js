// progress bar
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  var scrolled = (winScroll / height) * 100
  document.getElementById("progress-bar").style.width = scrolled + "%"
} 


// single page app functionality
function setTitle(props) {
  document.getElementById("page-title").innerText = props
}

function setContent(props) {
  var pageList = document.getElementsByTagName("main")
  for (let eachPage of pageList) { eachPage.style.display =  'none' }
  var clickedPage = document.getElementById(props)
  clickedPage.style.display = 'block'
}

function setSidebar(props) {
  var mq = window.matchMedia( "(min-width: 840px)" );
  var sidebarList = document.getElementsByClassName("left-sidebar")
  if (mq.matches) {
    for (let eachSidebar of sidebarList) { eachSidebar.style.display =  'none' }
    var clickedSidebar = document.getElementById(props)
    clickedSidebar.style.display = 'block'
  }
  else {
    for (let eachSidebar of sidebarList) { eachSidebar.style.display =  'none' }
  }
}

// register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
