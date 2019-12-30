#!/usr/bin/env node

const program = require('commander')
const pjson = require('../../../package.json')

program
  .version(pjson.version)
  .name('word-scramble')
  .command('score <path>',
    'Get the word scramble score for a list of scrambled words.\n' +
    '               Input should be a file with a list where each element is a \n' +
    '               scramble followed by a space followed by the actual word,  \n' +
    '               with one entry per line:\n\n' +
    '               MAPS SPAM\n' +
    '               RIONY IRONY\n')
  .parse(process.argv)
