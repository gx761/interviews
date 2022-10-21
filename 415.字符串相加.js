/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (55.01%)
 * Likes:    627
 * Dislikes: 0
 * Total Accepted:    236K
 * Total Submissions: 428.9K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const n1 = num1.split('');
  const n2 = num2.split('');
  const result = [];

  let l1 = n1.length -1;
  let l2 = n2.length -1;
  let flag = 0 ;

  while(l1>=0 && l2>=0) {
    const added= Number.parseInt(n1[l1]) +Number.parseInt(n2[l2]) + flag;
    if(added >= 10) {
      flag = 1;
      result.unshift(added%10);
    } else {
      result.unshift(added);
      flag=0;
    }
    l1--;
    l2--;
  }

  while(l1>=0) {
    const added = Number.parseInt(n1[l1]) + flag;
    if(added ===10) {
      flag = 1;
      result.unshift(0);
    }else {
      flag = 0;
      result.unshift(added)
    }
    l1--;
  }

  while(l2>=0) {
    const added = Number.parseInt(n2[l2]) + flag;
    if(added ===10) {
      flag = 1;
      result.unshift(0);
    }else {
      flag = 0;
      result.unshift(added)
    }
    l2--;
  }
  if(flag) {
    result.unshift(1);
  }

  return result.join('');
      
};
// @lc code=end

