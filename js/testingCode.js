//Monstruo mueve hacia la derecha
if ((coordMonstruo[0] == 0 && coordMonstruo[1] == 0 && coordMonstruo[2] == 500 && coordMonstruo[3] == 0) ||
    (coordMonstruo[0] == 300 && coordMonstruo[1] == 0 && coordMonstruo[2] == 400 && coordMonstruo[3] == 0) ||
    (coordMonstruo[0] == 400 && coordMonstruo[1] == 0 && coordMonstruo[2] == 300 && coordMonstruo[3] == 0) ||
    (coordMonstruo[0] == 100 && coordMonstruo[1] == 0 && coordMonstruo[2] == 200 && coordMonstruo[3] == 0) ||
    (coordMonstruo[0] == 400 && coordMonstruo[1] == 0 && coordMonstruo[2] == 0 && coordMonstruo[3] == 0)) {

    mover = 0;

} else if (coordJugador[0] < coordMonstruo[0]) {

    //Mover izquierda monstruo
    if (coordIzqMons >= 1) {

        monstruo.style.setProperty('left', (coordIzqMons - mover) + 'px');

    }

} else if (coordJugador[2] < coordMonstruo[2]) {

    //Mover arriba monstruo
    if (coordArrMons > 1) {

        monstruo.style.setProperty('top', (coordArrMons - mover) + 'px');

    }

} else if (coordJugador[1] < coordMonstruo[1]) {

    // Mover derecha monstruo
    if (coordIzqMons + anchuraMonstruo <= anchuraTablero - mover) {

        monstruo.style.setProperty('left', (coordIzqMons + mover) + 'px');

    }

} else if (coordJugador[3] < coordMonstruo[3]) {

    //Mover abajo monstruo
    if (coordArrMons + anchuraMonstruo < anchuraTablero - mover) {

        monstruo.style.setProperty('top', (coordArrMons + mover) + 'px');

    }

}




















