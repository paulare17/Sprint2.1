'use strict'

// Exercici 1 -NO ACABAT

function activarPrompt() {
    const numero = Number(prompt("Exercici 1: introdueixi un número"))
    return numero;

}


function processar(nombre, callb) {
    callb(nombre) 
} 

const numero = activarPrompt();

processar(numero, function(num) {
    const result = (num * 2); // Multiplica el nombre per 2
    document.getElementById('result').innerHTML = result;
    
});



//Exercici 2 

// const resultDiv = document.getElementById('result2')

// function calculadora(num1, num2, callback) {
//     const num1 = parseInt(document.getElementById('num2').value)
//     const num2 = parseInt(document.getElementById('num3').value)
    
//     callback()
// }

// calculadora(3, 4, () => {num1 + num2})