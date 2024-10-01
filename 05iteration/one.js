//for
// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is best number");
  }
  //console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop is ${i}`);
    // console.log(i + "*" + j + " = " + i * j);
  }
}

// for (index = 1; index <= 20; index++) {
//   console.log(`Value of index is ${index}`);
//   if (index === 5) {
//     console.log("5 is detected");
//     break;
//   }
// }

for (index = 1; index <= 20; index++) {
  if (index === 5) {
    console.log("5 is detected");
    continue;
  }
  console.log(`Value of index is ${index}`);
}
