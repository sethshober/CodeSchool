var List = require('linked-list'); // or use AMD, or globals. 
var Item = List.Item;
 
var item0 = new Item('0');
var item1 = new Item('1');
var item2 = new Item('2');
var list  = new List(item0, item1, item2);
 
console.log( list.head ); // => item 
console.log( list.head.next ); // => item_ 
console.log( list.head.next.next ); // => item__ 
console.log( list.head.next.prev ); // => item 
console.log( list.tail ); // => item__ 
console.log( list.tail.next ); // => `null`