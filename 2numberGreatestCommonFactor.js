/*Have a function greatestCommonFactor(num1, num2) take both parameters being passed and return the Greatest Common Factor.
That is, return the greatest number that evenly goes into both numbers with no remainder.
For example: 12 and 16 both are divisible by 1, 2 and 4 so the output should be 4.
*/

function greatestCommonFactor(num1, num2){
	var factor;
	if(num1 > num2){
		factor = num1;
	}else{
		factor = num2;
	}
	for(factor; factor > 0; factor--){
		if((num1 % factor === 0) && (num2 % factor === 0)){
			return factor;
		}
	}
}

//guy 
function greatestCommonFactor(num1, num2){
	if (!num2){ return num1}
	return greatestCommonFactor(num2, num1 % num2)
}

//blakes example
// FIND FACTORS HELPER FUNCTION //
function getFactors(num){
	var factors = [];
	for(var i = 0; i <= num; i++){
		if(num % i === 0){
			factors.push(i);
		}
	}
	return factors;
}
​
function greatestCommonFactor(num1, num2) {
	
	var common = [];
    
    var f1 = getFactors(num1);
    var f2 = getFactors(num2);
	
	var factors = f1.concat(f2).sort(function(a,b){
		return a - b;
	});
	
	for(var i = 0; i < factors.length; i++){
		if(factors[i] === factors[i+1]){
			common.push(factors[i+1]);
		}
	}
    
    return common[common.length-1];
}
​
​
greatestCommonFactor(3, 9) // -> 3
greatestCommonFactor(3, 9) // ->3
greatestCommonFactor(12, 16) // -> 4
greatestCommonFactor(12, 42) //


