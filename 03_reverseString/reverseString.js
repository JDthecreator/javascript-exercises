

const reverseString = function(word=String) {
  wordToArray =  word.split("");
  wordToArray.reverse();
  word = wordToArray.join(""); 
  
  return word

};

// Do not edit below this line
module.exports = reverseString;
