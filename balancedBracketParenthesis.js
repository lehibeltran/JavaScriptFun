// Write a function that accepts a string consisting entirely of brackets ([](){})
// and returns whether or not it is balanced.  Every 'opening' bracket must be followed
// by a closing bracket of the same type.  There can also be nested brackets, which adhere to the same rule.
// Valid
// 
// 
// (((()(())((())))))
// {}()
//Invalid
//[]{}[
//[(])
//({}[{])


function checker(str){
  var lastStr = str;
  do{
     lastStr = str;
     str = lastStr.replace("()","").replace("[]","").replace("{}","");
     console.log("string changes: " + str);
  } while(lastStr !== str);
    
    if (str ===""){
      return true;
    }
  return false;
}

console.log(checker("{([]{}[]{{[()]}()}[])}"));
console.log(checker("{([[]{{[()]}()}[])}"));