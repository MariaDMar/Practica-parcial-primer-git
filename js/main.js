function cargarPagina() {
    //js


    var boton = document.querySelector('#btn');

    var red = document.querySelector('#red');
    var green = document.querySelector('#green');
    var blue = document.querySelector('#blue');

    function agregar() {
        var inputLink = document.querySelector('#linkImg');
        var inputName = document.querySelector('#linkName');
        var container = document.querySelectorAll('.izq')[0];

        console.log(inputLink.value);

        var anterior = container.innerHTML; //get
        container.innerHTML = anterior + "<div style= 'border: rgb(" + red.value + "," + green.value + "," + blue.value + ") 2px solid; background-image: url(" + inputLink.value + ");' class='profile'><p>" + inputName.value + " </p></div>";

        //inerhtml hace la funcion de un cero (cambia lo qeu esta adentro) cada clic va agregar un holi SET

        var perfiles = document.querySelectorAll('.profile');
        function eliminar(p) {
            function quitar(){
                p.remove();
            }
    
            p.addEventListener('click', quitar);
        }
         perfiles.forEach(eliminar);
    }

    boton.addEventListener('click', agregar);
    //con getElements by id no es necesario usar #

    function actualizarColor() {
        var color = document.querySelector('#color');
        color.style = "background-color: rgb(" + red.value + "," + green.value + "," + blue.value + ");";
    }

    actualizarColor();

    red.addEventListener('mousemove', actualizarColor);
    green.addEventListener('mousemove', actualizarColor);
    blue.addEventListener('mousemove', actualizarColor);

  
}

window.addEventListener('load', cargarPagina);
