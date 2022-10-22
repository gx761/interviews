/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (78.76%)
 * Likes:    2268
 * Dislikes: 0
 * Total Accepted:    745.6K
 * Total Submissions: 946.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const used = {};
  const result = [];

  dfs([]);

  function dfs(path) {
    if(path.length === nums.length) {
      result.push(path.slice());
    }

    for(let i=0;i<nums.length;i++) {
      if(used[nums[i]]) {
        continue; 
      }
      path.push(nums[i]);
      used[nums[i]] = true;
      dfs(path);
      path.pop(); //深度遍历完后，回溯一位。从另一条路线继续遍历
      used[nums[i]] =false;
    }

  }

  return result;

};
// @lc code=end

