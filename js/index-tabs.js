document. querySelectorAll('nav.tabs button')
.forEach( el => el.addEventListener('click', switchTab));
function switchTab(ev) {
    document.querySelectorAll('nav.tabs button, div.panels div')
    .forEach( el => el.classList.remove('active'));
    ev.target.classList.add('active');
    const tabNum = ev.target.dataset.tab;
    document.querySelectorAll('div.panels div')
    .forEach( panel => {
        if(panel. dataset.tab === tabNum) {
            panel.classList.add('active');
        }
    });
}