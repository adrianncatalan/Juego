window.addEventListener('load', () => {

    var test = document.getElementById('test');

    var estilosTest = window.getComputedStyle(test);

    coordTest = test.getBoundingClientRect();

    document.body.addEventListener('click', (e) => {

       

        
       

        console.log(test.style.setProperty('left', e.pageX))

    })



})