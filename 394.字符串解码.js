/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode.cn/problems/decode-string/description/
 *
 * algorithms
 * Medium (56.75%)
 * Likes:    1346
 * Dislikes: 0
 * Total Accepted:    211.3K
 * Total Submissions: 372.2K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 30
 * s 由小写英文字母、数字和方括号 '[]' 组成
 * s 保证是一个 有效 的输入。
 * s 中所有整数的取值范围为 [1, 300] 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let repetStack = [];
  let resStack = [];
  let repet = 0;
  let resStr = "";

  for(let i=0;i<s.length;i++){
    let cur = s.charAt(i);
    if(cur == '['){
      //双双压入栈中,保存当前状态
      repetStack.push(repet);
      resStack.push(resStr);
      //置空，准备下面的累积
      repet = 0;
      resStr = "";
    } else if(cur == ']'){
      // 取出当前重复次数栈中的值，也就是当前字符串的重复次数
      let count = repetStack.pop();
      // 根据重复次数生成重复字符串，赋值给temp，和resStr拼接
      let temp = "";
      for(let i = 0; i<count; i++){
          temp += resStr;
      }
      // 和前面已经求得的字符串进行拼接
      resStr = resStack.pop() + temp;
    } else if(cur>='0' && cur<='9') {
        // repet累积
        repet = repet*10 + (cur-'0');
    } else {
        //字符累积
        resStr += cur;
    }
  }

  return resStr;

};


// @lc code=end

