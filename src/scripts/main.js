// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 5)
let pot = makePottery("pot", 3, 5)
let vase = makePottery("vase", 6, 10)
let jar = makePottery("jar", 6, 8)
let plate = makePottery("plate", 7, 1)
//console.log(mug, pot, vase, jar, plate)
// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2100 )
let firedPot = firePottery(pot, 2500)
let firedVase = firePottery(vase, 2000)
let firedJar = firePottery(jar, 1800)
let firedPlate = firePottery(plate, 1900)
console.log(firedMug, firedPot, firedVase, firedJar, firedPlate)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

