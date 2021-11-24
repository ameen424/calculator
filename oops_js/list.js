class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
    }

 insert (data) {
    if(this.tail === null){
        this.head = new Node(data);
        this.tail = this.head;
    }
    else{
        this.tail.next = new Node(data);
        this.tail = this.tail.next;
    }
 }
reverse(){

    let current = this.head;
    let prev = null;
    let next;
    while(current != null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
 }
 print() {
    let current = this.head;
    let output =[];
    while(current !== null){
        output.push(current.data);
        current = current.next;
    }
    console.log(output.join('->'));
 }
}

 let list = new Linkedlist();
 list.insert(1);
 list.insert(24);
 list.insert(8);
 list.insert(96);
 list.insert(4);

 list.print();

list.reverse();

 list.print();