// Example Mozilla Developer Network
function Person() {
  var age = 0;

  setInterval(() => {
    age++;
    console.log(age);
  }, 1000);
}

new Person();
