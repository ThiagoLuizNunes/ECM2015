function averageStudent(p1, p2, p3) {
  return ((p1 + p2 + p3)/3).toFixed(2)
}

var noteStudent = [7.7, 7.3, 6.1, 0.0];
console.log(averageStudent.apply(null, noteStudent));
console.log(averageStudent(...noteStudent));
