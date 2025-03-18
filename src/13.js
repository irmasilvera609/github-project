// Example code to generate a random number between 1 and 5
function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// Example code to generate a random boolean value (true or false)
function getRandomBoolean() {
  return Math.random() >= 0.5;
}

// Example code to generate a random string of length 8
function getRandomString(length = 8) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
