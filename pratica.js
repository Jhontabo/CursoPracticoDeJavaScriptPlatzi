
let input1 = document.querySelector('#calculo1');//Este es el primer numero
let input2 = document.querySelector('#calculo2');//Este es el segundo numero 
let btnSumar = document.querySelector('#btnCalcular');//Este es el boton el cual inicia el evento de suma
let resultado= document.querySelector('#resultado');//Este es el parrafo en el cual se va a mostrar el resultado

function sumar(){
    
    let sumarNumeros = innerText=parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText= "El resultado de la suma es :" +sumarNumeros;
}