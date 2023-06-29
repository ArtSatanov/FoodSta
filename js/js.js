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

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array3 = [];
//  for (let i = 0; i <= array1.length; i+= 1) {
//   if (array2.includes(array1[i])){
//      array3.push(array1[i]);
//      console.log(array1[i]);
//   }
   
//  }
   
// return array3;

//  // Change code above this line
// }
// function calculateTotalPrice(order) {
//   let total2 = 0;
//   // // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (let total of order) {
//      total += 0;
//      total2 += total;
//      console.log(total,total2);
//   }

//   // Change code above this line
//   return total2;
// }
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const numbers = [];
// for (i = start; i <= end; i += 1) {
//   if (i % 2 === 0 ) {
//     numbers.push(i);
//   }
// }

// return numbers;
//     // Change code above this line
//   }

function includes(array, value) {
   // Change code below this line
   for (i = 0; i < array.length; i += 1) {
      if (array[i] === value) {
         return true;
      }
      // Change code above this line
   }
   return false;
}

function includes(array, value) {
   // Change code below this line
   for (let number of array) {
      if (number === value) {
         return true;
      }
      // Change code above this line
   }
   return false;
}