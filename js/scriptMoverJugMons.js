window.onload = () => {

    //--------------------------------------------------------------------------

    var btnDerecha = document.getElementById('derecha');

    var btnIzquierda = document.getElementById('izquierda');

    var btnAbajo = document.getElementById('abajo');

    var btnArriba = document.getElementById('arriba');

    //--------------------------------------------------------------------------

    btnDerecha.addEventListener('click', moverDerecha);

    btnIzquierda.addEventListener('click', moverIzquierda);

    btnAbajo.addEventListener('click', moverAbajo);

    btnArriba.addEventListener('click', moverArriba);

    //--------------------------------------------------------------------------

    function moverDerecha() {

        var jugador = document.getElementById('jugador');

        var estilosJugador = window.getComputedStyle(jugador);

        var monstruo = document.getElementById('monstruo');

        var estilosMonstruo = window.getComputedStyle(monstruo);

        var examenes = document.getElementById('examenes');

        var estilosExamenes = window.getComputedStyle(examenes);

        //--------------------------------------------------------------------------

        var mover = 100;

        var tablero = document.getElementById('tablero');

        var anchuraTablero = tablero.offsetWidth;

        var anchuraJugador = jugador.offsetWidth;

        var anchuraMonstruo = monstruo.offsetWidth;

        //--------------------------------------------------------------------------

        var coordIzqJug = parseInt(estilosJugador.getPropertyValue('left'));

        var coordDereJug = parseInt(estilosJugador.getPropertyValue('right'));

        var coordArrJug = parseInt(estilosJugador.getPropertyValue('top'));

        var coordAbaJug = parseInt(estilosJugador.getPropertyValue('bottom'));

        var coordJugador = [coordIzqJug, coordDereJug, coordArrJug, coordAbaJug];

        //--------------------------------------------------------------------------

        var coordIzqMons = parseInt(estilosMonstruo.getPropertyValue('left'));

        var coordDereMons = parseInt(estilosMonstruo.getPropertyValue('right'));

        var coordArrMons = parseInt(estilosMonstruo.getPropertyValue('top'));

        var coordAbaMons = parseInt(estilosMonstruo.getPropertyValue('bottom'));

        var coordMonstruo = [coordIzqMons, coordDereMons, coordArrMons, coordAbaMons];

        //--------------------------------------------------------------------------

        var coordIzqExams = parseInt(estilosExamenes.getPropertyValue('left'));

        var coordDereExams = parseInt(estilosExamenes.getPropertyValue('right'));

        var coordArrExams = parseInt(estilosExamenes.getPropertyValue('top'));

        var coordAbaExams = parseInt(estilosExamenes.getPropertyValue('bottom'));

        var coordExamenes = [coordIzqExams, coordDereExams, coordArrExams, coordAbaExams];

        // console.log(coordJugador[0])
        // console.log(coordJugador[1])
        // console.log(coordJugador[2])
        // console.log(coordJugador[3])
        // console.log("------------")
        // console.log(coordExamenes[0])
        // console.log(coordExamenes[1])
        // console.log(coordExamenes[2])
        // console.log(coordExamenes[3])

        //--------------------------------------------------------------------------

        if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

            jugador.style.setProperty('left', (coordIzqJug + mover) + 'px');

            if (coordJugador[0] == coordMonstruo[0] && coordJugador[1] == coordMonstruo[1] && coordJugador[2] == coordMonstruo[2] && coordJugador[3] == coordMonstruo[3]) {

                var gameOver = document.createElement('img');

                gameOver.className = 'gameOver';

                gameOver.src = '/img/gameOver.gif'

                document.body.prepend(gameOver);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                gameOver.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        } else {

            console.log("Estas chocando con la pared")

        }

        if (coordIzqMons + anchuraMonstruo <= anchuraTablero - mover) {

            monstruo.style.setProperty('left', (coordIzqMons + mover) + 'px');

        }

        if (coordJugador[0] == coordExamenes[0] && coordJugador[1] == coordExamenes[1] && coordJugador[2] == coordExamenes[2] && coordJugador[3] == coordExamenes[3]) {

            examenes.style.setProperty('left', (30) + "%");

            examenes.style.setProperty('top', (30) + "%");

            document.body.prepend(examenes);

            var puertaPadre = document.getElementById('puertaPadre');

            var puertaCerrada = document.getElementById('puertaCerrada');

            var puertaAbierta = document.createElement('img');

            puertaAbierta.className = 'puertaAbierta'

            puertaAbierta.src = "/img/puertaAbierta.jpg";

            puertaPadre.replaceChild(puertaAbierta, puertaCerrada);

        }

    }

    function moverIzquierda() {

        var jugador = document.getElementById('jugador');

        var estilosJugador = window.getComputedStyle(jugador);

        var monstruo = document.getElementById('monstruo');

        var estilosMonstruo = window.getComputedStyle(monstruo);

        var examenes = document.getElementById('examenes');

        var estilosExamenes = window.getComputedStyle(examenes);

        var mover = 100;

        var anchuraTablero = tablero.offsetWidth;

        var anchuraMonstruo = monstruo.offsetWidth;

        //--------------------------------------------------------------------------

        var coordIzqJug = parseInt(estilosJugador.getPropertyValue('left'));

        var coordDereJug = parseInt(estilosJugador.getPropertyValue('right'));

        var coordArrJug = parseInt(estilosJugador.getPropertyValue('top'));

        var coordAbaJug = parseInt(estilosJugador.getPropertyValue('bottom'));

        var coordJugador = [coordIzqJug, coordDereJug, coordArrJug, coordAbaJug];

        //--------------------------------------------------------------------------

        var coordIzqMons = parseInt(estilosMonstruo.getPropertyValue('left'));

        var coordDereMons = parseInt(estilosMonstruo.getPropertyValue('right'));

        var coordArrMons = parseInt(estilosMonstruo.getPropertyValue('top'));

        var coordAbaMons = parseInt(estilosMonstruo.getPropertyValue('bottom'));

        var coordMonstruo = [coordIzqMons, coordDereMons, coordArrMons, coordAbaMons];

        //--------------------------------------------------------------------------

        var coordIzqExams = parseInt(estilosExamenes.getPropertyValue('left'));

        var coordDereExams = parseInt(estilosExamenes.getPropertyValue('right'));

        var coordArrExams = parseInt(estilosExamenes.getPropertyValue('top'));

        var coordAbaExams = parseInt(estilosExamenes.getPropertyValue('bottom'));

        var coordExamenes = [coordIzqExams, coordDereExams, coordArrExams, coordAbaExams];

        //--------------------------------------------------------------------------

        if (coordIzqJug >= 1) {

            jugador.style.setProperty('left', (coordIzqJug - mover) + 'px');

            if (coordJugador[0] == coordMonstruo[0] && coordJugador[1] == coordMonstruo[1] && coordJugador[2] == coordMonstruo[2] && coordJugador[3] == coordMonstruo[3]) {

                var gameOver = document.createElement('img');

                gameOver.className = 'gameOver';

                gameOver.src = '/img/gameOver.gif'

                document.body.prepend(gameOver);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                gameOver.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        } else {

            console.log("Estas chocando contra la pared");

        }

        if (coordIzqMons >= 1) {

            monstruo.style.setProperty('left', (coordIzqMons - mover) + 'px');

        }

        if (coordJugador[0] == coordExamenes[0] && coordJugador[1] == coordExamenes[1] && coordJugador[2] == coordExamenes[2] && coordJugador[3] == coordExamenes[3]) {

            examenes.style.setProperty('left', (30) + "%");

            examenes.style.setProperty('top', (30) + "%");

            document.body.prepend(examenes);

            var puertaPadre = document.getElementById('puertaPadre');

            var puertaCerrada = document.getElementById('puertaCerrada');

            var puertaAbierta = document.createElement('img');

            puertaAbierta.className = 'puertaAbierta'

            puertaAbierta.src = "/img/puertaAbierta.jpg";

            puertaPadre.replaceChild(puertaAbierta, puertaCerrada);

        }

    }

    function moverAbajo() {

        var jugador = document.getElementById('jugador');

        var estilosJugador = window.getComputedStyle(jugador);

        var monstruo = document.getElementById('monstruo');

        var estilosMonstruo = window.getComputedStyle(monstruo);

        var examenes = document.getElementById('examenes');

        var estilosExamenes = window.getComputedStyle(examenes);

        //--------------------------------------------------------------------------

        var coordIzqJug = parseInt(estilosJugador.getPropertyValue('left'));

        var coordDereJug = parseInt(estilosJugador.getPropertyValue('right'));

        var coordArrJug = parseInt(estilosJugador.getPropertyValue('top'));

        var coordAbaJug = parseInt(estilosJugador.getPropertyValue('bottom'));

        var coordJugador = [coordIzqJug, coordDereJug, coordArrJug, coordAbaJug];

        //--------------------------------------------------------------------------

        var coordIzqMons = parseInt(estilosMonstruo.getPropertyValue('left'));

        var coordDereMons = parseInt(estilosMonstruo.getPropertyValue('right'));

        var coordArrMons = parseInt(estilosMonstruo.getPropertyValue('top'));

        var coordAbaMons = parseInt(estilosMonstruo.getPropertyValue('bottom'));

        var coordMonstruo = [coordIzqMons, coordDereMons, coordArrMons, coordAbaMons];

        //--------------------------------------------------------------------------

        var coordIzqExams = parseInt(estilosExamenes.getPropertyValue('left'));

        var coordDereExams = parseInt(estilosExamenes.getPropertyValue('right'));

        var coordArrExams = parseInt(estilosExamenes.getPropertyValue('top'));

        var coordAbaExams = parseInt(estilosExamenes.getPropertyValue('bottom'));

        var coordExamenes = [coordIzqExams, coordDereExams, coordArrExams, coordAbaExams];

        //--------------------------------------------------------------------------

        var mover = 100;

        var tablero = document.getElementById('tablero');

        var anchuraTablero = tablero.offsetWidth;

        var anchuraJugador = jugador.offsetWidth;

        var anchuraMonstruo = monstruo.offsetWidth;

        if (coordArrJug + anchuraJugador < anchuraTablero - mover) {

            jugador.style.setProperty('top', (coordArrJug + mover) + 'px');

            if (coordJugador[0] == coordMonstruo[0] && coordJugador[1] == coordMonstruo[1] && coordJugador[2] == coordMonstruo[2] && coordJugador[3] == coordMonstruo[3]) {

                var gameOver = document.createElement('img');

                gameOver.className = 'gameOver';

                gameOver.src = '/img/gameOver.gif'

                document.body.prepend(gameOver);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                gameOver.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        } else {

            console.log("Estas chocando con la pared")

        }

        if (coordArrMons + anchuraMonstruo < anchuraTablero - mover) {

            monstruo.style.setProperty('top', (coordArrMons + mover) + 'px');

        }

        if (coordJugador[0] == coordExamenes[0] && coordJugador[1] == coordExamenes[1] && coordJugador[2] == coordExamenes[2] && coordJugador[3] == coordExamenes[3]) {

            examenes.style.setProperty('left', (30) + "%");

            examenes.style.setProperty('top', (30) + "%");

            document.body.prepend(examenes);

            var puertaPadre = document.getElementById('puertaPadre');

            var puertaCerrada = document.getElementById('puertaCerrada');

            var puertaAbierta = document.createElement('img');

            puertaAbierta.className = 'puertaAbierta'

            puertaAbierta.src = "/img/puertaAbierta.jpg";

            puertaPadre.replaceChild(puertaAbierta, puertaCerrada);

        }

    }

    function moverArriba() {

        var jugador = document.getElementById('jugador');

        var estilosJugador = window.getComputedStyle(jugador);

        var monstruo = document.getElementById('monstruo');

        var estilosMonstruo = window.getComputedStyle(monstruo);

        var examenes = document.getElementById('examenes');

        var estilosExamenes = window.getComputedStyle(examenes);

        //--------------------------------------------------------------------------

        var coordIzqJug = parseInt(estilosJugador.getPropertyValue('left'));

        var coordDereJug = parseInt(estilosJugador.getPropertyValue('right'));

        var coordArrJug = parseInt(estilosJugador.getPropertyValue('top'));

        var coordAbaJug = parseInt(estilosJugador.getPropertyValue('bottom'));

        var coordJugador = [coordIzqJug, coordDereJug, coordArrJug, coordAbaJug];

        //--------------------------------------------------------------------------

        var coordIzqMons = parseInt(estilosMonstruo.getPropertyValue('left'));

        var coordDereMons = parseInt(estilosMonstruo.getPropertyValue('right'));

        var coordArrMons = parseInt(estilosMonstruo.getPropertyValue('top'));

        var coordAbaMons = parseInt(estilosMonstruo.getPropertyValue('bottom'));

        var coordMonstruo = [coordIzqMons, coordDereMons, coordArrMons, coordAbaMons];

        //--------------------------------------------------------------------------

        var coordIzqExams = parseInt(estilosExamenes.getPropertyValue('left'));

        var coordDereExams = parseInt(estilosExamenes.getPropertyValue('right'));

        var coordArrExams = parseInt(estilosExamenes.getPropertyValue('top'));

        var coordAbaExams = parseInt(estilosExamenes.getPropertyValue('bottom'));

        var coordExamenes = [coordIzqExams, coordDereExams, coordArrExams, coordAbaExams];

        //--------------------------------------------------------------------------

        var mover = 100;

        var tablero = document.getElementById('tablero');

        var anchuraTablero = tablero.offsetWidth;

        var anchuraMonstruo = monstruo.offsetWidth;

        if (coordArrJug > 1) {

            jugador.style.setProperty('top', (coordArrJug - mover) + 'px');

            if (coordJugador[0] == coordMonstruo[0] && coordJugador[1] == coordMonstruo[1] && coordJugador[2] == coordMonstruo[2] && coordJugador[3] == coordMonstruo[3]) {

                var gameOver = document.createElement('img');

                gameOver.className = 'gameOver';

                gameOver.src = '/img/gameOver.gif'

                document.body.prepend(gameOver);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                gameOver.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        } else {

            console.log("Estas chocando contra la pared");

        }

        if (coordArrMons > 1) {

            monstruo.style.setProperty('top', (coordArrMons - mover) + 'px');

        }

        if (coordJugador[0] == coordExamenes[0] && coordJugador[1] == coordExamenes[1] && coordJugador[2] == coordExamenes[2] && coordJugador[3] == coordExamenes[3]) {

            examenes.style.setProperty('left', (30) + "%");

            examenes.style.setProperty('top', (30) + "%");

            document.body.prepend(examenes);

            var puertaPadre = document.getElementById('puertaPadre');

            var puertaCerrada = document.getElementById('puertaCerrada');

            var puertaAbierta = document.createElement('img');

            puertaAbierta.className = 'puertaAbierta'

            puertaAbierta.src = "/img/puertaAbierta.jpg";

            puertaPadre.replaceChild(puertaAbierta, puertaCerrada);

        }
    }

}