/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 *
 * https://leetcode.cn/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (57.35%)
 * Likes:    1061
 * Dislikes: 0
 * Total Accepted:    284.3K
 * Total Submissions: 495.3K
 * Testcase Example:  '"25525511135"'
 *
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 
 * 
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312"
 * 和 "192.168@1.1" 是 无效 IP 地址。
 * 
 * 
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能
 * 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "0000"
 * 输出：["0.0.0.0"]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 20
 * s 仅由数字组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];

  dfs([], 0);

  return result.map(v => v.join('.'));

  function dfs(path, start) {
    if(path.length === 4) {
      if(start === s.length) { //已经遍历到最后了
        result.push(path.slice());
      }
      return;
    }

    if(start === s.length) { //已经遍历到最后, 但是结果长度不够
      return;
    }

    if (s.charAt(start) === '0') { //遇到0， 直接推进去, 不做回溯
      const newPath = path.slice();
      newPath.push(0)
      dfs(newPath, start+1);
    }

    let current = 0;
    for(let i=start; i<s.length;i++) {
      current = parseInt(s.charAt(i)) + current * 10;
      if(current <=255 && current>0) { //非0， 并且<=255
        const newPath = path.slice();
        newPath.push(current);
        dfs(newPath, i+1);
      } else {
        break;
      }
    }
  }
};


// @lc code=end

