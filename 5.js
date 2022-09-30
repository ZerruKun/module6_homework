const degreeOfNumber = (num, degree) => {
    if (typeof(num) !== "number" || (num ^ 0) !== num || isNaN(num) || num < 1 ||
    typeof(degree) !== "number" || (degree ^ 0) !== degree || isNaN(degree) || degree <1 ) {
        return "Требуется ввести 2 натуральных числа.";
    } else {
        return num ** degree;
    }
}

console.log(degreeOfNumber(5,3)); // Вычисление
// Проверки является ли введённое значение натуральным числом
console.log(degreeOfNumber(5,"string"));
console.log(degreeOfNumber(NaN,3));
console.log(degreeOfNumber(5,0));
console.log(degreeOfNumber(0.25));

