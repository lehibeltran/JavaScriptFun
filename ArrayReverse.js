/**
 * Created by lehi on 5/12/16.
 */
function reverseArray(arr){
    arr.reverse();
    return arr;
}

function reverse(array){
    var arrayR = [];
    for (var i=array.length-1; i>=0; i--){
        arrayR.push(array[i]);
        console.log(arrayR);
    }
}

function reverseNoCopy(array){
    var len = array.length-1;
    var leng = array.length-1;
    console.log('array values from 0 to '+len);
    if (len%2 !== 0){
    	console.log('substracting 1');
    	len-=1;
    }
    
    for (var i=len/2; i>=0; i--){
    	console.log('i: '+ i);
    	console.log('length: '+ leng);
    	var temp = array[leng-i];
    	console.log('temp: '+ temp);
        array[leng-i]=array[i];
        console.log('array end: '+ array[leng-i]);
        array[i]=temp;
        console.log('array '+array);
    }
    return array;
}

var numbersArray = [1,2,3,4,5,6,7,8,9,10,11];
reverseNoCopy(numbersArray);