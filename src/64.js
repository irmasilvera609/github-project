function getRandomInt(min, max) {
  min = Math.ceil(Math.min(max, Number.MAX_SAFE_INTEGER / 2));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
