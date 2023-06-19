function checkForSpam(message) {
  let result;
  // Change code below this line
   result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? Boolean(true) : Boolean(false);
  // Change code above this line
  return result;
}
