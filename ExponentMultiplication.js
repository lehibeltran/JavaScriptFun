/**
 * Created by lehi on 5/10/16.
 */
function exponent(num, times) {
    // Code Here
    var total=num;
    for (var i=1; i<times; i++){
        total = total * num;
        console.log(i);
    }
    return total;
}