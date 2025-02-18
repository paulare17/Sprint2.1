'use strict'

//Exercici 1
const numeros = [1, 2, 3, 4];

document.getElementById('arrayQuadrat').addEventListener('click', () => {

    const arrQuadrada = numeros.map(x => x ** 2);
    document.getElementById("result").innerHTML = arrQuadrada
})

//Exercici 2
//es reutilitza la variable 'numeros' de l'exercici anterior

document.getElementById('parell').addEventListener('click', () => {

const parells = numeros.filter((parell) => parell % 2 === 0 )
document.getElementById('result2').innerHTML = parells;

    
})


//Exercici 3 


document.getElementById('majors').addEventListener('click', () => {
    const array = [1, 10, 8, 11];
    const majors = array.find((major) => major > 10);
    document.getElementById('result3').innerHTML = majors;

        
    })


//Exercici 4


document.getElementById('sumaTotal').addEventListener('click', () => {
    
    const array1 = [13, 7, 8, 21]
    const suma = array1.reduce((a, b) => a + b);
    document.getElementById('result4').innerHTML = suma;

    })


//Exercici 5


document.getElementById('ex5').addEventListener('click', () => {

    const array2 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
    const numFinal = array2.filter((a) => a > 10).map((a) => a * 2).reduce((b, c) => b + c);
    document.getElementById('result5').innerHTML = numFinal;

    })

//Exercici 6



document.getElementById('majors2').addEventListener('click', () => {

    const array3 = [11, 12, 13, 14];
    
    const totsMajors10 = array3.every((num) => num > 10);
    const algunMajor10 = array3.some((num) => num > 10);
    const resultat = array3.every((num) => num > 10) && array3.some((num) => num > 10);
 
    document.getElementById('result6').innerHTML = algunMajor10;
    document.getElementById('result7').innerHTML = totsMajors10;
    document.getElementById('result8').innerHTML = resultat;

    })