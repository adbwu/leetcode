/**
 * @param {string} s
 * @return {boolean}
 */

const brackets  = [ "{", "[", "(", ")", "]", "}"];

const isValid = function(s) {
   arr = s.split('');
   let bracketArr = [];
   console.log(arr);
   arr.forEach(element => {
    if (brackets.includes(element)) {
      bracketArr.push(element);
    }
   });
   if (bracketArr.length % 2 !== 0) {
    return false;
   } 
   return true;
};

console.log(isValid("()"));
