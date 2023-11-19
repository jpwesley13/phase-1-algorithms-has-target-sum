function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let num1 = 0; num1 < array.length; num1++) {
    for (let num2 = num1 + 1; num2 < array.length; num2++) {
      if(array[num1]+array[num2] === target) {
        return true;
      } 
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  O(n^2) due to it being a nested iteration, therefore being n*n or the n squared quadratic function.
*/

/* 
  Add your pseudocode here

  From index 0, iterate through arrary until its end.
    From index +1, iterate through array until its end.
      If index 0 added to index +1 equal target, then return true.
    Otherwise return false.

  Optimized pseudocode:
  Create and object (seen) to keep track of the numbers we've already seen.
  Iterate through each number in the array
    for the current number, identify the complement that adds to the target (complement = target - number)
    Check if any key on our object is the complement.
    Return true if so
    Otherwise, add that number to the object.

  For example:
  hasTargetSum(;1,2,3,4], 6)
seen = {
  1: true //5 isn't here so 1 is added to the object
  2: true //only 1 is here, which means 4 is not here and 2 is added to the object
  3: true //3 is not here yet so 3 itself is added to the object
  //2 is here already so 4 is not added to the object as we are just going to return true at this point
}
*/

/*
  Add written explanation of your solution here

  For every item (number) in the array, the following items (numbers) are also iterated through. If the initial item and the following item have a sum that is equal to the target, the function returns true. This is the case when the initial item is iterated to the next item, where it will again have the following items iterated through and check if next item plus following item is equal to the target, And so on and so forth. If all items are iterated through and no sums are equal to the target then the function returns false.
*/

/*How to optimize my solution:
function hasTargetSum(array, target) {
  const seenNumbers = {}

  for (const number of array) {
    console.log(seenNumbers);
    const complement = target - number;
    if (seenNumbers[complement]) return true
    seenNumbers[number] = true
  }
  return false
}

Big O is now O(n) because the if statement is a constant (object search), so there's only one iterative n step now.


How to do this using Set objects:
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));


}

module.exports = hasTargetSum;
