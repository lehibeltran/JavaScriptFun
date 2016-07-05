/**
 * Created by lehi on 5/10/16.
 */
//var list = []; list.push({ date: '12/1/2011', reading: 3, id: 20055 }); ---add
    // list.pop(); -- remove last item = value
var list = [
    { date: '12/1/2011', reading: 3, id: 20055 },
    { date: '13/1/2011', reading: 5, id: 20053 },
    { date: '14/1/2011', reading: 6, id: 45652 }
];

//and then access it:
alert(list[1].date);

//example 2
var listOfObjects = [];
var a = ["car", "bike", "scooter"];
a.forEach(function(entry) {
    var singleObj = {}
    singleObj['type'] = 'vehicle';
    singleObj['value'] = entry;
    listOfObjects.push(singleObj);
});

console.log(listOfObjects);
