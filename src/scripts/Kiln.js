//make a firePottery function
//function must accept the following properties as arguments IN THE FOLLOWING ORDER
// An object representing a piece of pottery that was made at the wheel in the `makePottery` function.
   /*1. A number specifying the firing temperature of the kiln.
   1. The function must add a new property of `fired` with the value of `true` to the object.
   1. The function must add a new property of `cracked` to the object.
      1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
      1. If the temperature of the kiln is at, or below, 2200 degrees then `cracked` property must have a value of `false`.
   1. After both of the new properties have been added, return the augmented object.*/

   export const firePottery = (shape, temp ) =>{
    shape.fired = true

    if (temp > 2200){
        shape.cracked = true
    }
    else {shape.cracked = false}

 return shape
} 