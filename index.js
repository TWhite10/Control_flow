

const PI = 3.1415
const radius = 5
const area = Math.floor(PI * radius * radius)
const startingPlants = 20
let week = 2
console.log(`Total area available is - `,area, `square meters`)

let minSpaceOnePlant = 0.8
let maxNumberOfPlants = Math.floor(area/minSpaceOnePlant)
console.log(`Max number of plants is - `,maxNumberOfPlants)

let plantPrediction = (startingPlants * 2**week )
console.log (`In week`, week, `there will be`, plantPrediction, `plants`)

if ( plantPrediction >=maxNumberOfPlants * 0.8 ){
    console.log (`Prune the plants`)

}else if (plantPrediction >= maxNumberOfPlants * 0.5 ){
    console.log (`Moniter the plants`)
}else 
    console.log(`There is roon to plant more`)


// 100 plants to start with no prun for ten weeks 
const startingPlants2 = 100
const minSpaceOnePlant2 = 0.8

let week2 = 10

let plantPrediction2 = (startingPlants2 * 2**week2 )
console.log (`If we start with 100 plants, at week`, week2, `there will be`, plantPrediction2, `plants`)
const additionalSpace = minSpaceOnePlant2 * plantPrediction2
console.log (`In ten weeks with no prunning, there will a need for `, additionalSpace ,`square meters of land`)

const radius2 = additionalSpace/ PI
console.log (`The radius for the expanded garden is `, radius2)