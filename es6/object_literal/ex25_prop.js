var grandFather = { attr1: 'A'};
var father = {
  __proto__: grandFather,
  attr2: 'B'
};
var son = {
  __proto__: father,
  attr3: 'C'
};
console.log(son.attr1, son.attr2, son.attr3);

var mother = {hairCollor: 'Brown'};
var daughter = {};
Object.setPrototypeOf(daughter, mother);
console.log('Hear´s collor = ', daughter.hairCollor);
