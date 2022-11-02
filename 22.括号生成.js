/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.55%)
 * Likes:    2929
 * Dislikes: 0
 * Total Accepted:    612.4K
 * Total Submissions: 789.8K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  let result = [];
  backTrack("", result, 0, 0, n);
  return result;

};

function backTrack(current, result, left, right, n) {
  if(current.length === 2*n) {
    result.push(current)
    return;
  }

  if(left < n) {
    current = current + '(';
    backTrack(current, result, left+1, right, n)
    current = current.slice(0, current.length-1)
  }

  if(right < left) {
    current = current + ')';
    backTrack(current, result, left, right+1, n)
    current = current.slice(0, current.length-1)
  }

}

// @lc code=end

