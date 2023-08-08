



// // EXTRACT VALUE WITH REDUCE
// const arr = [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}];


// function extValue(array, key){
//     const nameArr = [];
//     array.reduce(function(c, n){
//         nameArr.push(n[key]);
//         return c;
//     }, 0)
//     return nameArr;
// }


// // VOWEL COUNT WITH REDUCE
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// function vowelCount(str) {
//     return str.toLowerCase().split('').reduce(function(counts, char) {
//         if (vowels.includes(char)) {
//             if (!counts[char]) {
//                 counts[char] = 1;
//             } else {
//                 counts[char]++;
//             }
//         }
//         return counts;
//     }, {});
// }