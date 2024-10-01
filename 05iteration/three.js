//for of
//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello Tejas";
for (const greet of greetings) {
  // console.log(greet);
}

//Maps
const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United States of America");
// console.log(map);
for (const [key, value] of map) {
  console.log(key + " :- " + value);
}

const myObject = {
  game1: "NFS",
  game2: "Road Race",
};

for (const game of myObject) {
  console.log(game);
}
