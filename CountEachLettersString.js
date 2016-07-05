function sumString(str){
	var result = {};
	
	for (var i=0;i<str.length;i++){
		if(result[str[i]]){
			result[str[i]]++;
		}else{
			result[str[i]] = 1;
		}
	}
	return result;
}

console.log(sumString("this is a string"));

var result = sumString("this is a string");
for(var key in result){
	console.log(key +" "+ result);
}