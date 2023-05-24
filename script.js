function redirectPage(code) {
  switch (code) {
    case 'page1':
      loadElements("réseau");
      break;
    case 'page2':
      loadElements("télécommunication");
      break;
    default:
      console.log('Invalid code. No matching page found.');
  }
}

function loadElements(category) {
  var myObject = {
    "https://github.com/U45842209/U45842209": "main",
    "https://github.com/U45842209/SAE11": "réseau",
    "https://github.com/U45842209/SAE24": "réseau",
    "https://github.com/U45842209/Vis-ma-Vie_Fibre-optique": "télécommunication",
    "https://github.com/U45842209/Formation_Comprendre-et-mettre-en-uvre-le-protocole-SIP-dans-le-cadre-de-la-VoIP-et-ToIP": "télécommunication",
    "/Telecom/Ressources/SAE31.pdf": "télécommunication",
    "https://github.com/U45842209/Reseaux-cellulaires": "télécommunication",
  };

  var filteredElements = Object.keys(myObject).filter(function(key) {
    return myObject[key] === category || myObject[key] === "main";
  });

  // Load the elements
  for (var i = 0; i < filteredElements.length; i++) {
    var element = filteredElements[i];
    console.log("Loading element:", element);
    // Code to load the element goes here
  }
}