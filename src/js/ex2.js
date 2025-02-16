'use strict'

// Exercici 1

function potConduir() {
    let edat = parseInt(document.getElementById('age').value);

    let conduccio = (edat >= 18) ? "Pots conduïr" : "No pots conduïr";
    document.getElementById('result').innerHTML = conduccio;
}

//Exercici 2

function numGran() {
    const num2 = document.getElementById('num2').value
    const num1 = document.getElementById('num1').value

    const compNum = (num1 < num2) ? `${num2} és més gran.` : `${num1} és més gran.`;
    document.getElementById("result2").innerHTML = compNum;

}

// Exercici 3 (A)

function Discernir() {
    let num = parseInt(document.getElementById('num').value)

    const valorNum = (num == 0) ? "El número és zero" : ((num > 0) ? "El número és positiu" : "El número és negatiu");
    document.getElementById("result3").innerHTML = valorNum;
}   

// Exercici 3 (B)

function trobarMaxim(a, b, c) {
    
    if (a == b || a == c || b == c) {
        document.getElementById('result5').innerHTML = "No pots introduïr números que siguin iguals"
    }
    
    const maxim = (a > b) 
    ? ((a > c) ? `El número més gran és el ${a}` : `El número més gran és el ${c}`) 
    : ((b > c) ? `El número més gran és el ${b}` : `El número més gran és el ${c}` );
    
    document.getElementById('result5').innerHTML = maxim
    
}

function capturaValors() {
    const numA = parseInt(document.getElementById("num4").value)
    const numB = parseInt(document.getElementById("num5").value)
    const numC = parseInt(document.getElementById("num6").value)

    trobarMaxim(numA, numB, numC);

}

// Exercici 4
const arrayNums = [];

function parOImpar() {
    let num3 = parseInt(document.getElementById('num3').value);
    let parellImparell;

    arrayNums.push(num3)
    console.log(arrayNums)

    document.getElementById('mostraArray').innerHTML = arrayNums.join(" - ");

    for (let i = 0; i < arrayNums.length; i++ ) {
        parellImparell = (arrayNums[i] % 2) ? `El número ${arrayNums[i]} és imparell `+ '<br>' : `El número ${arrayNums[i]} és parell ` + '<br>';
        //la condició superior està invertida perquè JS considera que 0 és false i 1 és true
    }
    document.getElementById('result4').innerHTML += parellImparell;
    
    document.getElementById('num3').value = ''; //reinicia input
}
