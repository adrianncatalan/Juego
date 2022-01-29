window.addEventListener('load', () => {

    var jugador = document.getElementById('jugador')

    var monstruo = document.getElementById('monstruo');

    var numAleLateral = Math.round(Math.random() * 6);

    var numAleVertical = Math.round(Math.random() * 1 + 6);

    monstruo.style.setProperty('left', (100 * numAleLateral) + "px");

    monstruo.style.setProperty('top', (100 * numAleVertical) + "px");


});