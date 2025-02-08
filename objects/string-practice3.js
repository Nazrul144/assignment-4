

// let word = 'education';
// let targetLetters = 'aeiou';

// for (let i = 0; i < targetLetters.length; i++) {
//     let currentVowel = targetLetters[i];
//     if (word.toLowerCase().includes(currentVowel)) {
//         console.log(`The letter '${currentVowel}' is present in the word.`);
//     } else {
//         console.log(`The letter '${currentVowel}' is not present in the word.`);
//     }
// }


let word = 'education';
let targetLetters = 'aeiou';

for(let i = 0; i < targetLetters.length; i++){
    
    let currentVowel = targetLetters[i];
    if(word.toLowerCase().includes(currentVowel)){
        console.log(`The letter '${currentVowel}' is present in the word.`);
    }
    else{
        console.log(`The letter '${currentVowel}' is not present in the word`);
    }
}





















