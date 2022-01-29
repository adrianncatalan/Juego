window.onload = () => {

    var btnDerecha = document.getElementById('derecha');

    var btnIzquierda = document.getElementById('izquierda');

    var btnAbajo = document.getElementById('abajo');

    var btnArriba = document.getElementById('arriba');

    btnDerecha.addEventListener('click', moverDerecha);

    btnIzquierda.addEventListener('click', moverIzquierda);

    btnAbajo.addEventListener('click', moverAbajo);

    btnArriba.addEventListener('click', moverArriba);

    //--------------------------------------------------------------------------

    function moverDerecha() {

        var jugador = document.getElementById('jugador');

        var estilosJugador = window.getComputedStyle(jugador);

        var mover = 100;

        var tablero = document.getElementById('tablero');

        var anchuraTablero = tablero.offsetWidth;

        var anchuraJugador = jugador.offsetWidth;

        var coordIzq = parseInt(estilosJugador.getPropertyValue('left'));

        if (coordIzq + anchuraJugador <= anchuraTablero - mover) {

            jugador.style.setProperty('left', (coordIzq + mover) + 'px');

        }

    }

    function moverIzquierda() {

        var jugador = document.getElementById('jugador');

        var estilosJugador = window.getComputedStyle(jugador);

        var mover = 100;

        var tablero = document.getElementById('tablero');

        var anchuraTablero = tablero.offsetWidth;

        var anchuraJugador = jugador.offsetWidth;

        var coordDer = parseInt(estilosJugador.getPropertyValue('left'));

        if (coordDer >= 1) {

            jugador.style.setProperty('left', (coordDer - mover) + 'px');

        }

    }

    function moverAbajo() {

        var jugador = document.getElementById('jugador');

        var estilosJugador = window.getComputedStyle(jugador);

        var mover = 100;

        var tablero = document.getElementById('tablero');

        var anchuraTablero = tablero.offsetWidth;

        var anchuraJugador = jugador.offsetWidth;

        var coordAba = parseInt(estilosJugador.getPropertyValue('top'));

        console.log(coordAba + anchuraJugador)

        console.log(anchuraTablero - mover)

        if (coordAba + anchuraJugador < anchuraTablero - mover) {

            jugador.style.setProperty('top', (coordAba + mover) + 'px');

        }

    }

    function moverArriba() {

        var jugador = document.getElementById('jugador');

        var estilosJugador = window.getComputedStyle(jugador);

        var mover = 100;

        var tablero = document.getElementById('tablero');

        var anchuraTablero = tablero.offsetWidth;

        var anchuraJugador = jugador.offsetWidth;

        var coordArr = parseInt(estilosJugador.getPropertyValue('top'));

        console.log(coordArr - anchuraJugador)

        console.log(anchuraTablero + mover)

        if (coordArr > 1) {

            jugador.style.setProperty('top', (coordArr - mover) + 'px');

        }

    }

}