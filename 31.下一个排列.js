/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode.cn/problems/next-permutation/description/
 *
 * algorithms
 * Medium (38.00%)
 * Likes:    1951
 * Dislikes: 0
 * Total Accepted:    375.3K
 * Total Submissions: 987.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 * 
 * 
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 * 
 * 
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列
 * 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 * 
 * 
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 * 
 * 
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 * 
 * 必须 原地 修改，只允许使用额外常数空间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

  let i = nums.length-2;
  let j = nums.length -1;

  while(i>=0) { //从右向左，找到第一个升序，nums[i] < nums[i+1];
    if(nums[j] > nums[i]) {
      break;
    }
    i--;
    j--;
  }

  if(i === -1) { //如果找不到，直接逆序返回
    return nums.sort((a,b) => a > b ? 1: -1);
  }

  let k;

  for(k = nums.length-1;k>=j;k--) { //从右向左，直到i+1，找到第一个比 nums[i]大的数nums[k]
    if(nums[k] >nums[i]) {
      break;
    }
  }

  swap(nums,i,k); //交换数字i 和k

  // console.log(j);
  // console.log(nums);

  for(let a = j;a<nums.length-1;a++) { // 从i+1开始，升序排列
    for(let b = j;b<nums.length-1;b++) {
      if(nums[b] > nums[b+1]) {
        // console.log('a is larger than b', a, b);
        swap(nums, b,b+1);
      }
    }
  }

  return nums;
};

function swap(nums, i,k) {
  const temp = nums[i];
  nums[i] = nums[k];
  nums[k] = temp;
}

console.log(nextPermutation([1,3,5,4,2]))

// @lc code=end

