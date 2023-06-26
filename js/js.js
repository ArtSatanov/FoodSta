// function findLongestWord(string) {
//   // Change code below this line

//   const array = string.split(' ');
//   let longestWord = '0';
//   let indexId = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > longestWord.length) {
//       console.log(array[i].length, array[i]);
//       console.log(longestWord);
//       indexId = i;
    
//       longestWord = array[indexId];
//       console.log(longestWord);
//     }
    
//     // Change code above this line
    
//   }
//   return longestWord;
// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = 0; i <= max - min; i += 1 )
//     numbers.push(min + i);
//   // Change code above this line
//   return numbers;
// }

// function filterArray(numbers, value) {
//    // Change code below this line
//   const array = [];
//   let elementId = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (Number(numbers[i]) > Number(value)) {
//       console.log(numbers[i], value, i);
//       elementId = i;
//       array.push(numbers[elementId]);
//     }
//   }

//   return array;
//   // Change code above this line
// }