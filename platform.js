// DailyPromise — quel téléphone visite la page ?
// Chargé dans <head> : la page s'affiche directement avec les bons boutons
// (iPhone, Android, ou les deux sur ordinateur). Sans JavaScript, tout est visible.
(function () {
  var ua = navigator.userAgent || '';
  var touchMac = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1; // iPad récent
  // ?platform=android|ios|other force l'affichage, pour vérifier chaque version.
  var forced = (location.search.match(/[?&]platform=(android|ios|other)\b/) || [])[1];
  var platform = forced || (/Android/i.test(ua) ? 'android'
    : (/iPhone|iPad|iPod/.test(ua) || touchMac) ? 'ios'
    : 'other');
  document.documentElement.setAttribute('data-platform', platform);
})();
