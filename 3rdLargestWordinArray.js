//Have a function ThirdGreatest(strArr) take the array 
	of strings stored in strArr and
// return the third largest word within it.

var SampleArray = ['words','are','awesome'];
	function ThirdGreatest(arr){
		arr.sort(function(a,b){
			return b.length - a.length;
		})

		return arr[2];
	}

	ThirdGreatest(sampleArray);