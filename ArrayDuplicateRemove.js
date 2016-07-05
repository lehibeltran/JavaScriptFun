var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

    //Code Here for uniq
    /* 
    var uniq = function(namesArr, func){
    for (var i=0; i<namesArr.length; i++){
        if(namesArr.indexOf(namesArr[i]) !== namesArr.lastIndexOf(namesArr[i])) {
                namesArr.splice(i, 1);
                i--;
        }
    }
        func(namesArr);
    };*/
var uniq = function(namesArr, func){
    for (var i=0; i<namesArr.length; i++){
        for(var j=i+1; j<namesArr.length; j++){
            if(namesArr[i]===namesArr[j]) {
                namesArr.splice(j, 1);
                j--;
            }
        }
    }
        func(namesArr);
};
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});