let sentence = "I love water!"; //], i = 0;
function translatePlantLatin(message) {
  /* Enter your solution here! */
  let word;
  for (let i = 0; i < message.length; i++) {
    if (message.charAt(i) === "I" || message.charAt(i) === "i") {
      if (word == null) {
        word = message.charAt(i) + "mus";
      } else {
        word = word + message.charAt(i) + "mus";
      }
    } else if (message.charAt(i) === "A" || message.charAt(i) === "a") {
      if (word == null) {
        word = message.charAt(i) + "tiva";
      } else {
        word = word + message.charAt(i) + "tiva";
      }
    } else if (message.charAt(i) === "U" || message.charAt(i) === "u") {
      if (word == null) {
        word = message.charAt(i) + "rea";
      } else {
        word = word + message.charAt(i) + "rea";
      }
    } else if (message.charAt(i) === "E" || message.charAt(i) === "e") {
      if (word == null) {
        word = message.charAt(i) + "llia";
      } else {
        word = word + message.charAt(i) + "llia";
      }
    } else if (message.charAt(i) === "O" || message.charAt(i) === "o") {
      if (word == null) {
        word = message.charAt(i) + "phylum";
      } else {
        word = word + message.charAt(i) + "phylum";
      }
    } else {
      word += message.charAt(i);
    }
  }
  return word;
}

console.log("Imus lophylumvellia wativatelliar!");
console.log(translatePlantLatin(sentence));
//console.log(word);

// if (sentence.charAt(index) === "I" || sentence.charAt(index) === "i"){
//
//   //console.log(word[i]+"\n"+word[i+1])
// }
/**
 * else if(sentence.charAt(i) === "A" || sentence.charAt(i) === "a"){
    word[index+1] = sentence.slice(i, i+1)+"tiva"
    //index += 1
  } else if(sentence.charAt(i) === "U" || sentence.charAt(i) === "u"){
    word[index+1] = sentence.slice(i, i+1)
    //index += 1
  } else if(sentence.charAt(i) === "E" || sentence.charAt(i) === "e"){
    word[index+1] = sentence.slice(i, i+1)+"llia"
    //index += 1
  } else if(sentence.charAt(i) === "O" || sentence.charAt(i) === "o"){
    word[index+1] = sentence.slice(i, i+1)
    //index += 1
  }
 * 
 * 
 * 
 * word[i] = sentence.slice(0,index+1)
      word[i+1] = sentence.slice(index+2, sentence.length)

 * int b = a - 1;
for (int c = 1; c <= b; c++)
{
cout << " ";
}
 */
