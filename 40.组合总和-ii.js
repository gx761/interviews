/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode.cn/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (60.36%)
 * Likes:    1140
 * Dislikes: 0
 * Total Accepted:    362.8K
 * Total Submissions: 601.5K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 
 * 注意：解集不能包含重复的组合。 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * 
 * 示例 2:
 * 
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];

  candidates = candidates.sort((a,b) => a>b?1:-1)

  dfs([], 0, target, 0);

  return result;

  function dfs(current, sum, target, begin) {
    if(sum === target) {
      result.push(current.slice());
      return;
    }

    for(let i=begin; i<candidates.length;i++) {
      if(i>begin&& candidates[i] ===candidates[i-1]) {
        continue;
      }
      if(sum+candidates[i]<=target) {
        current.push(candidates[i]);
        sum = sum + candidates[i];
        dfs(current, sum, target, i+1)
        current.pop();
        sum = sum - candidates[i];
      }
    }
  }
};

// @lc code=end

