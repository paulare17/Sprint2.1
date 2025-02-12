'use strict'

// Exercici 1

const Suma = (valor1, valor2) => {
  const num1 = parseFloat(document.getElementById("numero1").value)
  const num2 = parseFloat(document.getElementById("numero2").value)
  const resultat = num1 + num2
  document.getElementById("result1").innerHTML = `El resultat de la suma es: ${resultat}`;

  if (num1 === 0 || num2 === 0 || isNaN(num1) || isNaN(num2)) {
    document.getElementById("result1").innerHTML = `Introdueixi un número vàlid i superior a 0`;
  }

}


// Exercici 2

const GeneraNumero = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  document.getElementById("result2").innerHTML = `${num}`;

}


// Exercici 3


class Person {
  constructor(name) {
    this.name = name;
  }

  greed = () => {
    document.getElementById("result3").innerHTML = `Hola, sóc ${this.name}`;
  };

}
 const Greet = () => {
 const nom = document.getElementById("nom").value;
 const persona = new Person(nom);
 persona.greed();
}


// Exercici 4

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PrintNumbers = (arrayNumbers) => {
  for (let i = 0; i < arrayNumbers.length; i++) { 
    console.log("El número a mostrar és " + arrayNumbers[i]);
  }
}

// Exercici 5
function Espera(){
  console.log("Esperi tres segons, si us plau")
  setTimeout(() => {
    console.log("Gràcies 🐱"  );
  }, 3000);

}
