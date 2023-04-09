function hasTargetSum(array, target) {
  // Create an empty object to keep track of seen numbers
  const seen = {};

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Check if the target minus the current number has been seen before
    const complement = target - array[i];
    if (seen[complement]) {
      // If it has, then a pair of numbers with the target sum has been found
      return true;
    }

    // Add the current number to the seen object
    seen[array[i]] = true;
  }

  // If no pair of numbers with the target sum was found, return false
  return false;
}

/* 
  Big O time complexity: O(n), where n is the length of the input array
*/

/* 
  Pseudocode:

  1. Create an empty object to keep track of seen numbers
  2. Iterate through the array
  3. Check if the target minus the current number has been seen before
  4. If it has, then a pair of numbers with the target sum has been found, so return true
  5. Otherwise, add the current number to the seen object
  6. If no pair of numbers with the target sum was found, return false
*/

/*
  Solution explanation:

  This solution uses a hash table to keep track of the numbers that have been seen so far.
  As we iterate through the array, we check if the complement of the current number (i.e. target minus the current number)
  has been seen before. If it has, then a pair of numbers with the target sum has been found, so we can return true.
  If no pair of numbers with the target sum was found, we return false after iterating through the whole array.
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
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
