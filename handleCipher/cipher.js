module.exports = {
  cipher(letter, offset) {
    let result = "";
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      result = String.fromCharCode(((letter.charCodeAt() - 65 + offset) % 26) + 65);
    } else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
      result = String.fromCharCode(((letter.charCodeAt() - 97 + offset) % 26) + 97);
    } else result = letter;
    return result;
  },
};
