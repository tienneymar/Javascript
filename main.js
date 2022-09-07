//Bai 1
var styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);

var styles = ["Jazz", "Blues"];
var newArr = styles.slice(0, 1);
console.log(newArr);

var styles = ["Jazz", "Blues"];
styles.unshift("Rap", "Reggae");
console.log(styles);

var styles = ["Jazz", "Blues"];
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
//Bai 2
// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("Hay Nhap Vao", 0);

//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(sumInput());
//Bai 3

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arrr = [5, 3, 8, 1];

let filtered = filterRange(arrr, 1, 4);

console.log(filtered);

console.log(arrr);

//Bai 4
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arrrr = [5, 3, 8, 1];

filterRangeInPlace(arrrr, 1, 4);

console.log(arrrr);
//Bai 5
function copySorted(arr) {
  return arr.slice().sort();
}

let array = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array);

console.log(sorted);
console.log(array);
//Bai 6
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersName = users.map((user) => ({
  fullName: `${user.name}`,
  id: user.id,
}));
console.log(usersName[0].id);

function sortByAge(users) {
  users.sort((a, b) => (a.age > b.age ? 1 : -1));
}
console.log(sortByAge(users));

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0);
  users.length();
}
console.log(getAverageAge(users));

//Bai Tap Nang Cao
//Bai 1
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(unique(arr));

function unique(arr) {
  return [...new Set(values)];
}
console.log(unique(values));
//Bai 2
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
// Bai 3
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}
function count(obj) {
  return Object.keys(obj).length;
}
function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}
///Form Submit
const Form = document.getElementById("myForm");
Form.addEventListener("submit", (event) => {
  event.preventDefault();
});
