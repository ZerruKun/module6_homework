const isPrimeNumber = (num) => {
    if (num < 2 || num > 1000 || typeof(num) !== "number" 
    || (num ^ 0) !== num || isNaN(num)) {
        return "Данные неверны";
    }

    for (let i = 2; i < num; i++){
        if( num % i === 0){
          return `${num} - составное число`;
        }
      }
      return `${num} - простое число`;
}

console.log(isPrimeNumber(41));