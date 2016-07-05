/**
 * Created by lehi on 5/10/16.
 */
//Will take a snapshot of the current function and values of parent arguments
function titleMe(title){
    return function nameMe(name){
        console.log(title + " " + name);
        title = title + ".";
    }
}

var resultsFromTitleMe = titleMe("Mr");
resultsFromTitleMe(J); //→MR J
resultsFromTitleMe(R); //→MR. R
resultsFromTitleMe(A); //→MR. A


function makeQuiddichTeam(){
    var players = [];
    //var names = new Array();
    return function(name){

        players[players.length] = name;
        console.log(players);
    }
}

//Final Code
var slythern = makeQuiddichTeam();
slythern.players("Malfoy"); //console ["Malfoy"]
slythern.players("Goyle"); //console ["Malfoy", "Goyle"]
slythern.players("Snape"); //console ["Malfoy", "Goyle", "Snape"]

var gryffindoor = makeQuiddichTeam();
gryffindoor.players("Potter");
gryffindoor.players("Ron");
gryffindoor.players("The twins");