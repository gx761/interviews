/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode.cn/problems/sort-list/description/
 *
 * algorithms
 * Medium (66.13%)
 * Likes:    1814
 * Dislikes: 0
 * Total Accepted:    356.1K
 * Total Submissions: 538.6K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 <= Node.val <= 10^5
 * 
 * 
 * 
 * 
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
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
 * @return {ListNode}
 */
var sortList = function(head) {
  if(!head||!head.next) {
    return head;
  }

  const mid = getMid(head);
  const left = head;
  const right = mid.next;
  mid.next = null;

  const sortedLeft = sortList(left);
  const sortedRight = sortList(right);
  return mergeLists(sortedLeft, sortedRight);
};

function getMid(head) {
  let fast = head;
  let slow = head;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next
  }
  return slow;
}

function mergeLists(a, b) {
  console.log('start merge', a, b)
  const dummy = new ListNode(-1);
  let pre = dummy;

  while(a && b) {
    if(a.val < b.val) {
      pre.next = a
      pre = pre.next;
      a = a.next
    } else {
      pre.next = b
      b = b.next
      pre = pre.next;
    }
  }

  if(a) {
    pre.next = a;
  }

  if(b) {
    pre.next = b;
  }

  return dummy.next;
}


// @lc code=end

