# Js Data Structures

An implementation of basic Data Structures in JavaScript

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Contributing

### Prerequisites
1. ***Node.js*** - Download it from [here](https://nodejs.org/en/).
2. ***Webpack*** - npm install webpack -g

### Steps to setup locally
1. git clone https://github.com/mauriciosantos/Buckets-JS.git
2. npm install
3. npm start

## Installing

Download the [dist/bundle.js](https://github.com/harshit-sinha-developer/js-data_structures/blob/master/dist/bundle.js) file and include it into your scripts
```
<script src="bundle.js"></script>
```
## Included Data Structures

1. Linked List
```
<script>

var linkedList = new LinkedList();
linkedList.addItem(1);
linkedList.addItem(2);
linkedList.addItem(3);
linkedList.addItem(4);
linkedList.addItem(5);
linkedList.addItem(6);
linkedList.addItem(7);

linkedList.map(function(value) {
    console.log(value);
});

// Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7

console.log(linkedList.toArray())

// Output
// [1, 2, 3, 4, 5, 6, 7]
</script>
```

2. Queue
```
var queue = new DsLib.QueueList();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

queue.map(function(value) {
    console.log(value)
});
// Output
// 1
// 2
// 3
// 4
// 5
// 6

queue.dequeue();
queue.dequeue();
queue.map(function(value) {
    console.log(value)
});
// Output
// 3
// 4
// 5
// 6
```

3. Stack
```
var stack = new DsLib.StackList();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack.toArray());
// Output
// [1, 2, 3, 4, 5, 6]

stack.pop();
stack.pop();
// Output
// [1, 2, 3, 4]
console.log(stack.toArray());
```