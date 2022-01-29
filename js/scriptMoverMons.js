window.addEventListener('load', () => {

    var monstruo = document.getElementById('monstruo');

    var estilosMonstuo = window.getComputedStyle(monstruo);

    var anchuraTablero = tablero.offsetWidth;

    var anchuraMonstruo = monstruo.offsetWidth;

    var numAle = Math.round(Math.random() * 6);

    // monstruo.style.setProperty('top', (100 * numAle) + "px");

    monstruo.style.setProperty('left', (100 * numAle) + "px");

    // monstruo.style.setProperty('bottom', (100 * numAle) + "px");

    // monstruo.style.setProperty('right', (100 * numAle) + "px");

    



});