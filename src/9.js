function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElementFromArray(arr) {
  const randomIndex = getRandomInt(arr.length);
  return arr[randomIndex];
}

const numbers = [1, 2, 3, 4, 5];
const randomNumber = getRandomElementFromArray(numbers);
console.log(randomNumber);
