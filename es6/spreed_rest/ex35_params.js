function average(...notes) {
  var total = notes.reduce((append, note) => append + note);
  return total / notes.length;
}

console.log(average(7.5,8,9,9.5));
