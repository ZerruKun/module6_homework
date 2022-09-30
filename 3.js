const getSum = (num1) => {
    return (num2) => {
        reuslt = num1 + num2;
        if(typeof(reuslt) !== "number" || isNaN(reuslt)) {
            return "Одно из значений не является числом."
        } else {
            return reuslt;
        }
    }
}

let number1 = 10;
let number2 = 5;
let number3 = "Not a number - just a string";
let number4 = 15;

console.log(getSum(number1)(number2)); // Результат работы
console.log(getSum(number3)(number4)); // Результат проверки