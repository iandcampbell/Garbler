
//Necessary to extend the String class to remove each character from our string
// without using StringBuilder
String.prototype.replaceAt=function(index, char) {
    return this.substr(0, index) + char + this.substr(index+char.length);
}

//takes an input, and redistributes each character ranbdomly to create a
//"garbled" sentence
function garble(str) {
  var garbled = "";
  str = str.replace(/\s+/g, ''); //remove spaces

  console.log("No spaces: " + str);

  for (i = 0; i < str.length; i++)
  {
    var spot = Math.floor(Math.random()*(str.length)+5);//random number between
    //0 and length+5. numbers greater than length indicate a new sentence/space
    if (spot >= str.length){
      if(garbled != "" && garbled.charAt(garbled.length-1) != " ") {
        garbled = garbled + " ";}
      //  if garbled is not empty and if the last character was not a space,
      //adds a space at end of garbled

    }

      while(str.charAt(spot) == " " || spot == str.length){
        spot = Math.floor(Math.random()*(str.length));
      } //if spot lands on the same character it already used, reroll for spot

      garbled = garbled + str.charAt(spot);
      str = str.replaceAt(spot, " ");
      console.log(str)
      //adds a letter from str to garbled, and then replaces that same letter in
      //str with a space
    }


  return garbled;








}

module.exports.garble = garble;




/*function gargle(str){
  str = str.replace(/\s+/g, '');
  var newString = "";
  var max = str.length;
  var min = 0;
  var size = 0;
  console.log("String is: " + str);

  while (max != 0) {
    console.log("Starting while loop");
    console.log("String length is: " + str.length);
    if (max > 2) {
      size = Math.floor(Math.random()*max);
      console.log("First sentence length: " + size)

      for(count = 0; count < size; count++){
        var spot = Math.floor(Math.random()*max);
        console.log("Letter at spot " + (spot+1));
        newString = newString + str.charAt(spot);
        console.log("Gargled: " + newString)

        if (spot == max-1) {
          console.log("Spot was at the end");
          str = str.substring(0,(str.length-1));
          console.log("String is: " + str);
          max = str.length;
        }
        else if (spot == 0){
          console.log("Spot was at the beginning");
          str = str.substring(1,(str.length-1));
          console.log("String is: " + str);
          max = str.length;
        }
        else {
          console.log("spot was somewhere else");
          str = str.substring(0,spot-1) + str.substring(spot+1, max-1);
          console.log("String is: " + str);
          max = str.length;
        }
        console.log("String is: " + str);
      }
      newString = newString+ " ";
      console.log("Garbled String is: " + newString);

    }
    else {
      size = max;
      var spot = Math.floor(Math.random()*2);
      if (spot == 0){
        newString = newString + str.charAt(0) + str.charAt(1);
        console.log("Garbled String is: " + newString);
      } else {
        newString = newString + str.charAt(1) + str.charAt(0);
        console.log("Garbled String is: " + newString);
      }



    }
  }
  console.log("FINAL Garbled String is: " + newString);
  return newString + '\r\n';

}

module.exports.gargle = gargle;
*/
