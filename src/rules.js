const beginRegex = new RegExp('^');
//const doubleConsonantRegex = new RegExp('([^aeiouy])(\1{1})($|(?=([aeiouy])))');
const alternatingConsonantsAndVowelsRegex = new RegExp('((([aeiouy])([^aeiouy])((?=([aeiouy]))|$))|(([^aeiouy])([aeiouy])((?=([^aeiouy]))|$)))');
const endRegex = new RegExp('(([a-z])(?=($)))?$');

const combinedRegex = new RegExp(
  beginRegex + 
  alternatingConsonantsAndVowelsRegex.source + "*" + 
  endRegex.source, 'i'
);

buildRegex = (rulesList) => {
  let currRegex = beginRegex.source;
  for(let i = 0; i < rulesList.length; i++){
    currRegex += rulesList[i].source;
  }
  currRegex += "*" + endRegex.source;
  return new RegExp(currRegex, 'i')
}

module.exports = {
  alternatingConsonantsAndVowelsRegex,
  // doubleConsonantRegex,
  combinedRegex,
  buildRegex
}