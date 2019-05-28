// Code your solution here

function heyJude(verse) {
  return verse.repeat(16)
}


function prohibitedLanguage(str) {
  let bannedWords = /candycorn|brusselssprouts/ ;
  return str.search(bannedWords)
}
