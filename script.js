function redirectPage(code) {
  switch (code) {
    case 'page1':
      window.open('/Network', '_blank');
      break;
    case 'page2':
      window.open('/Telecom', '_blank');
      break;
    default:
      console.log('Invalid code. No matching page found.');
  }
}

function loadElements() {
  var myObject = {
    "https://github.com/U45842209/U45842209": "main",
    "https://github.com/U45842209/SAE11": "réseau",
    "https://github.com/U45842209/SAE24": "réseau",
    "https://github.com/U45842209/Vis-ma-Vie_Fibre-optique": "télécommunication",
    "https://github.com/U45842209/Formation_Comprendre-et-mettre-en-uvre-le-protocole-SIP-dans-le-cadre-de-la-VoIP-et-ToIP": "télécommunication",
    "/Telecom/Ressources/SAE31.pdf": "télécommunication",
    "https://github.com/U45842209/Reseaux-cellulaires": "télécommunication"
  };

  if (window.location.pathname === '/Network') {
    var links = document.querySelectorAll('.projects ul a');
    var ul = document.querySelector('.projects ul');

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var href = link.getAttribute('href');
      if (myObject[href] === 'réseau') {
        var li = document.createElement('li');
        li.innerHTML = link.outerHTML;
        ul.appendChild(li);
      }
    }
  }
}