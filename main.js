let a = 5;
let b = '5';

console.log(a, typeof(a));
console.log(b, typeof(b));

console.warn("Menor");
console.log(a < b); //Operador de menor  (false)
console.warn("Menor o igual");
console.log(a <= b); //Operador de menor o igual (verdadero)
console.warn("Mayor");
console.log(a > b); //Operador de mayor (false)
console.warn("Mayor o igual");
console.log(a >= b); //Operador de mayor o igual (verdaero)
console.warn("Igualdad");
console.log(a == b); //Operador de igualdad 'Compara es si el dato es igual' (verdadero)
console.warn("Identico");
console.log(a === b); //Operador de identico 'Compara si el dato y el tipo de dato es igual e identico' (false)
console.warn("NO Igualdad");
console.log(a != b); // Operador de No igual 'Compara si el valor de los dos datos no son igual' (false)
console.warn("No Identico");
console.log(a !== b); // Operador de No identico 'Compara si el valor y el tipo de datos no son identicos uno de lostros si los datos son igula compara los tipo de datos'( verdadero)