function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const colors = ['red', 'green', 'blue'];
  return colors[getRandomNumber(colors.length)];
}

console.log(getRandomColor());
