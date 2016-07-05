//Write a function that converts a string into pig latin.
//pig latin -> igpay atinlay
//chicken

function word(str){
	vowels = "aeiou";
	var beforeVowel = "";
	for(var i=0; i<str.length;i++){
		if(vowels.indexOf(str[i]) !== -1){
			//Vowel case
			break; //if its a vowel
		}else{
			//Consonant
			beforeVowel = str[i];
		}
	}
	return str.slice(i) + beforeVowel + "ay";
}

console.log(word('test'));
console.log(word('write'));

function sentence(str){
	return str.split(" ").map(word).join(" ");
}

console.log(sentence("This, is a test sentence"));