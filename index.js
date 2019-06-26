const readlineSync = require('readline-sync');

const words = [
  'javascript',
  'code',
  'talentpath',
  'puppy',
  'react',
  'computer',
];
let again = false;

do {
  const index = Math.floor(Math.random() * words.length);
  const secret = words[index];
  let strikes = 0;
  let win = false;
  let output = '';

  let revealSecret = '';
  for (let i = 0; i < secret.length; i++) {
    revealSecret += '_';
  }
  revealSecret = revealSecret.trim();

  output = '';
  for (let i = 0; i < revealSecret.length; i++) {
    output += `${revealSecret[i]} `;
  }
  output = output.trim();
  console.log(output);

  while (strikes < 5 && !win) {
    let input = readlineSync.question('Choose a letter: ')[0];
    if (input !== undefined) {
      input = input.toLowerCase();
      let reveal = '';
      let correct = false;
      win = true;
      for (let i = 0; i < secret.length; i++) {
        if (input === secret[i].toLowerCase()) {
          reveal += input;
          correct = true;
        } else if (revealSecret[i] !== '_') {
          reveal += revealSecret[i];
        } else {
          reveal += '_';
          win = false;
        }
      }
      revealSecret = reveal;

      if (correct) {
        console.log('Good guess!');
      } else {
        strikes++;
        console.log(`Wrong! ${strikes} strike(s)!`);
      }

      output = '';
      for (let i = 0; i < revealSecret.length; i++) {
        output += `${revealSecret[i]} `;
      }
      output = output.trim();
      console.log(output);
    }
  }

  if (win) {
    console.log('You win!');
  } else {
    console.log('You lose!');
  }

  again = readlineSync.keyInYNStrict('Do you want to play again? ');
} while (again);
