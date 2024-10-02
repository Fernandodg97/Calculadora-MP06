"use strict";
// Compilar  npx tsc -w
//En este string se realizan los calculos y recoge los id de los botones.
let calculos = "";
//Declara el elemento HTML con id display. Estamos declarando la pantalla.
let display = document.getElementById("display");
//Declara una array de elementos HTML por las clases. Estamos declarando una lista de los botones.
const buttons = document.querySelectorAll('.btn-number, .btn-operator, .btn-equal');
//Recorre la lista de botones
buttons.forEach(buttons => {
    //Por el evento de clic regista el id del elemento.
    buttons.addEventListener('click', () => {
        const buttonId = buttons.id;
        //Pasa el display a vacio
        if (buttons.id == "clear") {
            calculos = "";
            //Elimina el ultimo caracter de pantalla.
        }
        else if (buttons.id == "backspace") {
            let string = calculos.toString();
            calculos = string.substring(0, string.length - 1);
            //Si la pantalla tiene valores y pulsas igual calcula la funcion matematica.
        }
        else if (calculos != "" && buttons.id == "equal") {
            //eval usa los valores de la pantalla para imprimir el resultado en pantalla.
            //try comprueba los errores mientras se ejecuta
            try {
                calculos = eval(calculos);
            }
            //catch ejecuta su codigo si ocurre un error en try 
            catch (error) {
                calculos = "error";
            }
            //Si la pantalla esta vacia y pulsas igual no hace nada.
        }
        else if (calculos == "" && buttons.id == "equal") {
            calculos = "Null";
            //Si pasan 2s se borra el contenido de pantalla.
            setTimeout(() => (calculos = ""), 2000);
            //Añade a la pantalla el id del boton.
        }
        else {
            calculos += buttons.id;
        }
        display.innerText = calculos;
    });
});
