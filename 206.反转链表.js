/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let current = head;

  while(current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev
};

// var reverseList = function(head) {
//   if(head === null || head.next ===null) {
//     return head;
//   }

//   let newHead = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// }




// @lc code=end

