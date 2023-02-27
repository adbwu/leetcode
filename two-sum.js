/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  nums.forEach((num, index) => {
    nums.forEach((numCompare, indexCompare) => {
        if (index !== indexCompare) {
          if (num + numCompare === target) {
            return [index, indexCompare];
            }
        }
    })
  })
};

const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums.find(secondNumber => secondNumber === (target - nums[i])))
  }
};

