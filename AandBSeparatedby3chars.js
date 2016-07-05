/* Using the JavaScript language, have the function ABCheck(str) take the str parameter being
 passed and return true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and be).
 Can I identify the problem? Easy solution?
 - What tools/ methods do I already know will help?
 - Can I identify areas that I will need to research/ get help?
 - Layout steps for building a solution.
*/
function ABCheck(str){
	var a = str.indexOf('a');
	var b = str.indexOf('b');
	console.log('a: ', a, " b:", b);
	var c = b - a;
	if(c === 4) {
		return true;
	} else {
		return false;
	}
}

console.log


/*
function ABCheck(STR) {
	if()
}

*/