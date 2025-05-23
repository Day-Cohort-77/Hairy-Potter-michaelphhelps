/*. Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
1. Define and export a function named `toSellOrNotToSell` that is responsible for determining if a piece of pottery should be sold.
1. The `toSellOrNotToSell` function must accept a pottery object as input.
1. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a `price` property with a value of 40.
1. If the weight of the piece of pottery is less than 6 then the function must add a `price` property with a value of 20.
1. If the piece of pottery is cracked, do not add a `price` property to it.
1. If the pottery is **not** cracked, add the object to the module-level array of items to be sold.
1. Return the augmented object.
1. Define and export a function named `usePottery` returns a copy of the array of items to be sold. Recall which global javascript function creates a deep copy of values.*/

const potteryToSell = []

export const toSellOrNotToSell = (pottery) =>{
    if (pottery.cracked === false){
        if (pottery.weight >= 6){
            pottery.price = 40
        }else {pottery.price = 20}

        potteryToSell.push(pottery)
    }

    if (pottery.cracked === true){
        return console.log(`${pottery.shape} is cracked!!!`)
    }
    return pottery
}

export const usePottery = () =>{
    const potteryCopy = structuredClone(potteryToSell)
    return potteryCopy
}
