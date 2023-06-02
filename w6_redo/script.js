var tray = document.querySelector('#tray');
tray.addEventListener('click', openClose);

function openClose(e) {
  var nav = document.querySelector('nav');
  nav.classList.toggle('hidden');
  e.target.style.backgroundColor = '#373737';
}

var tabs = document.querySelectorAll('#tabs a');
var breadcrumbs = document.querySelectorAll('#breadcrumbs a');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function(e) {
    for (let j = i; j < breadcrumbs.length; j++) {
      breadcrumbs[j].textContent = e.target.textContent;
    }
    e.target.style.backgroundColor = '#161616';
  });
}
