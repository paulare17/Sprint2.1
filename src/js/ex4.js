'use strict'

//Exercici 1 


const array1 = [];
const array2 = [];

document.getElementById('boto-llista1').addEventListener('click', () =>{
    const items1 = document.getElementById('llista1').value
    array1.push(items1)
    document.getElementById('llista1').value = '';

    document.getElementById('result').innerHTML = array1.join(" - ");
})

document.getElementById('boto-llista2').addEventListener('click', () =>{
    const items2 = document.getElementById('llista2').value
    array2.push(items2)
    document.getElementById('llista2').value = '';

    document.getElementById('result2').innerHTML = array2.join(" - ");
})

function unirLlistes() {
    document.getElementById("result3").innerHTML = [...array1, ...array2].join(" - ")
}

//Exercici 2


let valors = []

function creaSuma() {
    const num = parseFloat(document.getElementById('num').value)

    if (!isNaN(num)) {
        valors.push(num)
        document.getElementById('result4').innerHTML = valors.join(" + ")
    } else {} //si l'usuari s'equivoca omet l'error

    document.getElementById('num').value = '';

}

function suma(...valors) {
    let result = 0;

    for (let i = 0; i < valors.length; i++) {
        result += valors[i]
    }
    return result
}

function mostraSuma() {
    let result = suma(...valors)

    document.getElementById('result5').innerHTML = "El resultat és " + result
}

//Exercici 3

const objecte1 = { //creació objecte
    especie: 'gat',
    nom: 'Black',
}

const objecte2 = {...objecte1}

objecte2.nom = 'Nala'

console.log("Exercici 3:")
console.log(objecte1)
console.log(objecte2)

document.getElementById('gats').addEventListener('click', () =>{
    document.getElementById('mostrarGat1').innerHTML = JSON.stringify(objecte1);
    document.getElementById('mostrarGat2').innerHTML = JSON.stringify(objecte2);
    
})


//Exercici 4

console.log("Exercici 4:")

const array = ['Mady', 'Misha', 'Fleming', 'Festuc', 'Nala', 'Black']
console.log(array)

const [gat1, gat2, ...gats] = array;

console.log(gat1)
console.log(gat2)
console.log(gats)


//Exercici 5

const cats = ['Black', 'Nala', 'Fleming']

function saludarGats(gat1, gat2, gat3) {
    document.getElementById('result6').innerHTML = `Hola ${gat1}`
    document.getElementById('result7').innerHTML = `Hola ${gat2}`
    document.getElementById('result8').innerHTML = `Hola ${gat3}`

}

document.getElementById('cats').addEventListener('click', () =>{
    saludarGats(...cats);
})


//Exercici 6

const blackA = {
    especie: 'gat',
    color: 'negre',
}

const blackB = {
    menjarPref: "llauneta",
    molesta: true 
}

const blackDef = {...blackA, ...blackB}

document.getElementById('black').addEventListener('click', () => {
    document.getElementById("result9").innerHTML = JSON.stringify(blackDef, null, 2);
})