/**
 * Created by lehi on 5/11/16.
 */
function vowelCount(str1)
{
    var vowels = 'aeiouAEIOU';
    var count = 0;

    for(var i = 0; i < str1.length ; i++)
    {
        for(var l = 0; l < vowels.length; l++){
            if(str1.charAt(i) === vowels.charAt(l)){
                count += 1;

            }
        }
    }
    return count;
}