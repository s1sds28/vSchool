const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(input, shift) {
    // array of the alphabet to cipher
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const result = input.split("").map(char => {
        // if a char is a character cipher it else return it
        if(/[a-z]/.test(char)) {
            const index = alphabetArray.indexOf(char);
            const newIndex = (index + shift) % 26;
            return alphabetArray[newIndex];
        } else {
            return char;
    }
  });
  return result.join("");
}

console.log(caesarCipher(input, shift));
