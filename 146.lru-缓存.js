/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 *
 * https://leetcode.cn/problems/lru-cache/description/
 *
 * algorithms
 * Medium (53.36%)
 * Likes:    2439
 * Dislikes: 0
 * Total Accepted:    419.9K
 * Total Submissions: 786.9K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * 
 * 
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
 * key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 10^5
 * 最多调用 2 * 10^5 次 get 和 put
 * 
 * 
 */



// @lc code=start
/**
 * @param {number} capacity
 */

function LRNode(key, val) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.dummyHead = new ListNode(-1);
  this.dummyEnd = new ListNode(-1);
  this.dummyHead.next = this.dummyEnd;
  this.dummyEnd.prev = this.dummyHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(!this.map.has(key)) {
    return -1;
  }

  const node = this.map.get(key);
  const value = node.val;

  node.prev.next =node.next;
  node.next.prev = node.prev;
  node.next= this.dummyHead.next;
  this.dummyHead.next.prev = node;
  this.dummyHead.next = node;
  node.prev = this.dummyHead;

  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(!this.map.has(key)) {
    // console.log('put node value', key, value);
    const newNode = new LRNode(key, value);
    // console.log('new node value', newNode);
    this.map.set(key, newNode);
    newNode.next = this.dummyHead.next
    this.dummyHead.next.prev = newNode;
    this.dummyHead.next = newNode;
    newNode.prev = this.dummyHead;

    console.log(this.map.size);
    if(this.map.size > this.capacity) {
      const node = this.dummyEnd.prev;
      this.map.delete(node.key);
      node.prev.next=this.dummyEnd;
      this.dummyEnd.prev = node.prev;
      delete node;
    }
  } else {
    const existNode = this.map.get(key);
    existNode.val = value;
    existNode.prev.next = existNode.next;
    existNode.next.prev = existNode.prev;
    existNode.next= this.dummyHead.next;
    this.dummyHead.next.prev = existNode;
    this.dummyHead.next = existNode;
    existNode.prev = this.dummyHead;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

