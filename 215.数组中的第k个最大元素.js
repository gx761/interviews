/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.33%)
 * Likes:    1924
 * Dislikes: 0
 * Total Accepted:    759.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [3,2,3,1,2,4,5,5,6], k = 4
 * 输出: 4
 * 
 * 
 * 
 * 提示： 
 * 
 * 
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  const sorted = quickSort(nums, 0, nums.length-1);

  return sorted[nums.length -k];
};

function quickSort(nums, start, end) {
  if(start>=end)  {
    return nums;
  }

  let left = start;
  let right = end;
  const base = nums[start];

  while(left < right) {
    while(left < right && nums[right] > base) {
      right--;
    }

    while(left < right && nums[left] <= base) {
      left++;
    }

    if(left<= right) {
      swap(nums, left, right);
    }
  }

  nums[start] = nums[left];
  nums[left] = base;

  quickSort(nums, start, left-1);
  quickSort(nums, left+1, end);
  return nums;
}

function swap(arr,a, b) {
  const temp = arr[a];
  arr[a] =arr[b];
  arr[b] = temp;
}

let nums = [3,2,1,5,6,4];

// @lc code=end

