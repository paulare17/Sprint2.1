'use strict'

// Exercici 1

document.getElementById('calculaDoble').addEventListener('click', () =>{
    
    const num = parseFloat(document.getElementById('numero').value)
    function processar(numero, callback) {
        callback(numero);
    }
    
    function mostrarDoble(n) {
        document.getElementById('result').innerHTML= (n * 2);
    }
    
    processar(num, mostrarDoble);
    
})



//Exercici 2 

document.getElementById('calculaSuma').addEventListener('click', () =>{

const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);

function calculadora(a, b, callb
) {
   return callb(a, b)
}

const result = calculadora(num1, num2, (a, b) => a + b)
document.getElementById('result2').innerHTML = result;

})

//Exercici 3

document.getElementById('saluda').addEventListener('click', () =>{

const nom = document.getElementById('nom').value

function saludar(name, trucada) {
    setTimeout(() => {
        trucada(name)
    }, 2000);
}

function trucar(nom) {
    document.getElementById('result3').innerHTML = `Hola, ${nom}`
}
saludar(nom, trucar);
});


//Exercici 4

const arrayNms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function processarElements(array, callba) {
    for (let i = 0; i < array.length; i++){
        callba(array[i])
    }
}

function callbac(element) {
    console.log(element)
}

processarElements(arrayNms, callbac);


//Exercici 5

document.getElementById('majuscules').addEventListener('click', () =>{

    const paraulaUser = document.getElementById('paraula').value

    function processarCadena(string, call) {
        call(string)
    }

    function call(word) {
        let paraulaMaj = word.toUpperCase()
        document.getElementById('result4').innerHTML = paraulaMaj
    }

    processarCadena(paraulaUser, call)
});