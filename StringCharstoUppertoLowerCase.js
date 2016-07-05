var swapCase = function (str){
	var newStr = "";
	for(var i=0; i<str.length; i++){
		if (str.charAt(i) === str.charAt(i).toLowerCase()){
			newStr += str.charAt(i).toUpperCase();
		}else{
			newStr += str.charAt(i).toLowerCase();
		}
	}
	return newStr;
}; // => 'hELLO wORLD'
//string.split("") -- split string by space or no space.
//Chararray.join() -- joins the chars in a char array with specified value
//Chararray.map() -- creates a new array with specified function

console.log(swapCase('Hello World')); // => 'hELLO wORLD'

function swapC (str){
	var newChar = str.map(str.split(""));
	console.log(newChar);
}

function ConvertStringtoCharArray (str){
	if ( str === null || str === "") {
     return "Please enter a true string";
   }
   var len = str.length;
   var charArr = [];
   for (var i = 0; i<len; i++) {
      charArr[i] = str.charAt(i);
   }
   return charArr;
}


/*Java Code
public Character[] toCharacterArray( String s ) {

   if ( s == null ) {
     return null;
   }

   int len = s.length();
   Character[] array = new Character[len];
   for (int i = 0; i < len ; i++) {
      array[i] = new Character(s.charAt(i));
   }

   return array;
}*/