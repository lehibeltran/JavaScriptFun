    //Code Here for uniq
    var Pally = function(word){
    for (var i=0; i<(word.length/2); i++){
    	console.log("Comparing values");
    	console.log("index: "+ i +" Char: " + word.charAt(i));
    	console.log("lastindex: "+(word.length - i - 1)+ " Char: " + word.charAt(word.length - i - 1));
        if(word.charAt(i) !== word.charAt(word.length - i - 1)) {
        	console.log(word.length - i - 1);
            return false;
        }
    }
        return true;
    };
    

console.log(Pally("racecar"));
console.log(Pally("Brack"));
console.log(Pally("r acec a r"));