// The most scaled down implementation of a repeater function without loops and conditionals looks like this:
// function repeat(str, num) {
//   return (new Array(num+1)).join(str);
// }
//
// repeat("foo",3)
//=> "foofoofoo"

// "foo".repeat(3)
//=> "foofoofoo"


// search() method executes the search for a match between a String or a regular expression and the search String
// returns its position of the match
// "foo".search("f") // 0

function prohibitedLanguage(string) {
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);
}
 function heyJude(verse) {
   return verse.repeat(16)
 }

// console
// let prohibitedLanguage = (string) => {
//   let bannedWords = /candycorn|brusselssprouts/;
//   return string.search(bannedWords);
// }
// undefined
// prohibitedLanguage('sonia')
// -1
// prohibitedLanguage('soniacandycorn')
// 5
