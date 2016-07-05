//FibonacciReturnSpecific
function nth(nth){
	debugger
	var myArray = new Array();
	var a = 0;
	var b = 0;
	var c = 1;
	counter = 0;
	while(counter < nth) {
	    myArray[myArray.length] = c;
	    a = b;
	    b = c;
	    c = a + b;
	    counter++;
	}
	console.log(myArray);
	return myArray[myArray.length-1];
}

console.log("Fibonacci Series number:" + nth(6));

//Recursion
//write a function that a returns the nth number in the fibonacci sequence.

function fibo(n) {
	debugger
	if(n<=2) {
		return 1;
	} else {
		return fibo(n-2) + fibo(n-1);
	}
}

fibo(4);//3
fibo(8);//21