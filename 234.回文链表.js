/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (52.59%)
 * Likes:    1559
 * Dislikes: 0
 * Total Accepted:    522.1K
 * Total Submissions: 992.4K
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,2,1]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 * 
 * 
 * 
 * 
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const firstHalfEnd = getMidNode(head);

  const secondHalfStart = reverseNode(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;

  while(result &&p2!=null) {
    if(p1.val !==p2.val) {
      result=false
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return result;
};

function getMidNode(head) {
  let fast = head
  let slow = head

  while(fast&&fast.next&&fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow;
}

function reverseNode(node) {

  let prev =null;
  let curr = node;

  while(curr) {
    let tmp = curr.next;
    curr.next= prev;
    prev = curr;
    curr = tmp
  }
  return prev;
}

// @lc code=end

