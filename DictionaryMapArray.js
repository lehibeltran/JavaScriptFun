/**
 * Created by lehi on 5/10/16.
 */
var string = prompt("Enter String: ");
var mapa = {};
for(var i=0; i < string.length; i++){
    var char = string.charAt(i);
    if(char in mapa){
        console.log("Char "+ char +" is repeated");
    }else{
        console.log("Char "+ char +" is not repeated");
        console.log("ASCII value for char: " + char.charCodeAt(0));
        mapa[string.charAt(i)] = char;
    }
}

function fooDict() {
// foo.a --> true
    var foo = {
        a: true,
        b: true,
        z: true,
        c: true
    };

    for (var i in foo) {
        console.log(i);
    }
}

function map() {

//Dictionary key:value foo['map_name_1'] --> map_value_1
    var map = {
        'map_name_1': map_value_1,
        'map_name_2': map_value_2,
        'map_name_3': map_value_3,
        'map_name_4': map_value_4
    };
}

/*retrive map/dictionary value
alert(foo['a']); */

