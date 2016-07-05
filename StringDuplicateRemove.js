// String.prototype.replaceAt=function(index, character) {
//     return this.substr(0, index) + character + this.substr(index+character.length);
// }

var names = 'abbcbbbbbbbbbbbbbbbbbbbbbbbcedde'

    //Code Here for uniq
    var uniq = function(namesArr, func){
    for (var i=0; i<namesArr.length; i++){
        if(namesArr.indexOf(namesArr.charAt(i)) !== namesArr.lastIndexOf(namesArr.charAt(i)) ) {
            namesArr = namesArr.replace(namesArr.charAt(i), "");
            i--;
        }
    }
        func(namesArr);
    };
    
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});