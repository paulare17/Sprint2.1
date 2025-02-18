'use strict'

//Exercici 1

const hm = "Hola, món!"

const promesa = new Promise((resolve) => {
    setTimeout(() => {
        document.getElementById('result').innerHTML = hm
        resolve(hm)
    }, 2000);
}) 


//Exercici 2
//s'usa la promesa de l'exercici anterior

console.log("Exercici 2:")
promesa
    .then(console.log(hm))


//Exercici 3

function creaPromesa(textUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (textUser.toUpperCase() === 'HOLA') {
                resolve('Hola a tu també!');
            } else {
                reject('Ok... sense saludar, doncs');
            }
        }, 2000);
    });
}

function saluda() {
    const textUser = document.getElementById('holaUser').value;
    const resultDiv = document.getElementById('result2');

    creaPromesa(textUser)
        .then(salutacio => {
            resultDiv.textContent = salutacio;
        })
        .catch(error => {
            resultDiv.textContent = error;
        });
}

//Exercici 4 
//s'usa la promesa de l'exercici 1

console.log("Exercici 4:")

async function awaitPromesa() {
    const resultat = await promesa;
    console.log(resultat);
}
awaitPromesa()

//Exercici 5
//s'usa la promesa de l'exercici 1

console.log("Exercici 5")
async function esperarPromesa() {
    try {
        const resultat = await promesa;
        console.log("Tot correcte");
    } catch (error) {
        console.error("S'ha produït un error:", error);
    }
}
esperarPromesa();

//Exercici 6 

const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Salutació 1")
        resolve()
    }, 2000);
}) 

const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Salutació 2")
        resolve()
    }, 3000);
}) 

Promise.all([promesa2, promesa3]);
