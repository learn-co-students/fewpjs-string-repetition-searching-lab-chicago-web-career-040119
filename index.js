// Code your solution here
// function heyJude(verse) {
//   return verse.repeat(16)
// }

let heyJude = (verse) => {return verse.repeat(16)}


let prohibitedLanguage = (str) => {
  let noNo = /candycorn|brusselssprouts/;
  return str.search(noNo);
}
