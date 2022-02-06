window.addEventListener("load", () => {


    var td = document.querySelectorAll('td');

    var jugador = document.getElementById('jugador');

    var estilosJugador = window.getComputedStyle(jugador);

    var coordIzqJug = parseInt(estilosJugador.getPropertyValue('left'));

    var coordDereJug = parseInt(estilosJugador.getPropertyValue('right'));

    var coordArrJug = parseInt(estilosJugador.getPropertyValue('top'));

    var coordAbaJug = parseInt(estilosJugador.getPropertyValue('bottom'));

    var mover = 100;

    var tablero = document.getElementById('tablero');

    var anchuraTablero = tablero.offsetWidth;

    var anchuraJugador = jugador.offsetWidth;

    var x = 1;

    var y = 1;

    td[1].addEventListener("click", () => {

        if (x == 1 && y == 1) {

            if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

                jugador.style.setProperty('left', (coordIzqJug + mover) + 'px');

            }

            x++;

        }
    });

    td[2].addEventListener("click", () => {

        if (x == 2 && y == 1) {

            if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

                jugador.style.setProperty('left', (coordIzqJug + 200) + 'px');

            }

            x++;

        }

    });

    td[3].addEventListener("click", () => {

        if (x == 3 && y == 1) {

            if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

                jugador.style.setProperty('left', (coordIzqJug + 300) + 'px');

            }

            x++;

        }

    });

    td[4].addEventListener("click", () => {

        if (x == 4 && y == 1) {

            if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

                jugador.style.setProperty('left', (coordIzqJug + 400) + 'px');

            }

            x++;

        }

    });

    td[5].addEventListener("click", () => {

        if (x == 5 && y == 1) {

            if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

                jugador.style.setProperty('left', (coordIzqJug + 500) + 'px');

            }

            x++;

        }

    });

    td[6].addEventListener("click", () => {

        if (x == 6 && y == 1) {

            if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

                jugador.style.setProperty('left', (coordIzqJug + 600) + 'px');

            }

            x++;

        }

    });

    td[7].addEventListener("click", () => {

        if (x == 7 && y == 1) {

            if (coordIzqJug + anchuraJugador <= anchuraTablero - mover) {

                jugador.style.setProperty('left', (coordIzqJug + 700) + 'px');

            }

            x++;

            y++;

        }

    });

    
    



})


// console.log("-------");

    // console.log(coordJugador[0]);

    // console.log(coordJugador[1]);

    // console.log(coordJugador[2]);

    // console.log(coordJugador[3]);

    // console.log("-------");


//   var jugador = document.getElementById("jugador");

//   var estilosJugador = window.getComputedStyle(jugador);

//   var td = document.querySelectorAll("td");

//   var mover = 0;

// //   for (let i = 0; i < td.length; i++) {

//     // console.log(juegador.left)



// //   }

//   td.forEach((celda) => {
//     celda.addEventListener("click", (e) => {
//       console.log("hola");

//       mover += 100;

//       jugador.style.left = mover + "px";

//       console.log(mover);
//     });
//   });
// });
