'use strict'
//let readline = require('readline');

let sentence = '';
let salt = {
  a: 'b', b: 'c', c: 'd', d: 'e', e: 'f', f: 'g', g: 'h', h: 'i',
  i: 'j', j: 'k', k: 'l', l: 'm', m: 'n', n: 'o', o: 'p', p: 'q',
  q: 'r', r: 's', s: 't', t: 'u', u: 'v', v: 'w', w: 'x', x: 'y',
  y: 'z', z: 'a'
}

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

/*rl.question('Enter the sentence to crypt: ',*/
function editData(answer) {
  console.log(`This will be crypted: ${answer}`);
  sentence = String(answer);
  sentence = sentence.toLowerCase();
  console.log(`Sentence looks like this: ${sentence}`);
  sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
  console.log(`Going to cifer: ${sentence}`);
  cipher(sentence);
  //rl.close();
};

//Here we've changed full function ionto lambda
let start = () => (editData(String($('input').val())))

function cipher(sentence) {
  let letters = sentence.split('');
  let crypted = '';
  for (let i of letters) {
    if(i == ' ')
      crypted = crypted + ' ';
    else
      crypted = crypted + salt[i];
  }

  console.log(`Crypted sentence: ${crypted}`);
  $('#output').text(String(crypted));
}
