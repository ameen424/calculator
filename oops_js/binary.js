class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(data)
    {
        var newNode = new Node(data);
        if(this.root === null) {
            this.root = newNode;
            console.log(this.root.data + " is the root");
        }
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null) {
                node.left = newNode;
                console.log("Inserted " + node.left.data + " as the left child of " + node.data);
            }
            else
                this.insertNode(node.left, newNode); 
        }
        else
        {
            if(node.right === null) {
                node.right = newNode;
                console.log("Inserted " + node.right.data + " as the right child of " + node.data);
            }
            else
                this.insertNode(node.right,newNode);
        }
    }
}
var BST = new BinaryTree();
BST.insert(4);
BST.insert(2);
BST.insert(5);
BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(5);