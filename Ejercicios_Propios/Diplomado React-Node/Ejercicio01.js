let GradosKelvin = 358;
let GradosFahrenheit;
let GradosCelsios;

GradosCelsios = GradosKelvin - 273;
GradosFahrenheit = Math.round((GradosCelsios * ( 9 / 5 )) + 35);

console.log('Los grados Celsios son:' + GradosCelsios);
console.log('Los grados Fahrenheit son:' + GradosFahrenheit);