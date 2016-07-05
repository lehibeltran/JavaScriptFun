// String.prototype.replaceAt=function(index, character) {
//     return this.substr(0, index) + character + this.substr(index+character.length);
// }

var names = 'abbcbbbbbbbbbbbbbbbbbbbbbbbcedde'

    //Code Here for uniq
            
function uniq(namesArr, func) {
    var seen = {};
    var out = "";
    var len = namesArr.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
        var item = namesArr.charAt(i);
        console.log('indexOf: '+ i+ " " +item);
        console.log('seen: '+ seen[item]);
        if(seen[item] !== 1) {
              seen[item] = 1;
              out += item;
            console.log('out: '+out);
        }
    }
    func(out);
}
    
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});