var person = {
  name: 'Thiago',
  year: 24
};

var {name, year} = person;
console.log(name, year);

var {name:n, year:i} = person;
console.log(n,i);

var{gender, situantion = 'Actve'} = person;
console.log(gender, situantion);
