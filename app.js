let sum1 = 1;
let sum2 = 1;
let num1 = 220//Change this number
let num2 = 284; //Change this number

for (let div1 = 2; div1 < num1; div1++) {
    if (num1 % div1 === 0) {
        sum1 += div1
    }
}

for (let div2 = 2; div2 < num2; div2++) {
    if (num2 % div2 === 0) {
        sum2 += div2
    }
}


if (num1 === sum2 && sum1 === num2) {
    console.log(num1 + " and " + num2 + " are amicable numbers!")
} else {
    console.log(num1 + " and " + num2 + " are NOT amicable numbers.")
}