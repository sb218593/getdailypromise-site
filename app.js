// DailyPromise — /app, la page du QR code : envoie chaque téléphone au bon endroit.
// Chargé après platform.js. Sans JavaScript, ou sur ordinateur, la page montre les deux boutons.
(function () {
  if (/[?&]platform=/.test(location.search)) return; // vérification manuelle : pas de redirection
  var platform = document.documentElement.getAttribute('data-platform');
  if (platform === 'ios') {
    location.replace('https://apps.apple.com/app/apple-store/id6818246394?pt=129546955&ct=qr&mt=8');
  } else if (platform === 'android') {
    location.replace('/beta#android');
  }
})();
