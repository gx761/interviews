/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode.cn/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (58.72%)
 * Likes:    1955
 * Dislikes: 0
 * Total Accepted:    571.4K
 * Total Submissions: 972.6K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * grid[i][j] 的值为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(grid.length ===0 || grid[0].length === 0) {
    return 0;
  }
  let numIslands = 0;

  for(let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[0].length; j++) { //遍历所有节点，如果为0跳过，如果唯一，找到一个岛，然后从这个岛上开始扩散, 把所有陆地变海洋 
     if(grid[i][j] ==0) {
      continue;
     } 
     numIslands++;
     dfs(grid, i, j);
    }
  }
  return numIslands;
};

function dfs(grid, x, y) {
  if(!inArea(grid, x,y)) { //要判断一下是否还在边界内
    return;
  }
  if(grid[x][y] ==0) {
    return;
  }
  grid[x][y] =0; //陆地变海洋

  dfs(grid, x+1, y);
  dfs(grid, x-1, y);
  dfs(grid, x, y+1);
  dfs(grid, x, y-1);

}

function inArea(grid, x,y) {
  const width = grid.length;
  const height = grid[0].length;

  if(x <0 || x>=width) {
    return false;
  }

  if(y <0|| y>=height) {
    return false;
  }
  return true;
}


// @lc code=end

