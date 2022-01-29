window.addEventListener('load', () => {

    var examenes = document.getElementById('examenes');

    var numAleLateral = Math.round(Math.random() * 3);

    var numAleVertical = Math.round(Math.random() * 1 + 3);

    examenes.style.setProperty('right', 0 + "px");

    examenes.style.setProperty('left', 0 + "px");

    examenes.style.setProperty('top', 0 + "px");

    examenes.style.setProperty('bottom', 0 + "px");

    examenes.style.setProperty('left', (100 * numAleLateral) + "px");

    examenes.style.setProperty('top', (100 * numAleVertical) + "px");

});