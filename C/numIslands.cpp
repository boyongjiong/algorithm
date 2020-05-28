/**
 * 复杂度分析
 * 时间复杂度：O(M x N), 其中 M 和 N 分别是行数和列数.
 * 空间复杂度：最坏情况下 O(M x N), 此时整个网格均为陆地，深度优先搜索深度达到 M x N.
 */
class Solution
{
private:
  void dfs(vector<vector<char>> &grid, int r, int c)
  {
    int nr = grid.size();
    int nc = grid[0].size();

    grid[r][c] = '0';
    if (r - 1 >= 0 && grid[r - 1][c] == '1')
      dfs(grid, r - 1, c);
    if (r + 1 < nr && grid[r + 1][c] == '1')
      dfs(grid, r + 1, c);
    if (c - 1 >= 0 && grid[r][c - 1] == '1')
      dfs(grid, r, c - 1);
    if (c + 1 < nc && grid[r][c + 1] == '1')
      dfs(grid, r, c + 1);
  }

public:
  int numIslands(vector<vector<char>> &grid)
  {
    int nr = grid.size();
    if (!nr)
      return 0;
    int nc = grid[0].size();

    int num_islands = 0;
    for (int r = 0; r < nr; ++r)
    {
      for (int c = 0; c < nc; ++c)
      {
        if (grid[r][c] == '1')
        {
          ++num_islands;
          dfs(grid, r, c);
        }
      }
    }

    return num_islands;
  }
};
