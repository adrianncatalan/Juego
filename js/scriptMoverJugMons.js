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

    var td = document.querySelectorAll("td");

    var jugador = document.getElementById('jugador');

    var estilosJugador = window.getComputedStyle(jugador);

    var coordIzqJug = parseInt(estilosJugador.getPropertyValue('left'));

    var coordDereJug = parseInt(estilosJugador.getPropertyValue('right'));

    var coordArrJug = parseInt(estilosJugador.getPropertyValue('top'));

    var coordAbaJug = parseInt(estilosJugador.getPropertyValue('bottom'));

    var coordJugador = [coordIzqJug, coordDereJug, coordArrJug, coordAbaJug];

    var mover = 0;

    var tablero = document.getElementById('tablero');

    var anchuraTablero = tablero.offsetWidth;

    var anchuraJugador = jugador.offsetWidth;

    //---------------------------------------------------------------------------

    // if(coordJugador[0] >= 100 || coordJugador[0] <= 700 && coordJugador[1] == 0 && coordJugador[2] >= 0 || coordJugador[2] <= 700 && coordJugador[3] == 0){
            
    //         td[1].addEventListener("click", (e) => {
            
    //             mover += 100;

    //             if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {
            
    //             jugador.style.left = mover + "px";

    //             }

    //         });
        
    // } else if(coordJugador[0] >= 0 || coordJugador[0] <= 700 && coordJugador[1] == 0 && coordJugador[2] >= 0 || coordJugador[2] <= 700 && coordJugador[3] == 0){

    //     for (let i = 8; i < 16; i++) {
            
    //         td[i].addEventListener("click", (e) => {
            
    //             mover += 100;

    //             if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {
            
    //             jugador.style.left = mover + "px";

    //             }

    //         });

    //     }
        
    // } 

// else if(coordJugador[0] >= 0 || coordJugador[0] <= 0 && coordJugador[1] == 0 && coordJugador[2] == 200 && coordJugador[3] == 0){

    //     for (let i = 0; i < 8; i++) {
            
    //         td[i].addEventListener("click", (e) => {
            
    //             mover += 100;

    //             if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {
            
    //             jugador.style.left = mover + "px";

    //             }

    //         });

    //     }

    // } else if(coordJugador[0] >= 0 || coordJugador[0] <= 0 && coordJugador[1] == 0 && coordJugador[2] == 300 && coordJugador[3] == 0){

    //     for (let i = 0; i < 8; i++) {
            
    //         td[i].addEventListener("click", (e) => {

    //             mover += 100;

    //             if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {
            
    //             jugador.style.left = mover + "px";


    //             }

    //         });

    //     }

    // } else if(coordJugador[0] >= 0 || coordJugador[0] <= 0 && coordJugador[1] == 0 && coordJugador[2] == 400 && coordJugador[3] == 0){

    //     for (let i = 0; i < 8; i++) {
         
    //         td[i].addEventListener("click", (e) => {

    //             console.log("hola");
            
    //             mover += 100;

    //             if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {
            
    //             jugador.style.left = mover + "px";

    //             }

    //         });

    //     }

    // }else if(coordJugador[0] >= 0 || coordJugador[0] <= 0 && coordJugador[1] == 0 && coordJugador[2] == 500 && coordJugador[3] == 0){

    //     for (let i = 0; i < 8; i++) {
            
    //         td[i].addEventListener("click", (e) => {
            
    //             mover += 100;

    //             if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {
            
    //             jugador.style.left = mover + "px";

    //             }

    //         });

    //     }

    // } else if(coordJugador[0] >= 0 || coordJugador[0] <= 0 && coordJugador[1] == 0 && coordJugador[2] == 600 && coordJugador[3] == 0){

    //     for (let i = 0; i < 8; i++) {
            
    //         td[i].addEventListener("click", (e) => {
            
    //             mover += 100;

    //             if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {
            
    //             jugador.style.left = mover + "px";
            
    //             }

    //         });

    //     }

    // } else if(coordJugador[0] >= 0 || coordJugador[0] <= 0 && coordJugador[1] == 0 && coordJugador[2] == 700 && coordJugador[3] == 0){

    //     for (let i = 0; i < 8; i++) {
            
    //         td[i].addEventListener("click", (e) => {

    //             mover += 100;

    //             if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {
            
    //             jugador.style.left = mover + "px";

    //             }

    //         });

    //     }

    // }

    var salir;

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

        //---------------------------------------------------------------------------

        if ((coordJugador[0] == 400 && coordJugador[1] == 0 && coordJugador[2] == 0 && coordJugador[3] == 0) ||
            (coordJugador[0] == 100 && coordJugador[1] == 0 && coordJugador[2] == 200 && coordJugador[3] == 0) ||
            (coordJugador[0] == 400 && coordJugador[1] == 0 && coordJugador[2] == 300 && coordJugador[3] == 0) ||
            (coordJugador[0] == 300 && coordJugador[1] == 0 && coordJugador[2] == 400 && coordJugador[3] == 0) ||
            (coordJugador[0] == 0 && coordJugador[1] == 0 && coordJugador[2] == 500 && coordJugador[3] == 0)) {

            mover = 0;

        } else if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

            jugador.style.setProperty('left', (coordIzqJug + mover) + 'px');

            if (coordJugador[0] == coordMonstruo[0] && coordJugador[1] == coordMonstruo[1] && coordJugador[2] == coordMonstruo[2] && coordJugador[3] == coordMonstruo[3]) {

                var gameOver = document.createElement('img');

                gameOver.className = 'gameOver';

                gameOver.src = '/img/gameOver.gif'

                document.body.prepend(gameOver);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        } else {

            console.log("Estas chocando con la pared.");

        }

        //

        // console.log(coordJugador[0]);

        // console.log(coordJugador[1]);

        // console.log(coordJugador[2]);

        // console.log(coordJugador[3]);

        // console.log("-------");

        // console.log(coordMonstruo[0]);

        // console.log(coordMonstruo[1]);

        // console.log(coordMonstruo[2]);

        // console.log(coordMonstruo[3]);

        //

        //Obstaculos
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
                console.log("Monstruo a la izquierda");
            }

        } else if (coordJugador[2] < coordMonstruo[2]) {

            //Mover arriba monstruo
            if (coordArrMons > 1) {

                monstruo.style.setProperty('top', (coordArrMons - mover) + 'px');
                console.log("Monstruo hacia arriba");
            }

        } else if (coordJugador[0] > coordMonstruo[0]) {

            // Mover derecha monstruo
            if (coordIzqMons + anchuraMonstruo <= anchuraTablero - mover) {

                monstruo.style.setProperty('left', (coordIzqMons + mover) + 'px');
                console.log("Monstruo hacia la derecha");
            }

        } else if (coordJugador[2] > coordMonstruo[2]) {

            //Mover abajo monstruo
            if (coordArrMons + anchuraMonstruo < anchuraTablero - mover) {

                monstruo.style.setProperty('top', (coordArrMons + mover) + 'px');
                console.log("Monstruo hacia abajo");
            }

        }

        var puertaPadre = document.getElementById('puertaPadre');

        var puertaCerrada = document.getElementById('puertaCerrada');

        var puertaAbierta = document.createElement('img');

        if (coordJugador[0] == coordExamenes[0] && coordJugador[1] == coordExamenes[1] && coordJugador[2] == coordExamenes[2] && coordJugador[3] == coordExamenes[3]) {

            var tomarExamenes = document.createElement('img');

            tomarExamenes.className = 'tomarExamenes';

            tomarExamenes.src = '/img/salir.gif'

            document.body.prepend(tomarExamenes);

            examenes.style.display = 'none';

            var btnGroup = document.getElementById('btnGroup');

            btnGroup.style.setProperty('visibility', 'hidden');

            var contenedorTablero = document.getElementById('contenedorTablero');

            var btnsalida = document.createElement('button');

            btnsalida.className = 'btnSalida'

            btnsalida.innerHTML = 'Ve a la salida';

            contenedorTablero.append(btnsalida);

            btnsalida.addEventListener('click', () => {

                btnsalida.style.display = 'none';

                tomarExamenes.style.display = 'none';

                btnGroup.style.setProperty('visibility', 'visible');

            });

            puertaAbierta.className = 'puertaAbierta'

            puertaAbierta.src = "/img/puertaAbierta.jpg";

            puertaPadre.replaceChild(puertaAbierta, puertaCerrada);

            salir = true;

        }

        if (salir) {

            if (coordJugador[0] == 600 && coordJugador[1] == 0 && coordJugador[2] == 700 && coordJugador[3] == 0) {

                var youWin = document.createElement('img');

                youWin.className = 'youWin';

                youWin.src = '/img/youWin.gif'

                document.body.prepend(youWin);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            }

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

        //---------------------------------------------------------------------------

        console.log(coordJugador[0]);

        console.log(coordJugador[1]);

        console.log(coordJugador[2]);

        console.log(coordJugador[3]);

        console.log("-------");

        //---------------------------------------------------------------------------

        if ((coordJugador[0] == 700 && coordJugador[1] == 0 && coordJugador[2] == 0 && coordJugador[3] == 0) ||
            (coordJugador[0] == 400 && coordJugador[1] == 0 && coordJugador[2] == 200 && coordJugador[3] == 0) ||
            (coordJugador[0] == 600 && coordJugador[1] == 0 && coordJugador[2] == 300 && coordJugador[3] == 0) ||
            (coordJugador[0] == 600 && coordJugador[1] == 0 && coordJugador[2] == 400 && coordJugador[3] == 0) ||
            (coordJugador[0] == 300 && coordJugador[1] == 0 && coordJugador[2] == 500 && coordJugador[3] == 0)) {

            mover = 0;

        } else if (coordIzqJug >= 1) {

            jugador.style.setProperty('left', (coordIzqJug - mover) + 'px');

            if (coordJugador[0] == coordMonstruo[0] && coordJugador[1] == coordMonstruo[1] && coordJugador[2] == coordMonstruo[2] && coordJugador[3] == coordMonstruo[3]) {

                var gameOver = document.createElement('img');

                gameOver.className = 'gameOver';

                gameOver.src = '/img/gameOver.gif'

                document.body.prepend(gameOver);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        } else {

            console.log("Estas chocando contra la pared");

        }

        //Obstaculos
        if ((coordMonstruo[0] == 700 && coordMonstruo[1] == 0 && coordMonstruo[2] == 0 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 400 && coordMonstruo[1] == 0 && coordMonstruo[2] == 200 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 600 && coordMonstruo[1] == 0 && coordMonstruo[2] == 300 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 600 && coordMonstruo[1] == 0 && coordMonstruo[2] == 400 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 300 && coordMonstruo[1] == 0 && coordMonstruo[2] == 500 && coordMonstruo[3] == 0)) {

            mover = 0;

        } else if (coordJugador[0] < coordMonstruo[0]) {

            //Mover izquierda monstruo
            if (coordIzqMons >= 1) {

                monstruo.style.setProperty('left', (coordIzqMons - mover) + 'px');
                console.log("Monstruo a la izquierda");
            }

        } else if (coordJugador[2] < coordMonstruo[2]) {

            //Mover arriba monstruo
            if (coordArrMons > 1) {

                monstruo.style.setProperty('top', (coordArrMons - mover) + 'px');
                console.log("Monstruo hacia arriba");
            }

        } else if (coordJugador[0] > coordMonstruo[0]) {

            // Mover derecha monstruo
            if (coordIzqMons + anchuraMonstruo <= anchuraTablero - mover) {

                monstruo.style.setProperty('left', (coordIzqMons + mover) + 'px');
                console.log("Monstruo hacia la derecha");
            }

        } else if (coordJugador[2] > coordMonstruo[2]) {

            //Mover abajo monstruo
            if (coordArrMons + anchuraMonstruo < anchuraTablero - mover) {

                monstruo.style.setProperty('top', (coordArrMons + mover) + 'px');
                console.log("Monstruo hacia abajo");
            }

        }

        var puertaPadre = document.getElementById('puertaPadre');

        var puertaCerrada = document.getElementById('puertaCerrada');

        var puertaAbierta = document.createElement('img');

        if (coordJugador[0] == coordExamenes[0] && coordJugador[1] == coordExamenes[1] && coordJugador[2] == coordExamenes[2] && coordJugador[3] == coordExamenes[3]) {

            var tomarExamenes = document.createElement('img');

            tomarExamenes.className = 'tomarExamenes';

            tomarExamenes.src = '/img/salir.gif'

            document.body.prepend(tomarExamenes);

            examenes.style.display = 'none';

            var btnGroup = document.getElementById('btnGroup');

            btnGroup.style.setProperty('visibility', 'hidden');

            var contenedorTablero = document.getElementById('contenedorTablero');

            var btnsalida = document.createElement('button');

            btnsalida.className = 'btnSalida'

            btnsalida.innerHTML = 'Ve a la salida';

            contenedorTablero.append(btnsalida);

            btnsalida.addEventListener('click', () => {

                btnsalida.style.display = 'none';

                tomarExamenes.style.display = 'none';

                btnGroup.style.setProperty('visibility', 'visible');

            });

            puertaAbierta.className = 'puertaAbierta'

            puertaAbierta.src = "/img/puertaAbierta.jpg";

            puertaPadre.replaceChild(puertaAbierta, puertaCerrada);

            salir = true;

        }

        if (salir) {

            if (coordJugador[0] == 600 && coordJugador[1] == 0 && coordJugador[2] == 700 && coordJugador[3] == 0) {

                var youWin = document.createElement('img');

                youWin.className = 'youWin';

                youWin.src = '/img/youWin.gif'

                document.body.prepend(youWin);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            } else if (coordJugador[0] == 700 && coordJugador[1] == 0 && coordJugador[2] == 600 && coordJugador[3] == 0) {

                var youWin = document.createElement('img');

                youWin.className = 'youWin';

                youWin.src = '/img/youWin.gif'

                document.body.prepend(youWin);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            }

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

        //---------------------------------------------------------------------------

        console.log(coordJugador[0]);

        console.log(coordJugador[1]);

        console.log(coordJugador[2]);

        console.log(coordJugador[3]);

        console.log("-------");

        //---------------------------------------------------------------------------

        if ((coordJugador[0] == 200 && coordJugador[1] == 0 && coordJugador[2] == 100 && coordJugador[3] == 0) ||
            (coordJugador[0] == 300 && coordJugador[1] == 0 && coordJugador[2] == 100 && coordJugador[3] == 0) ||
            (coordJugador[0] == 500 && coordJugador[1] == 0 && coordJugador[2] == 200 && coordJugador[3] == 0) ||
            (coordJugador[0] == 400 && coordJugador[1] == 0 && coordJugador[2] == 300 && coordJugador[3] == 0) ||
            (coordJugador[0] == 100 && coordJugador[1] == 0 && coordJugador[2] == 400 && coordJugador[3] == 0) ||
            (coordJugador[0] == 200 && coordJugador[1] == 0 && coordJugador[2] == 400 && coordJugador[3] == 0)) {

            mover = 0;

        } else if (coordArrJug + anchuraJugador < anchuraTablero - mover) {

            jugador.style.setProperty('top', (coordArrJug + mover) + 'px');

            if (coordJugador[0] == coordMonstruo[0] && coordJugador[1] == coordMonstruo[1] && coordJugador[2] == coordMonstruo[2] && coordJugador[3] == coordMonstruo[3]) {

                var gameOver = document.createElement('img');

                gameOver.className = 'gameOver';

                gameOver.src = '/img/gameOver.gif'

                document.body.prepend(gameOver);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        } else {

            console.log("Estas chocando con la pared")

        }

        //Obstaculos
        if ((coordMonstruo[0] == 300 && coordMonstruo[1] == 0 && coordMonstruo[2] == 100 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 200 && coordMonstruo[1] == 0 && coordMonstruo[2] == 100 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 500 && coordMonstruo[1] == 0 && coordMonstruo[2] == 200 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 400 && coordMonstruo[1] == 0 && coordMonstruo[2] == 300 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 200 && coordMonstruo[1] == 0 && coordMonstruo[2] == 400 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 100 && coordMonstruo[1] == 0 && coordMonstruo[2] == 400 && coordMonstruo[3] == 0)) {

            mover = 0;

        } else if (coordJugador[0] < coordMonstruo[0]) {

            //Mover izquierda monstruo
            if (coordIzqMons >= 1) {

                monstruo.style.setProperty('left', (coordIzqMons - mover) + 'px');
                console.log("Monstruo a la izquierda");
            }

        } else if (coordJugador[2] < coordMonstruo[2]) {

            //Mover arriba monstruo
            if (coordArrMons > 1) {

                monstruo.style.setProperty('top', (coordArrMons - mover) + 'px');
                console.log("Monstruo hacia arriba");
            }

        } else if (coordJugador[0] > coordMonstruo[0]) {

            // Mover derecha monstruo
            if (coordIzqMons + anchuraMonstruo <= anchuraTablero - mover) {

                monstruo.style.setProperty('left', (coordIzqMons + mover) + 'px');
                console.log("Monstruo hacia la derecha");
            }

        } else if (coordJugador[2] > coordMonstruo[2]) {

            //Mover abajo monstruo
            if (coordArrMons + anchuraMonstruo < anchuraTablero - mover) {

                monstruo.style.setProperty('top', (coordArrMons + mover) + 'px');
                console.log("Monstruo hacia abajo");
            }

        }

        var puertaPadre = document.getElementById('puertaPadre');

        var puertaCerrada = document.getElementById('puertaCerrada');

        var puertaAbierta = document.createElement('img');

        if (coordJugador[0] == coordExamenes[0] && coordJugador[1] == coordExamenes[1] && coordJugador[2] == coordExamenes[2] && coordJugador[3] == coordExamenes[3]) {

            var tomarExamenes = document.createElement('img');

            tomarExamenes.className = 'tomarExamenes';

            tomarExamenes.src = '/img/salir.gif'

            document.body.prepend(tomarExamenes);

            examenes.style.display = 'none';

            var btnGroup = document.getElementById('btnGroup');

            btnGroup.style.setProperty('visibility', 'hidden');

            var contenedorTablero = document.getElementById('contenedorTablero');

            var btnsalida = document.createElement('button');

            btnsalida.className = 'btnSalida'

            btnsalida.innerHTML = 'Ve a la salida';

            contenedorTablero.append(btnsalida);

            btnsalida.addEventListener('click', () => {

                btnsalida.style.display = 'none';

                tomarExamenes.style.display = 'none';

                btnGroup.style.setProperty('visibility', 'visible');

            });

            puertaAbierta.className = 'puertaAbierta'

            puertaAbierta.src = "/img/puertaAbierta.jpg";

            puertaPadre.replaceChild(puertaAbierta, puertaCerrada);

            salir = true;

        }

        if (salir) {

            if (coordJugador[0] == 700 && coordJugador[1] == 0 && coordJugador[2] == 600 && coordJugador[3] == 0) {

                var youWin = document.createElement('img');

                youWin.className = 'youWin';

                youWin.src = '/img/youWin.gif'

                document.body.prepend(youWin);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            }

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

        //---------------------------------------------------------------------------

        console.log(coordJugador[0]);

        console.log(coordJugador[1]);

        console.log(coordJugador[2]);

        console.log(coordJugador[3]);

        console.log("-------");

        //---------------------------------------------------------------------------

        if ((coordJugador[0] == 500 && coordJugador[1] == 0 && coordJugador[2] == 100 && coordJugador[3] == 0) ||
            (coordJugador[0] == 600 && coordJugador[1] == 0 && coordJugador[2] == 100 && coordJugador[3] == 0) ||
            (coordJugador[0] == 200 && coordJugador[1] == 0 && coordJugador[2] == 300 && coordJugador[3] == 0) ||
            (coordJugador[0] == 300 && coordJugador[1] == 0 && coordJugador[2] == 300 && coordJugador[3] == 0) ||
            (coordJugador[0] == 400 && coordJugador[1] == 0 && coordJugador[2] == 500 && coordJugador[3] == 0) ||
            (coordJugador[0] == 500 && coordJugador[1] == 0 && coordJugador[2] == 500 && coordJugador[3] == 0) ||
            (coordJugador[0] == 100 && coordJugador[1] == 0 && coordJugador[2] == 600 && coordJugador[3] == 0) ||
            (coordJugador[0] == 200 && coordJugador[1] == 0 && coordJugador[2] == 600 && coordJugador[3] == 0)) {

            mover = 0;

        } else if (coordArrJug > 1) {

            jugador.style.setProperty('top', (coordArrJug - mover) + 'px');

            if (coordJugador[0] == coordMonstruo[0] && coordJugador[1] == coordMonstruo[1] && coordJugador[2] == coordMonstruo[2] && coordJugador[3] == coordMonstruo[3]) {

                var gameOver = document.createElement('img');

                gameOver.className = 'gameOver';

                gameOver.src = '/img/gameOver.gif'

                document.body.prepend(gameOver);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        } else {

            console.log("Estas chocando contra la pared");

        }

        //Monstruo mueve hacia arriba
        if ((coordMonstruo[0] == 100 && coordMonstruo[1] == 0 && coordMonstruo[2] == 600 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 200 && coordMonstruo[1] == 0 && coordMonstruo[2] == 600 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 400 && coordMonstruo[1] == 0 && coordMonstruo[2] == 500 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 500 && coordMonstruo[1] == 0 && coordMonstruo[2] == 500 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 300 && coordMonstruo[1] == 0 && coordMonstruo[2] == 300 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 200 && coordMonstruo[1] == 0 && coordMonstruo[2] == 300 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 500 && coordMonstruo[1] == 0 && coordMonstruo[2] == 100 && coordMonstruo[3] == 0) ||
            (coordMonstruo[0] == 600 && coordMonstruo[1] == 0 && coordMonstruo[2] == 100 && coordMonstruo[3] == 0)) {

            mover = 0;

        } else if (coordJugador[0] < coordMonstruo[0]) {

            //Mover izquierda monstruo
            if (coordIzqMons >= 1) {

                monstruo.style.setProperty('left', (coordIzqMons - mover) + 'px');
                console.log("Monstruo a la izquierda");
            }

        } else if (coordJugador[2] < coordMonstruo[2]) {

            //Mover arriba monstruo
            if (coordArrMons > 1) {

                monstruo.style.setProperty('top', (coordArrMons - mover) + 'px');
                console.log("Monstruo hacia arriba");
            }

        } else if (coordJugador[0] > coordMonstruo[0]) {

            // Mover derecha monstruo
            if (coordIzqMons + anchuraMonstruo <= anchuraTablero - mover) {

                monstruo.style.setProperty('left', (coordIzqMons + mover) + 'px');
                console.log("Monstruo hacia la derecha");
            }

        } else if (coordJugador[2] > coordMonstruo[2]) {

            //Mover abajo monstruo
            if (coordArrMons + anchuraMonstruo < anchuraTablero - mover) {

                monstruo.style.setProperty('top', (coordArrMons + mover) + 'px');
                console.log("Monstruo hacia abajo");
            }

        }

        var puertaPadre = document.getElementById('puertaPadre');

        var puertaCerrada = document.getElementById('puertaCerrada');

        var puertaAbierta = document.createElement('img');

        if (coordJugador[0] == coordExamenes[0] && coordJugador[1] == coordExamenes[1] && coordJugador[2] == coordExamenes[2] && coordJugador[3] == coordExamenes[3]) {

            var tomarExamenes = document.createElement('img');

            tomarExamenes.className = 'tomarExamenes';

            tomarExamenes.src = '/img/salir.gif'

            document.body.prepend(tomarExamenes);

            examenes.style.display = 'none';

            var btnGroup = document.getElementById('btnGroup');

            btnGroup.style.setProperty('visibility', 'hidden');

            var contenedorTablero = document.getElementById('contenedorTablero');

            var btnsalida = document.createElement('button');

            btnsalida.className = 'btnSalida'

            btnsalida.innerHTML = 'Ve a la salida';

            contenedorTablero.append(btnsalida);

            btnsalida.addEventListener('click', () => {

                btnsalida.style.display = 'none';

                tomarExamenes.style.display = 'none';

                btnGroup.style.setProperty('visibility', 'visible');

            });

            puertaAbierta.className = 'puertaAbierta'

            puertaAbierta.src = "/img/puertaAbierta.jpg";

            puertaPadre.replaceChild(puertaAbierta, puertaCerrada);

            salir = true;

        }

        if (salir) {

            if (coordJugador[0] == 600 && coordJugador[1] == 0 && coordJugador[2] == 700 && coordJugador[3] == 0) {

                var youWin = document.createElement('img');

                youWin.className = 'youWin';

                youWin.src = '/img/youWin.gif'

                document.body.prepend(youWin);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            } else if (coordJugador[0] == 700 && coordJugador[1] == 0 && coordJugador[2] == 600 && coordJugador[3] == 0) {

                var youWin = document.createElement('img');

                youWin.className = 'youWin';

                youWin.src = '/img/youWin.gif'

                document.body.prepend(youWin);

                var btnGroup = document.getElementById('btnGroup');

                btnGroup.style.setProperty('visibility', 'hidden');

                var contenedorTablero = document.getElementById('contenedorTablero');

                var btnReset = document.createElement('button');

                btnReset.innerHTML = 'Volver a jugar';

                btnReset.className = 'btnReset';

                contenedorTablero.append(btnReset);

                btnReset.addEventListener('click', () => {

                    window.location.reload();

                });

            }

        }

    }

}