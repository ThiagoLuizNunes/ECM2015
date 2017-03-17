var person = {
  name: 'Thiago',
  address: {
    street: 'A',
    number: 100
  }
};

var {address : {street, number, cep}} = person;
console.log(street, number, cep);

//will crash
var {account : {number, agency}} = person;
console.log(number, agency);
