function defVal() {
  return 2;
}

function append(a = defVal()+1, b = defVal()) {
    return a + b;
}

console.log(append(), append(2,3), append(0));
