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
  console.log(`Outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop ${j}`);
  }
}
