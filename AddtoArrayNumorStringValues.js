var numbers = [5, '9', 16, 19, '25', '34', 48]


var arrAdd = function (numbers){
	var newarr = [];
	numbers.forEach(function(value){
		value = parseInt(value);
		newarr.push(value += 5);
	})
	return newarr;
}

console.log("returned value: " + arrAdd(numbers));
