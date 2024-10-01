const coding = ["js", "node", "react", "ruby", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((i) => {
//   console.log(i);
// });

// function printMe(i) {
//   //   console.log(i);
//   console.log("Hello");
// }

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr[index]);
});
