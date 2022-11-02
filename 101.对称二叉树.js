/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (58.31%)
 * Likes:    2168
 * Dislikes: 0
 * Total Accepted:    716.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//   return check(root.left, root.right);
// };

// function check(left, right) {
//   if(left ===null && right ===null) {
//     return true;
//   }
//   if(left === null || right===null) {
//     return false;
//   }

//   return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
// }

var isSymmetric = function(root) {
  const stack = [];
  stack.push(root);
  stack.push(root);

  while(stack.length) {
    const left = stack.pop();
    const right = stack.pop();

    if(!left &&!right) {
      continue;
    }

    if(!left || !right || left.val !==right.val) {
      return false;
    }

    stack.push(left.left);
    stack.push(right.right);
    stack.push(left.right);
    stack.push(right.left);
  }
  return true;

}

// @lc code=end

