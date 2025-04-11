function addDays(date, days) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}/${month}/${day}`;
  
  return new Date(formattedDate);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
