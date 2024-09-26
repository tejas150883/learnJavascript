const userEmail = "tejas@gmail.com";
if (userEmail) {
  console.log("Email available");
} else {
  console.log("Email is not available");
}

//falsy value
// false,0,-0,BigInt 0n,'',null,undefined,NaN

//Truthy value
// true, "0", "false", " ", [], {}, function () {};

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

const emptyObject = { name: "tejas" };
if (Object.keys(emptyObject).length === 0) {
  console.log("Empty Object");
} else {
  console.log("Object is not empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);
