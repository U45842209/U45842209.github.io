function redirectPage(code) {
  switch (code) {
    case 'page1':
      window.location.href = '/Network';
      break;
    case 'page2':
      window.location.href = '/Telecom';
      break;
    default:
      console.log('Invalid code. No matching page found.');
  }
}