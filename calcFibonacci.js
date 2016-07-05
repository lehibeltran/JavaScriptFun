/**
 * Created by lehi on 5/10/16.
 */
// to calculate or find Fibonacci series/numbers.
var myArray = new Array();
var maxNum = 100;
var a = 0;
var b = 0;
var c = 1;
while(c < maxNum) {
    myArray[myArray.length] = c;
    a = b;
    b = c;
    c = a + b;
}
// displays
// Fibonacci Series : 1,1,2,3,5,8,13,21,34,55,89
alert("Fibonacci Series :" + myArray);
// display - Array Length : 11
alert("Array Length :" + myArray.length);
//- See more at: http://blog.xkoder.com/2008/07/10/javascript-associative-arrays-demystified/#sthash.XlxodnY7.dpuf