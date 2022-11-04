/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 *
 * https://leetcode.cn/problems/maximal-square/description/
 *
 * algorithms
 * Medium (49.30%)
 * Likes:    1307
 * Dislikes: 0
 * Total Accepted:    238.3K
 * Total Submissions: 483.2K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix =
 * [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [["0","1"],["1","0"]]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：matrix = [["0"]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * matrix[i][j] 为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {

  const rows= matrix.length;
  const columns= matrix[0].length;

  let dp = [];
  for (let i=0;i< rows;i++) {
    dp[i] = new Array(columns); //以i,j为右下角的最大正方形边长
  }

  let max = 0

  for(let i =0; i< rows; i++) { 
    for(let j=0; j< columns; j++) {
      if(matrix[i][j] === '1') { 
        if(i==0 || j ==0) { //左，右，下三个角落都是1
          dp[i][j] =1;
        } else {
          dp[i][j]=Math.min(Math.min(dp[i-1][j],dp[i][j-1]),dp[i-1][j-1])+1 //左，上，左上三个节点正方形边长的最小值+1
        }
      } else { //0 的时候，边长也是0
        dp[i][j] = 0;
      }
      max = Math.max(dp[i][j], max); //记录一下最大边长
    }
  }
  return Math.pow(max,2);
};
// const arr = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// console.log(maximalSquare(arr))

// @lc code=end

