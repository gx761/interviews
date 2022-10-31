/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode.cn/problems/reorder-list/description/
 *
 * algorithms
 * Medium (64.39%)
 * Likes:    1064
 * Dislikes: 0
 * Total Accepted:    218.4K
 * Total Submissions: 339.1K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
 * 
 * 
 * L0 → L1 → … → Ln - 1 → Ln
 * 
 * 
 * 请将其重新排列后变为：
 * 
 * 
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * 
 * 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2,3,4]
 * 输出：[1,4,2,3]
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[1,5,2,4,3]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表的长度范围为 [1, 5 * 10^4]
 * 1 <= node.val <= 1000
 * 
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

  const mid = findMidNode(head);
  let top = head;
  let bottom = mid.next;
  mid.next = null;
  let reversed = reverse(bottom);

  return mergeList(top, reversed);
};

function mergeList(top ,reversed) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while(top || reversed) {
    if(top) {
      current.next = top;
      current = current.next;
      top = top.next;
    }
    if(reversed){
      current.next = reversed;
      current = current.next;
      reversed = reversed.next
    }
  }
  return dummy.next;
}

function reverse(head) {
  let p =null;
  let current = head;
  while(current) {
    let t = current;
    current = current.next;
    t.next = p;
    p = t;
  }
  return p;
}

function findMidNode(head) {
  let fast = head;
  let slow = head;

  while(fast.next!==null && fast.next.next!==null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// @lc code=end

