#!/usr/bin/env node

const program = require('commander');
const pjson = require('../../package.json');

program
    .version(pjson.version)
    .name('word-scramble')
    .command('score <path>', `Get the word scramble score for a list of scrambled words.\n\nInput should be a file with a list where each element is a scramble followed 
    by a space followed by the actual word, with one entry per line:\n\n
    MAPS SPAM
    RIONY IRONY`)
    .parse(process.argv);