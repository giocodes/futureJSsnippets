let items = ['Water', 'Batteries', 'Tent'];
const checkItems = (one, two, three = []) => {
 console.log(one, two, three);
};
// ES5
checkItems(items[0], items[1], items[2]);
// ES6
checkItems(...items);


// ES6
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
