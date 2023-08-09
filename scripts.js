



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

// // ADD KEY AND VALUE WITH REDUCE
// const arr = [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
// ];

// function addKandA(arr, key, value){
//     return arr.reduce(function(name, k, v){
//         name[v][key] = value;
//         return name;
//     }, arr)
// }


// // PARTITION FUNCTION WITH REDUCE
// function isEven(val){
//     return val % 2 === 0;
//   }
 
// const arr = [1,2,3,4,5,6,7,8]; 

// function partition(arr, isEven){
//     return arr.reduce(function(accum, currentValue){
//         if (!isEven(currentValue)){
//             accum[0].push(currentValue);
//         }
//         else {
//             accum[1].push(currentValue);
//         }
//         return accum;
//     }, [[], []])
// }