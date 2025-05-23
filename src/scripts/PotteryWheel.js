//define a variable to have the value of the primary key for each piece of pottery with the initial value of 1.

let potteryPiece = 1

//define and export a function called makePottery.
//The `makePottery` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
//1. Shape of the piece of pottery (e.g. "Mug", "Platter")
//1. Weight of the piece (e.g. 1, 5)
//1. Height of the piece (e.g. 3, 7)


/*The `makePottery` function must return an object with the following properties on it.
   1. `shape`
   1. `weight`
   1. `height`
   1. `id` _(increment this value each time the function is invoked)_ */

  export const makePottery = (shape, weight, height) =>{
    let potteryOutput = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryPiece
    }

    potteryPiece++

    return potteryOutput
}