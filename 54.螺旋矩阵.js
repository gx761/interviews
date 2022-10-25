/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (49.17%)
 * Likes:    1239
 * Dislikes: 0
 * Total Accepted:    318.1K
 * Total Submissions: 647K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
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
 * -100 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
  const result = []
  const left = 0;
  const bottom = matrix.length-1;
  const top = 0;
  const right = matrix[0].length-1

  travse(matrix, left, right,top, bottom,result);

  return result;
};

function travse(matrix,left, right, top, bottom, result ) {
  while(left<=right && top<=bottom) {
    for(let i=left;i<=right;i++) {
      result.push(matrix[top][i]);
    }

    for(let j=top+1;j<=bottom;j++) {
      result.push(matrix[j][right]);
    }

    if(left<right && top<bottom) {
      for(let k=right-1;k>=left;k--) {
        result.push(matrix[bottom][k])
      }
      for(let n=bottom-1;n>top;n--) {
        result.push(matrix[n][left])
      }
    }
    left++;
    right--;
    bottom--;
    top++;
  }
}


// @lc code=end

// const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
// console.log(spiralOrder(arr))
