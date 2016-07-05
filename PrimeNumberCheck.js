/**
 * Created by lehi on 5/10/16.
 */
function isPrime(num) {
    if(num < 2) return false;
    counter = 0;
    for (var i = 2; i < num; i++) {
        // Code Here
        if(counter <=2){
            if(num % i === 0){
                counter++;
            }
        }else{
            return false;
        }
    }
    return true;
}