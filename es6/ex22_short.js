var name = 'Bia', yearBorn = 2000;
function year(){
  return new Date().getFullYear() - yearBorn;
}
var person = {
  name,
  yearBorn,
  year,
  toString(){return `${this.name} = ${this.year()}`;}
}
console.log(person.toString());
