// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery} from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 5)
let pot = makePottery("pot", 3, 5)
let vase = makePottery("vase", 8, 10)
let jar = makePottery("jar", 6, 8)
let plate = makePottery("plate", 3, 1)
//console.log(mug, pot, vase, jar, plate)
// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2100 )
let firedPot = firePottery(pot, 2500)
let firedVase = firePottery(vase, 2000)
let firedJar = firePottery(jar, 1800)
let firedPlate = firePottery(plate, 1900)
//console.log(firedMug, firedPot, firedVase, firedJar, firedPlate)
// Determine which ones should be sold, and their price
let finishedMug = toSellOrNotToSell(firedMug)
let finishedPot = toSellOrNotToSell(firedPot)
let finishedVase = toSellOrNotToSell(firedVase)
let finishedJar = toSellOrNotToSell(firedJar)
let finishedPlate = toSellOrNotToSell(firedPlate)
//console.log (finishedJar,finishedMug,finishedPlate,finishedPot,finishedVase)
// Invoke the component function that renders the HTML list
let sellablePottery = usePottery()
let soldPottery = PotteryList(sellablePottery)

document.querySelector(".potteryList").innerHTML = soldPottery