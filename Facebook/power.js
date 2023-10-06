// palindrom with one wrong

// power

const power = (a, b) =>{
    if(b === 0) return 1;
    let exponent = b;
    let result = a;
    let factor = 1;

    while(exponent > 1){
        if(exponent % 2 === 1){
            factor *= a*factor;
        }
        exponent = Math.floor(exponent/ 2)
       result *= result;
    }
    result *= factor;
    console.log(result)
    return result;
}

power(2, 5)
power(2,11)
power(2, 23)
console.log(Math.pow(2, 5))
console.log(Math.pow(2, 11))
console.log(Math.pow(2, 23))