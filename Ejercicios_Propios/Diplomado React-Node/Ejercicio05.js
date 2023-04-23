// Inciso #1
let Niveles = 7;
let Text = ''

if (Niveles >= 3) {
    for (let i = 1; i <= Niveles; i++) {
        Text = ' '.repeat(Niveles - i);
        for (let j = 1; j <= i; j++) {
            Text += '# ';
        }
        console.log(Text);
    }
} else {
    console.log('Lo siento, no imprimo triángulos menores a 3 niveles');
}

// Inciso #2
for (let i = 1; i <= 100; i++) {
    if (((i % 3) == 0) && ((i % 5) != 0)) {
        console.log(`${i} - Fizz`)
    } else if (((i % 5) == 0) && ((i % 3) != 0)) {
        console.log(`${i} - Buzz`)
    } else if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log(`${i} - FizzBuzz`)
    }
}