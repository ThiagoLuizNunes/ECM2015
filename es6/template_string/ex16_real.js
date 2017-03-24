function real(strings, ...values){
  const result = [];
  values.forEach(function(value, index){

    //operator ? mean that = condition ? value1 : value2, if condition is true
    //the operator receive value1 else value2
    value = (typeof value == 'number')
      ? `R$${value.toFixed(2)}` : value;
    result.push(strings[index], value);
  });
  //transforming array in string
  return result.join('');
}

var price = 29.99, parcel = 11;
console.log(real `1x of ${price} or 3x of ${parcel}`);
