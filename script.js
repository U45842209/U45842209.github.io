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

  var ul = document.querySelector('.projects ul');

  for (var url in myObject) {
    if (myObject[url] === "réseau") {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.classList.add('folder');
      a.href = url;
      a.textContent = myObject[url] + " : ";
      li.appendChild(a);
      ul.appendChild(li);
    }
  }
}