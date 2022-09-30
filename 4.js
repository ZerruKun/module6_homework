const showNumbersInterval = (num1, num2) => {
    if (typeof(num1) !== "number" || isNaN(num1) ||
     typeof(num2) !== "number" || isNaN(num2)) {
        return console.log("Одно из значений не является числом.");
    } else if (num1 >= num2) {
        return console.log("Первое значение должно быть меньне второго.");
    } else if ((num1 ^ 0) !== num1 || (num2 ^ 0) !== num2) {
        return console.log("Числа должны быть целыми.");
    } else {
        let showNumber = setInterval(() => {
            console.log(num1)
            if (num1 === num2) {
                clearInterval(showNumber);
                return console.log("Пересчёт закончен.");
            }
            num1++
        }, 1000);
    }
}

let number1 = 12;
let number2 = 15;
let number3 = "I am a string";
let number4 = 25;
let number5 = 0.25;

showNumbersInterval(number3,number2); // Первая проверка
showNumbersInterval(number4,number2); // Вторая проверка
showNumbersInterval(number5,number2); // Третья проверка
showNumbersInterval(number1,number2); // Проверки пройдены, вывод интервала чисел.