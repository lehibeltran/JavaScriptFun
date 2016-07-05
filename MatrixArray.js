/**
 * Created by lehi on 5/10/16.
 */

console.log("noob");
var myArray = new Array();
myArray[0] = 200;
myArray[1] = 300;
myArray[myArray.length] = 400;

function initMatrix(col) {
    console.log("initMatrix");
    var matrixArray = [];
    for (var i=0; i<col; i++) {
        matrixArray[i] = [];
    }
    //populate bidimensional array
    console.log("Matrix length: " + matrixArray.length);
    loadMatrix(matrixArray, col);
    console.log(matrixArray[0][0]);
};  
console.log("matrixdone");

function loadMatrix(matrix, cols) {
    console.log("loadMatrix");
    for (var i=0; i<cols; i++) {
        console.log("i loop: " + i);
        for (var l=0; l<cols; l++) {
            console.log("l loop: " + l);
            matrix[i][l] = (l+1);
            console.log("adding: " + (l+1));
        }
    }
};