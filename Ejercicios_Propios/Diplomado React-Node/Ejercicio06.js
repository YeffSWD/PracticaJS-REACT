// Inciso #1
let ArrayInicial = [2, 5, 6, 1, 7, 8, 9, 10];
let ArrayFinal = ArrayInicial.sort((a, b) => a - b).slice(1);

console.log(ArrayInicial);
console.log(ArrayFinal);

// Inciso #2
function range(inicio, fin) {
    let newArray = []
    if (fin > inicio) {
        for (i = inicio; i <= fin; i++) {
            newArray.push(i);
        }
        return newArray;
    } else if (inicio == fin) {
        newArray.push(inicio)
        return newArray;
    }
    console.log('El fin no puede ser menor que el principio');
    return newArray;
}
console.log(range(1, 5));

// Inciso #3
function sum(Arreglo) {
    let Total = 0;
    for (element in Arreglo) {
        Total += Arreglo[element];
    }
    return Total;
}
console.log(sum(ArrayInicial));

// Inciso #4

function range2(inicio, fin, step = 1) {
    let newArray = []
    if (fin > inicio) {
        if (step > 1) {
            for (i = inicio; i <= fin; i += step) {
                newArray.push(i);
            }
        } else {
            console.log('El step no puede ser menor que 1');
        }
        return newArray;
    } else if (inicio == fin) {
        newArray.push(inicio)
        return newArray;
    }
    console.log('El fin no puede ser menor que el principio');
    return newArray;
}
console.log(range2(1, 5, 2));