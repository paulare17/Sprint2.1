'use strict'

const arrNoms = ['Anna', 'Bernat', 'Clara'];
const arrNums = [1, 2, 3, 4, 5, 6]

//Exercici 1
console.log("Exercici 1:")
arrNoms.forEach((noms) => console.log(noms))

//Exercici 2

console.log("Exercici 2")
for (const names of arrNoms) {
    console.log(names);
  }

//Exercici 3

function parells() {
    const parell = arrNums.filter((num) => (num % 2 == 0));
    document.getElementById('result').innerHTML = parell;
}


//Exercici 4
console.log("Exercici 4")
let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
};

for (const propietat in obj) {
    console.log(`obj.${propietat} = ${obj[propietat]}`);
  }

//Exercici 5

console.log("Exercici 5")
for (const nums of arrNums) {
    if (nums > 5) {
        break;
    } else {
        console.log(nums)
    }
  }

  //Exercici 6
  console.log("Exercici 6")

  let index = 0;

  for (const noms of arrNoms) {
    console.log(index, noms);
    index++;
  }