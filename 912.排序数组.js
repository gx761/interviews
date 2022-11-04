/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 *
 * https://leetcode.cn/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (54.76%)
 * Likes:    712
 * Dislikes: 0
 * Total Accepted:    466.3K
 * Total Submissions: 851.7K
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给你一个整数数组 nums，请你将该数组升序排列。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // console.log(nums.length);
  quickSortOptimized(nums, 0, nums.length-1);
  return nums;
};

// function quickSort(nums) {
//   if(nums.length <=1) {
//     return nums;
//   }

//   const mid = nums[0];
//   const left = [];
//   const right = [];

//   for(let i=1;i<nums.length;i++) {
//     if(nums[i] <=mid) {
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i])
//     }
//   }
//   return [...quickSort(left), mid, ...quickSort(right)]
// }

function quickSortOptimized(nums, start, end) { 
  if(start >=end) {
    return
  }

  const base = nums[start];
  let left = start;
  let right = end

  while(left<right) {
    while(nums[right]>base && left < right) {
      right--
    }

    while(nums[left] <=base && left < right) {
      left++
    }

    if(left < right) {
      swap(nums, left, right);
    }
  }

  nums[start] = nums[left];
  nums[left] = base;

  quickSortOptimized(nums, start, left-1)
  quickSortOptimized(nums, left+1, end)

  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp
  }
}


// @lc code=end

