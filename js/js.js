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
// const atTheOldToad = {
//    potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//    ],
//    // Change code below this line
//    getPotions() {
//       return this.potions;
//    },
//    addPotion(newPotion) {
//       for (let i = 0; i < this.potions.length; i += 1) {
//          if (this.potions[i].name === newPotion.name) {
//             return `Error! Potion ${newPotion.name} is already in your inventory!`;
//          }
//       }
//       this.potions.push(newPotion);
//       console.log(this.potions);
//    },
//    removePotion(potionName) {
//       for (let i = 0; i < this.potions.length; i += 1) {
//          if (this.potions[i].name === potionName) {
//             console.log(i);
//            return this.potions.splice(i, 1);
            
//          }
//       }
//       return `Potion ${potionName} is not in inventory!`;
//       },
//    updatePotionName(oldName, newName) {
//       for (let i = 0; i < this.potions.length; i += 1) {
//          if (this.potions[i].name === oldName) {
//              this.potions[i].name = newName;
//             return this.potions;
//          }
//       }
//       return `Potion ${oldName} is not in inventory!`;
//    },
//   // Change code above this line
// };

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

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName,onSuccess,onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//        const errorMsg = `There is no pizza with a name ${pizzaName} in the assortment.`;
//        return onError(errorMsg);
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number,index) {
//     if (number > value) {
//       filteredNumbers.push(number);
      
//     }
//   })
  

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }


// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

// orderedItems.forEach( (item) => { totalPrice += item;});
  
// return totalPrice;
// }
// // Change code above this line

// Change code below this line
// const  calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

// orderedItems.forEach( (item) => { totalPrice += item;});

//   return totalPrice;
// }
// // Change code above this line

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//    firstArray.forEach((element) => { if (secondArray.includes(element)) { commonElements.push(element) } });

//   // Change code above this line
//   return commonElements;
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//    const newArray = [];

//    numbers.forEach(function (number) {
//       if (number % 2 === 0) {
//          number = number + value;
//       }
//       newArray.push(number);
//    })
//    return newArray;


// }
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// Change code below this line


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING).map(book => book.title);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);



// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//    return users.filter(user => user.eyeColor === color).map(user => user.name);

// };
// // Change code above this line
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
//  ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line


// // const totalAveragePlaytimePerGame = players.reduce((pTime,time) => {pTime = time.playtime},0)/players.reduce((qty,qtyP) => {qty = qtyP.playtime},0) ;

// const totalAveragePlaytimePerGame = players.reduce((totalPlayTime, playTime) => { return totalPlayTime + playTime.playtime/playTime.gamesPlayed }, 0);


// players.reduce((totalPlayTime, gamesPlayed) => {return totalPlayTime + gamesPlayed.gamesPlayed }, 0);

// const users = [
//    {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//    },
//    {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//    },
//    {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//    },
//    {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//    },
//    {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//    },
//    {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//    },
//    {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//    }
// ];


// // Change code below this line
// const calculateTotalBalance = users => {  users.reduce((total,user) => {return total + user.balance}, 0);
   
// };
// // Change code above this line

// const users = [
//    {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//    },
//    {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//    },
//    {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//    },
//    {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//    },
//    {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//    },
//    {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//    },
//    {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//    }
// ];


// Change code below this line
// const calculateTotalBalance = users.reduce((total,user) => {return total + user.balance}, 0);
   

// Change code above this line

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((totalPlayTime, playTime) => { return totalPlayTime + playTime.playtime/playTime.gamesPlayed }, 0);
// const getTotalFriendCount = users => {
//    return users.reduce((total, friend) =>  total + friend.friends.length , 0);
   
// };
// console.log(getTotalFriendCount(users));



// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) =>  b - a );

// const descendingReleaseDates = [...releaseDates].sort((a,b) =>  a - b );

// const users =

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// // Change code below this line
// const getSortedFriends = users => { return users.map(user => user.name).filter((user,index,array) => array.indexOf(user) === index).sort((a,b) => a.localeCompare(b));
   
// };
// // Change code above this line

// // Change code below this line
// const getSortedFriends = users => { return users.flatMap(user => user.friends).filter((user,index,array) => array.indexOf(user) === index).sort((a,b) => a.localeCompare(b));
   
// };
// // Change code above this line
// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
// return users.filter( user => user.gender === gender).reduce((total,user) => total + user.balance, 0)
// };
// Change code above this line


// .reduce((total,user) => total + user.balance),0


// function positiveSum(arr) {
//   return arr.filter(value => value >= 0).reduce((previousValue, number) => { return previousValue + number }, 0);
// }


// function findAverage(array) {
//   if (array.length > 0) {
//     return ((array.reduce((a, b) => { return a + b }, 0)) / array.length);
//   }
//   return 0;
// }