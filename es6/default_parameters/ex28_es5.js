function append(a, b) {
  a = a !== undefined ? a : 1;
  b = b !== undefined ? b : 1;
  return a + b;
}

console.log(append(), append(2,3), append(0));
