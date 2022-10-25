/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (37.19%)
 * Likes:    5837
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 3.3M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  let maxLen =1;
  let start=0;
  let m = []

  if(len<2) {
    return s;
  }

  for(let i =0;i<len;i++) {
    m[i] = [];
    for(let j=0;j<len;j++) {
      m[i][j] = false;
    }
  }

  for(let i =0;i<len;i++) {
    m[i][i] = true;
  }

  for(let Len=2; Len<=len;Len++) {
    for(let i=0;i<len;i++) {
      const j = i+Len-1;
      if(j>=len) {
        break;
      }

      if(s.charAt(i) === s.charAt(j)) {
        if(Len >3) {
          m[i][j]=m[i+1][j-1];
        } else {
          m[i][j] = true;
        }
      } else {
        m[i][j] = false;
      }

      if(m[i][j]) {
        if(j-i +1 >= maxLen) {
         maxLen= j-i+1; 
         start = i;
        }
      }

    }
  }

  return s.substring(start,start+maxLen);

};

console.log(longestPalindrome('bb'))

// @lc code=end

