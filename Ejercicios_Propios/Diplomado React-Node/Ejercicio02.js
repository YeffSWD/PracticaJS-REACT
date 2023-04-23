let EdadHumana = -4;
let Nombre = 'Yefri';
let EdadCanina;

if (EdadHumana > 0) {
    if (EdadHumana >= 2) {
        EdadCanina = 10.5 + ((EdadHumana - 2) * 4);
    } else {
        EdadCanina = EdadHumana * (10.5 / 2);
    }
    console.log(`Hola soy ${Nombre}, tengo ${EdadHumana} años humanos, lo cual es igual a ${EdadCanina} años perro`)
} else {
    console.log('No se permiten edades menores que 0');
}