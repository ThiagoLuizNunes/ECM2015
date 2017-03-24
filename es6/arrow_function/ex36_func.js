var stock = [
  {name : 'Ream paper A4', price: 19.99, amount: 300, fragile: false},
  {name: 'Monitor LG', price: 1699, amount: 15, fragile: true},
  {name: 'White eggs', price: 18.99, amount: 21, fragile: true},
  {name: 'Pirelle tire', price: 1027.34, amount: 16, fragile: false},
  {name: 'Apple Ipad', price: 3999, amount: 17, fragile: true}
];

const expensivePrice = item => item.price >= 1000;
const isFragile = item => item.fragile;
const append = (total, amount) => total + amount;

const amountProductsExpensiveFragile = stock
  .filter(expensivePrice)
  .filter(isFragile)
  .map(item => item.amount)
  .reduce((total, amount) => total + amount);

console.log(amountProductsExpensiveFragile);
