let arr = [0, 1, null, 2, true, 3, 4, "test", 5, 6, 7.4];

const typeOfNumbersCounter = (arr) => {
  let even = 0;
  let odd = 0;
  let nulls = 0;

  arr.forEach((el) => {
    if (typeof el === "number" && Math.round(el) % 2 === 0 && el !== 0) {
      even++;
    }
    if (typeof el === "number" && Math.round(el) % 2 !== 0) {
      odd++;
    }
    if (el === 0) {
      nulls++;
    }
  });

  console.log(`Чётных чисел: ${even}, нечётных чисел: ${odd}, нулей: ${nulls}`);
};

typeOfNumbersCounter(arr);