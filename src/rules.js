const beginRegex = new RegExp(/^/);
const endRegex = new RegExp(/(([a-z])(?=($)))?$/);

const rules = {
  alternatingConsonantsAndVowels: new RegExp(/((([aeiouy])([^aeiouy])((?=([aeiouy]))|$))|(([^aeiouy])([aeiouy])((?=([^aeiouy]))|$)))/),
  doubleConsonant: new RegExp(/([^aeiouy])(\2{1})($|(?=([aeiouy])))/),
  specialCaseA: new RegExp(/a([iy])($|(?=([^aeiouy])))/),
  specialCaseE: new RegExp(/e([aeo])($|(?=([^aeiouy])))/),
  specialCaseI: new RegExp(/io($|(?=([^aeiouy])))/),
  specialCaseO: new RegExp(/o([aoy])($|(?=([^aeiouy])))/),
  specialCaseY: new RegExp(/y([aou])($|(?=([^aeiouy])))/),
  specialCaseB: new RegExp(/b([lr])($|(?=([aeiouy])))/),
  specialCaseC: new RegExp(/c([hklr])($|(?=([aeiouy])))/),
  specialCaseD: new RegExp(/dr($|(?=([aeiouy])))/),
  specialCaseF: new RegExp(/f([lr])($|(?=([aeiouy])))/),
  specialCaseG: new RegExp(/g([hlr])($|(?=([aeiouy])))/),
  specialCaseK: new RegExp(/k([lrw])($|(?=([aeiouy])))/),
  specialCaseP: new RegExp(/p([flr])($|(?=([aeiouy])))/),
  specialCaseS: new RegExp(/s((ch)|(cr)|(hr)|([chklmnpqtw]))($|(?=([aeiouy])))/),
  specialCaseT: new RegExp(/t((hr)|([hrw]))($|(?=([aeiouy])))/),
  specialCaseW: new RegExp(/w([hr])($|(?=([aeiouy])))/)
}

buildRegex = (rulesList) => {
  let currRegex = beginRegex.source;

  if(rulesList === undefined){
    rulesList = Object.values(rules);
  }
  
  currRegex += "(" + rulesList[0].source;

  for(let i = 1; i < rulesList.length; i++){
    currRegex += "|" + rulesList[i].source;
  }
  currRegex += ")+" + endRegex.source;
  return new RegExp(currRegex, 'i')
}

module.exports = {
  buildRegex,
  rules
}