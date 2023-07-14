function palindrome(string) {
  if (string === "") {
    return true;
  }
  if (string.length === 1) {
    return true;
  }
  let inv = "";
  for (let i = 0; i < string.length; i++) {
    inv += string[string.length - i - 1];
  }
  if (inv === string) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(""));
console.log(palindrome("a"));
console.log(palindrome("hamza"));
console.log(palindrome("boob"));
