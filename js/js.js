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

// function includes(array, value) {
//    // Change code below this line
//    for (i = 0; i < array.length; i += 1) {
//       if (array[i] === value) {
//          return true;
//       }
//       // Change code above this line
//    }
//    return false;
// }

// function includes(array, value) {
//    // Change code below this line
//    for (let number of array) {
//       if (number === value) {
//          return true;
//       }
//       // Change code above this line
//    }
//    return false;
// }

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[tags.length - 1];
// // Change code above this line


// consolelog(lastTag);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
// }

// console.log(keys);

// for (const value in apartment) {
//   values.push(apartment[value]);
// }

// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (let key of keys) {
//   values.push(apartment[keys[0]]);
// }

// console.log(values);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(colors.hex);
//   rgbColors.push(colors.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//    let indexId = 0;
//    for (i = 0; i < products.length; i += 1) {
//       if (Object.values(products[i]).includes(productName) === true) {
//          indexId = i;
//          console.log(indexId);
//          return products[indexId].price;
//       }

//       return null;
//    }


//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // console.table{ products };
// function getAllPropValues(propName) {
//    // Change code below this line
//    const arrayResult = [];

//    for (i = 0; i < products.length; i += 1) {
//       if (Object.keys(products[i]).includes(propName) === true) {
//          arrayResult.push(Object.values(products[i])[Object.keys(products[i]).indexOf(propName)]);
//          console.log(Object.values(products[i])[Object.keys(products[i]).indexOf(propName)]);
//       }

//       // Change code above this line
//    }
//    return arrayResult;
// }
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// let totalCost = 0;

//   for (let product of products) {
//      if (product.name === productName) {
//         totalCost = product.price * product.quantity;
//      }
//   }
//    return totalCost;
//   // Change code above this line
// }
const atTheOldToad = {
   potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
   ],
   // Change code below this line
   getPotions() {
      return this.potions;
   },
   addPotion(newPotion) {
      for (let i = 0; i < this.potions.length; i += 1) {
         if (this.potions[i].name === newPotion.name) {
            return `Error! Potion ${newPotion.name} is already in your inventory!`;
         }
      }
      this.potions.push(newPotion);
      console.log(this.potions);
   },
   removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
         if (this.potions[i].name === potionName) {
            console.log(i);
           return this.potions.splice(i, 1);
            
         }
      }
      return `Potion ${potionName} is not in inventory!`;
      },
   updatePotionName(oldName, newName) {
      for (let i = 0; i < this.potions.length; i += 1) {
         if (this.potions[i].name === oldName) {
             this.potions[i].name = newName;
            return this.potions;
         }
      }
      return `Potion ${oldName} is not in inventory!`;
   },
  // Change code above this line
};

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };