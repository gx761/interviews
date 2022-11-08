/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode.cn/problems/subsets/description/
 *
 * algorithms
 * Medium (80.86%)
 * Likes:    1845
 * Dislikes: 0
 * Total Accepted:    543.5K
 * Total Submissions: 672K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有元素 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  
  const result = [] 
  travese(nums, 0,[], result);

  function travese(nums, start, current, result) {
 
    if(start <= nums.length) {
      result.push(current.slice())
    }

      for(let i=start;i<nums.length;i++) {
      current.push(nums[i]);

      travese(nums, i+1, current, result);

      current.pop();
    }
  }

  return result;

};

console.log(subsets([1,2,3]));

// @lc code=end

