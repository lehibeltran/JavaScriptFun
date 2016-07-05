function wordCount(str) {
    var newString = str.split(' ');
    var wordsCount = 0;
    for(var i = 0; i < newString.length; i++){
        wordsCount++
    }
    return wordsCount;
}

wordCount('Never eat shredded wheat');