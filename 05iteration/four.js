const myObject = {
  js: "javascript",
  cpp: "c++",
  swift: "swift1",
  rb: "ruby",
};

for (const key in myObject) {
  //   console.log(key);
  //  console.log(`${key} stands for: ${myObject[key]}`);
}

const myArray = ["js", "cpp", "react", "ruby", "swift"];

for (const key in myArray) {
  //console.log(myArray[key]);
}

//Maps
const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United States of America");

for (const key in map) {
  console.log(key);
}
