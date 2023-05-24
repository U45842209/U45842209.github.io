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
    "https://github.com/U45842209/U45842209": { title: "A propos de moi", type: "main" },
    "https://github.com/U45842209/SAE11": { title: "SAE11 : Hygiène informatique et cybersécurité", type: "réseau" },
    "https://github.com/U45842209/SAE24": { title: "SAE24 : Mise en place d'un réseau d'entreprise", type: "réseau" },
    "https://github.com/U45842209/Vis-ma-Vie_Fibre-optique": { title: "Intervention pose de fibre", type: "télécommunication" },
    "https://github.com/U45842209/Formation_Comprendre-et-mettre-en-uvre-le-protocole-SIP-dans-le-cadre-de-la-VoIP-et-ToIP": { title: "Formation : Comprendre et mettre en œuvre le protocole SIP dans le cadre de la VoIP et ToIP", type: "télécommunication" },
    "/Telecom/Ressources/SAE31.pdf": { title: "SAE31 : Analyse des filtres en SuperCollider", type: "télécommunication" },
    "https://github.com/U45842209/Reseaux-cellulaires": { title: "Reseaux cellulaires", type: "télécommunication" }
  };

  var ul = document.querySelector('.projects ul');

  // Clear existing list items
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // Create the "main" element if it doesn't exist
  if (!myObject.hasOwnProperty("https://github.com/U45842209/U45842209")) {
    var mainURL = "https://github.com/U45842209/U45842209";
    var mainTitle = "A propos de moi";
    var mainType = "main";
    var mainLi = createListItem(mainURL, mainTitle, mainType);
    ul.appendChild(mainLi);
  }

  // Iterate over the elements in myObject and load the elements with titles
  for (var url in myObject) {
    var title = myObject[url].title;
    var type = myObject[url].type;
    var li = createListItem(url, title, type);
    ul.appendChild(li);
  }
}

function createListItem(url, title, type) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.classList.add('folder');
  a.href = url;
  a.textContent = title;
  li.appendChild(a);

  if (type === "réseau") {
    li.classList.add('reseau');
  } else if (type === "télécommunication") {
    li.classList.add('telecommunication');
  }

  return li;
}