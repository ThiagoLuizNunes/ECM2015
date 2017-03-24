function append(a, b) {
  a = a || 1;
  b = b || 1;
  return a + b;
}

console.log(append(), append(2,3), append(0));
