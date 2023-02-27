// // Given an integer x, return true if x is a
// // palindrome , and false otherwise.

// // const isPalindrome = function(x) {
//   //convert to string then array for easy comparison
//   let arr = Array.from(String(x), Number);
//   let arrLength = arr.length;
//   let i = 0; //count from front
//   let j = arrLength - 1; //count from back
//   //Math.round to account for odd numbers; center number will be the same either way. compare each array back to front moving inward, stop when reach halfway
//   while (i < Math.round(arrLength / 2)) {
//     if (arr[i] !== arr[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// };

const isPalindrome = function(x) {
  if (Math.sign(x) === -1) {
    return false;
  }
  let numLength = (Math.ceil(Math.log10(x + 1)));
  console.log(numLength);
  let i = 0;
  let j = numLength;
  const getDec = (num) => ((num - (Math.trunc(num))).toFixed(1));
  while (i < Math.round(numLength / 2)) {
    let num1 = getDec((x / (Math.pow(10, j))));
    console.log((x / (Math.pow(10, j))))
    let num2 = getDec((x / (Math.pow(10, i + 1))));
    console.log((x / (Math.pow(10, i + 1))))
    console.log(num1, num2);
    if (num1 !== num2) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};


console.log(isPalindrome(9999));


