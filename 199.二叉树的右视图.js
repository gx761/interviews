/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (65.62%)
 * Likes:    772
 * Dislikes: 0
 * Total Accepted:    247.3K
 * Total Submissions: 376.8K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 
 * 
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,null,3]
 * 输出: [1,3]
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: []
 * 输出: []
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 二叉树的节点个数的范围是 [0,100]
 * -100  
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root) {
    return [];
  }

  const stack = [];
  stack.push(root);
  const result = [];

  while(stack.length !==0) {
    const currentLevelSize = stack.length;
    for(let i=0;i<currentLevelSize;i++) { //二叉树的层序遍历
      const node = stack.shift(); 
      if(i === currentLevelSize -1) {
        result.push(node.val);
      }
      if(node.left) {
        stack.push(node.left);
      }
      if(node.right) {
        stack.push(node.right);
      }
    }
  }
  return result;
};
// @lc code=end

