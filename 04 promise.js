// ES5 Syntax
function findCamper(id, callback) {
  openDatabase(function(db) {
    getCollection(db, 'users', function(col) {
      find(col, { id: id }, function(result) {
        result.filter(function(user) {
          callback(user.name);
        });
      });
    });
  });
}

// ES6 Syntax
function findCamper(id) {
  return openDatabase(db)
    .then(getCollection)
    .then(find.bind(null, { id: id }))
    .then(function(user) {
      return user.name;
    })
    .catch(function(error) {
      //handle any error that may occur before this point
    });
}

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

let items = ['Water', 'Batteries', 'Tent'];
items.includes('Water'); // true
items.includes('Fire'); // false

2 ** 3; // 8
3 ** 2; // 9
