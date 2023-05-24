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
  var myObject = [
    { url: "https://github.com/U45842209/U45842209", title: "A propos de moi", type: "main" },
    { url: "https://github.com/U45842209/SAE11", title: "SAE11 : Hygiène informatique et cybersécurité", type: "réseau" },
    { url: "https://github.com/U45842209/SAE24", title: "SAE24 : Mise en place d'un réseau d'entreprise", type: "réseau" },
    { url: "https://github.com/U45842209/Vis-ma-Vie_Fibre-optique", title: "Intervention pose de fibre", type: "télécommunication" },
    { url: "https://github.com/U45842209/Formation_Comprendre-et-mettre-en-uvre-le-protocole-SIP-dans-le-cadre-de-la-VoIP-et-ToIP", title: "Formation : Comprendre et mettre en œuvre le protocole SIP dans le cadre de la VoIP et ToIP", type: "télécommunication" },
    { url: "/Telecom/Ressources/SAE31.pdf", title: "SAE31 : Analyse des filtres en SuperCollider", type: "réseau" },
    { url: "https://github.com/U45842209/Reseaux-cellulaires", title: "Reseaux cellulaires", type: "réseau" }
  ];

  var ul = document.querySelector('.projects ul');

  // Clear existing list items
  ul.innerHTML = "";

  // Check if the "main" element already exists in the list
  var mainElementExists = false;
  for (var i = 0; i < ul.children.length; i++) {
    var li = ul.children[i];
    if (li.textContent.trim() === mainElement.title) {
      mainElementExists = true;
      break;
    }
  }

  // Create the "main" element if it doesn't exist
  if (!mainElementExists) {
    var mainLi = createListItem(mainElement.url, mainElement.title);
    ul.insertBefore(mainLi, ul.firstChild);
  }

  // Get the current page URL
  var currentPageURL = window.location.href;

  // Filter elements based on the current page URL
  var filteredElements = myObject.filter(element => {
    if (currentPageURL.includes("/Network")) {
      return element.type === "main" || element.type === "réseau";
    } else if (currentPageURL.includes("/Telecom")) {
      return element.type === "main" || element.type === "télécommunication";
    }
    return false;
  });

  // Create list items for the filtered elements
  filteredElements.forEach(element => {
    var li = createListItem(element.url, element.title);
    ul.appendChild(li);
  });
}

function createListItem(url, title) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.classList.add('folder');
  a.href = url;
  a.textContent = title;
  li.appendChild(a);
  return li;
}