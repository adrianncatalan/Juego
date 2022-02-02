// window.addEventListener('load', () => {

//     var btnIzq = document.getElementById('izquierda');

//     var btnDere = document.getElementById('derecha');

//     var btnArr = document.getElementById('arriba');

//     var btnAba = document.getElementById('abajo');

//     //-----------------------------------------------------------------------------------

//     btnDere.addEventListener('click', obstaculos);

//     //-----------------------------------------------------------------------------------

//     function obstaculos() {

//         var jugador = document.getElementById('jugador');

//         var estilosJugador = window.getComputedStyle(jugador);

//         var coordIzqJug = parseInt(estilosJugador.getPropertyValue('left'));

//         var coordDereJug = parseInt(estilosJugador.getPropertyValue('right'));

//         var coordArrJug = parseInt(estilosJugador.getPropertyValue('top'));

//         var coordAbaJug = parseInt(estilosJugador.getPropertyValue('bottom'));

//         var coordJugador = [coordIzqJug, coordDereJug, coordArrJug, coordAbaJug];

//         //-----------------------------------------------------------------------------------

//         var obstaculos = document.querySelectorAll('img');

//         var obstPos5 = obstaculos[2];

//         var estilosObstPos5 = window.getComputedStyle(obstPos5)

//         var coordsIzqObstPos5 = parseInt(estilosObstPos5.getPropertyValue('left'));

//         var coordsDereObstPos5 = parseInt(estilosObstPos5.getPropertyValue('right'));

//         var coordsArrObstPos5 = parseInt(estilosObstPos5.getPropertyValue('top'));

//         var coordsAbaObstPos5 = parseInt(estilosObstPos5.getPropertyValue('bottom'));

//         var coordsObst5 = [coordsIzqObstPos5, coordsDereObstPos5, coordsArrObstPos5, coordsAbaObstPos5];

//         //-----------------------------------------------------------------------------------



//         // if (coordJugador[0] == 400 && coordJugador[1] == 0 && coordJugador[2] == 0 && coordJugador[3] == 0) {

//         //     console.log("Hola")

//         //     btnDere.disabled = 'true';

            
//         // } 

        
            
        

       

//         btnDere.onclick = () => {

//             console.log(coordJugador[0])

//             console.log(coordJugador[1])

//             console.log(coordJugador[2])

//             console.log(coordJugador[3])

//             //-----------------------------------------------------------------------------------

//             console.log("-----------")

//         }


//     }






//     // var obstaculos = Array.from(document.querySelectorAll('td'));

//     // console.log(obstaculos); 5 - 6 - 18 - 19 - 29 - 36 - 37 - 41 - 42


//     // var img = obstaculos[5].querySelector('img');

//     // console.log(img)

//     // img.style.setProperty('disabled', 'true')

//     // for (let i = 0; i < obstaculos.length; i++) {

//     //     if(i == 5 && i == 6 && i == 18 && i == 19 && i == 29 && i == 36 && i == 37 && i == 41 && i == 42){

//     //         obstaculos[i].style.display = 'block';

//     //     }

//     // }

//     // var obstPos6 = obstaculos[6];

//     // var obstPos18 = obstaculos[18];

//     // var obstPos19 = obstaculos[19];

//     // var obstPos29 = obstaculos[29];

//     // var obstPos36 = obstaculos[36];

//     // var obstPos37 = obstaculos[37];

//     // var obstPos41 = obstaculos[41];

//     // var obstPos42 = obstaculos[42];
// });