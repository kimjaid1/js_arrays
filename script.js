"use strict"
console.log('hi')

const food= [" popcorn " , " MnMs " , " RedVines " , " SourPatchKids "];

console.log(food);

document.write(food[1]);

food.push(" Pepsi ");
console.log(food);

const shoes=[" nike " , " addidas " , " reebok " , " skechers "];
shoes.pop('skechers')
var i=0;
console.log(shoes.length);
for(i=0; i<=shoes.length; i++){
    document.write(shoes[i])
    console.log(shoes[i])
}