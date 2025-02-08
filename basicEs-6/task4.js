const arr = (friends) => {
    const newArray = [];
    for(const friend of friends){
        if(friend.length%2 === 0){
            newArray.push(friend);
        }
    }
    return newArray;
}

const friends = ['Rahim', 'Raju', 'Jadu', 'Lablu', 'Rajon', 'Tanu', 'Mirza', 'Kawran', 'Shakib', 'Litu', 'Nazrul', 'Maruf', 'Joy'];
const result = arr(friends);

console.log(result);
