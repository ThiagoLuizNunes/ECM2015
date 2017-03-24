var father = {
  func() {return 'Father';}
}
var son = {
  func() {return `${super.func()} + son`;}
}

Object.setPrototypeOf(son,father);
console.log(son.func());
