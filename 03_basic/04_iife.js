//Immediately Invoked Funtion Expressions

(function testDB() {
  console.log("DB Connected");
})();

(() => {
  console.log("DB Connected two");
})();

((name) => {
  console.log(`DB Connected to ${name}`);
})("Tejas");
