#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const { getRating } = require('../../lib/scrambleRating');
const { containsTheSameLetters, alphaOnly } = require('../lib/validateInput');

const run = () => {

  if(!program.args || program.args.length === 0 || program.args.length > 1 || !fs.existsSync(program.args[0])){
    console.log("Please run again with a single path to a valid file")
    process.exit(1);
  }

  const contents = fs.readFileSync(program.args[0], 'utf-8');
  const pairs = contents.split('\n');

  for(let i = 0; i < pairs.length; i++){
    const pair = pairs[i].split(' ');
    if(pair.length !== 2){
      console.log(`
        ------------------------------------------------------------------------------------------
        Invalid format. Your input should be a list where each element is a scramble followed 
        by a space followed by the actual word, with one entry per line:\n\n
        MAPS SPAM
        RIONY IRONY
        ------------------------------------------------------------------------------------------
      `);
      continue;
    };
    const scrambledWord = pair[0];
    const originalWord = pair[1];

    if(!alphaOnly.test(scrambledWord) || !alphaOnly.test(originalWord)){
      console.log(`Invalid input: \"${scrambledWord} ${originalWord}\". Words may only contain letters.`);
      continue;
    }

    if(!containsTheSameLetters(scrambledWord, originalWord)){
      console.log(`Invalid input: \"${scrambledWord} ${originalWord}\". Scrambled and unscrambled words must contain the same letters.`);
      continue;
    }

    const rating = getRating(scrambledWord, originalWord);

    switch(rating){
      case 'not': 
        console.log(`${scrambledWord} is not a scramble of ${originalWord}`);
        break;
      case 'poor':
        console.log(`${scrambledWord} is a poor scramble of ${originalWord}`);
        break;
      case 'hard':
        console.log(`${scrambledWord} is a hard scramble of ${originalWord}`);
        break;
      case 'fair':
        console.log(`${scrambledWord} is a fair scramble of ${originalWord}`);
        break;
      default:
        console.log(`An error occurred while processing \"${scrambledWord} ${originalWord}\".`);
    };
  }
  process.exit();

};

// parse program args
program
    .name('score')
    .parse(process.argv);

run();