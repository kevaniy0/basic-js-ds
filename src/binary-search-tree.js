const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    if (!isFinite(data)) return;
    
    if (!this.rootTree) {
      this.rootTree = new Node(data);
      return;
    }
    let currentNode = this.rootTree;

    while (currentNode) {
      if (currentNode.data === data) return;
      if (data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        }else{
          currentNode.right = new Node(data);
          return;
        }
        
      }
      if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        }else{
          currentNode.left = new Node(data);
          return;
        }
      }
    }
    


  }

  has(data) {
    if (!isFinite(data)) return;
    let currentNode = this.rootTree;
    if (!currentNode) return false;

    while (currentNode) {
      if (data === currentNode.data) return true;
      if (data > currentNode.data) {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      }
      if (data < currentNode.data) {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      }
    }
  }
  

  find(data) {
    let currentNode = this.rootTree;
    if (!currentNode) return null;

    while (currentNode) {
      if (currentNode.data === data) return currentNode;
      if (data > currentNode.data) {
        if (!currentNode.right) return null;
        currentNode = currentNode.right;
      }
      if (data < currentNode.data) {
        if (!currentNode.left) return null;
        currentNode = currentNode.left;
      } 
    }
  }

  remove(data) {
    if (!isFinite(data)) return;
    let currentNode = this.rootTree;
    let prevNode = currentNode;
    if (!currentNode) return;
    if (!currentNode.left && !currentNode.right && currentNode.data === data){
      this.rootTree = null;
      return;
    } 
    while(currentNode) {
      
     
      if (data < currentNode.data) {
        if (!currentNode.left) {
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.left;
        continue;
      }
      if (data > currentNode.data){
        
        if (!currentNode.right){
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.right;
        continue;
      }

      if (data === currentNode.data) {
        if (!currentNode.left && !currentNode.right){
          if (prevNode.data < currentNode.data){
            prevNode.right = null; 
          }else{
            prevNode.left = null; 
          }
                
          return;
        } 
        if (!currentNode.left){ 
          if (currentNode == this.rootTree) {
            this.rootTree = this.rootTree.right;
            return;
          }
          if (prevNode.left == currentNode){
            prevNode.left = currentNode.right;
            return
          }
          prevNode.right = currentNode.right; 
          return
        }
        if (!currentNode.right) {
          
          if (currentNode == this.rootTree) {
            this.rootTree = this.rootTree.left;
            return;
          }
          if (prevNode.right == currentNode){
            prevNode.right = currentNode.left;
            return
          }
          prevNode.left = currentNode.left;
          return;
        }
        if (currentNode.left && currentNode.right) {
          let node = currentNode.left;
          while (node) {
            if (!node.right) {
              currentNode.data = node.data;
              node = null;
              return;
            }else{
              node = node.right;
            } 
          } 
          node = null;
        }
        return;
      }
      

    }
}

  min() {
    let currentNode = this.rootTree;
    if (!currentNode) return null;
    let minValue = currentNode.data;
    while (currentNode){
        if (currentNode.left) {
          minValue = currentNode.left.data;
          currentNode = currentNode.left;
        }else{
          return minValue;
        }
    }
    return minValue;
  }

  max() {
    let currentNode = this.rootTree;
    if (!currentNode) return null;
    let maxValue = currentNode.data;
    while(currentNode) {
      if (!currentNode.right) return maxValue;
      maxValue = currentNode.right.data;
      currentNode = currentNode.right;
    }
    return maxValue;
  }
}

module.exports = {
  BinarySearchTree
};