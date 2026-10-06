// DailyPromise — page bêta : un onglet par téléphone.
// Ouvre celui du téléphone qui visite (ou celui demandé par l'adresse : /beta#android).
const tabs = [...document.querySelectorAll('.platform-tabs [role="tab"]')];
const select = (id) => {
  tabs.forEach((tab) => {
    const on = tab.getAttribute('aria-controls') === id;
    tab.setAttribute('aria-selected', String(on));
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !on;
  });
};
tabs.forEach((tab) => tab.addEventListener('click', () => {
  const id = tab.getAttribute('aria-controls');
  select(id);
  history.replaceState(null, '', '#' + id);
}));
const wanted = location.hash.slice(1);
select(wanted === 'android' || wanted === 'iphone' ? wanted
  : document.documentElement.getAttribute('data-platform') === 'android' ? 'android' : 'iphone');
