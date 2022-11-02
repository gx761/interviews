/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode.cn/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (42.15%)
 * Likes:    8809
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 3.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 
 * 题目数据保证列表表示的数字不含前导零
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  const dummy = new ListNode(-1)
  let pre = dummy;
  let flag = 0;

  while(l1 && l2) {
    const sum = l1.val+l2.val+flag;
    const remain = sum%10;
    flag = Math.floor(sum /10);
    pre.next = new ListNode(remain);
    pre = pre.next;
    l1 = l1.next
    l2 = l2.next
  }

  while(l1) {
    const sum = l1.val +flag;
    const remain = sum%10;
    flag = Math.floor(sum /10);
    pre.next = new ListNode(remain);
    pre = pre.next;
    l1 = l1.next
  }

  while(l2) {
    const sum = l2.val +flag;
    const remain = sum%10;
    flag = Math.floor(sum /10);
    pre.next = new ListNode(remain);
    pre = pre.next;
    l2 = l2.next
  }
  if(flag) {
    pre.next = new ListNode(flag);
  }
  return dummy.next;

};
// @lc code=end

