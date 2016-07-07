// write a function that takes in a string and returns true or false based on
// if it's acceptable. the str will be made of + and = with letters between
// them (example: '++d+===+c++==a'). the result should be true if each letter
// is surrounded by a +. assume the string has at least one letter.
// examples of input strings:
const
  str1 = '++d+===+c++==a'   // false
, str2 = '++d+===+c++=+a+'  // true
, str3 = 'F++d+===+c++=+a+' // false
, str4 = '+F++d+===+c++=+a' // false

function test(str){
	for (var i=0; i<str.length; i++){
		if(str[i] !== "+" && str[i] !== "="){
			if(str[i+1] !== "+" || str[i-1] !== "+"){
				return false;
			}
		}
	}
	return true;
}

console.log(test(str1));
console.log(test(str2));
console.log(test(str3));
console.log(test(str4));