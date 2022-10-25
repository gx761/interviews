/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode.cn/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (44.70%)
 * Likes:    1077
 * Dislikes: 0
 * Total Accepted:    266.1K
 * Total Submissions: 595.4K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 
 * 示例 2:
 * 
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 200
 * num1 和 num2 只能由数字组成。
 * num1 和 num2 都不包含任何前导零，除了数字0本身。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const num1Arr = num1.split('');
  const num2Arr = num2.split('');

  const pos = [];

  for(let i=num1Arr.length-1;i>=0;i--) {
    for(let j=num2Arr.length-1;j>=0;j--) {

      const index0 = i+j; //十分位
      const index1 = i+j+1; //个位

      const mul = Number.parseInt(num1Arr[i])* Number.parseInt(num2Arr[j]) + (pos[index1] || 0);
      pos[index0] = Math.floor(mul/10) + (pos[index0] || 0);
      pos[index1] = mul % 10;
    }
  }
  const result = pos.join('').replace(/^0+/,'');
  return result || "0"
};
// @lc code=end

