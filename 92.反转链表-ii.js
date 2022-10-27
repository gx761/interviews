/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let dummy = new ListNode(-1);
  dummy.next= head;
  let pre = dummy;

  for (let i=0; i<left-1; ++i) {
    pre = pre.next //find node before left
  }

  let current = pre.next

  //pre 1 > 2 > 3 > 4
  //pre 2(t) > 1(c) > 3 > 4
  //pre 3(t) > 2 > 1(c) > 4
  // 4 3 2 1 >5



  for(let i=0; i<right-left;i++) { //可以估算出要循环的次数。
    let t = current.next;
    current.next = t.next
    t.next = pre.next 
    pre.next = t;
  }
  return dummy.next;
};
// @lc code=end

