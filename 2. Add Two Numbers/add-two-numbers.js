// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const reverseLinkedList = (list) => {
  //define vars to hold items for reversal
  let prev = null;
  let next = null; 

  //while finding tail node
  while(list !== null) {
    //change links from next to previous
      //store current list.next as next
      next = list.next;
      //set list.next as current prev
      list.next = prev;
      //store current item as new prev
      prev = list;
      //redefine list as current next
      list = next;
  }
  //return reversed list
  return list
}

const addTwoNumbers = function(l1, l2) {
  //reverse lists
  console.log(reverseLinkedList(l1), l1)
  //combine numbers into one
  //add numbers
  //split total sum into array 
};