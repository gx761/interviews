/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 *
 * https://leetcode.cn/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (57.15%)
 * Likes:    811
 * Dislikes: 0
 * Total Accepted:    160K
 * Total Submissions: 280K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * 输出：3
 * 解释：长度最长的公共子数组是 [3,2,1] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
 * 输出：5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) { //dp[i][j] 为i,j 之前的最长公共后缀（不包括i，j）
                                          //所以n，m为之前的最长公共后缀。
  const n = nums1.length;
  const m = nums2.length;

  let max = 0
  // console.log(n,m)
  const dp = new Array(n+1).fill(0).map(v => new Array(m+1).fill(0)) //要存dp[n][m], 所以长度需要多一位

  for(let i = 1; i<=n ;i++) {
    for (let j = 1;j<=m;j++) {
      if(nums1[i-1] === nums2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
        max = Math.max(dp[i][j], max);
      }
    }
  }
  return max;
};

// const a = [1,2,3,2,1];
// const b = [3,2,1,4,7]
// console.log(findLength(a,b));

// @lc code=end

