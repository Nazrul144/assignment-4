let originalString = 'capitalize every word';
let words = originalString.split(' ');
console.log(words);
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
    let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    capitalizedWords.push(capitalizedWord);
}

let capitalizedString = capitalizedWords.join(' ');

console.log(capitalizedString);
