function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let count = 0;
for(let i = 1; i <= 5; i++) {
  console.log(getRandomInt(30));
  count++;
}
console.log(count);
