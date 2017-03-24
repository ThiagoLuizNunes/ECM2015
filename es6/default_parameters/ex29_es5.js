function append(a, b) {
  a = (0 in arguments) ? a : 1;
  b = (1 in arguments) ? b : 1;
  return a + b;
}

console.log(append(), append(2,3), append(0));
