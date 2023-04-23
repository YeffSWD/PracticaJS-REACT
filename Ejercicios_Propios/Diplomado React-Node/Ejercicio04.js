let NumeroAleatorio = Math.round(Math.random() * 2);
let SeleccionUsuario = -1;
let SeleccionUsuarioTexto;
let SeleccionAleatoriaTexto;

console.log('*********** Bienvenido al piedra, papel o tijeras ***********');
console.log('Reglas generales:');
console.log('* Solo puedes ingresar valores entre 0 y 2 siendo:');
console.log('** 0 igual a piedra');
console.log('** 1 igual a papel');
console.log('** 2 igual a tijera');

while (SeleccionUsuario < 0 || SeleccionUsuario > 2) {
    SeleccionUsuario = prompt("Ingresa tu eleccion");
}

if (SeleccionUsuario == '0') {
    SeleccionUsuarioTexto = 'Piedra';
} else if (SeleccionUsuario == '1') {
    SeleccionUsuarioTexto = 'Papel';
} else {
    SeleccionUsuarioTexto = 'Tijera';
}

if (NumeroAleatorio == 0) {
    SeleccionAleatoriaTexto = 'Piedra';
} else if (NumeroAleatorio == 1) {
    SeleccionAleatoriaTexto = 'Papel';
} else {
    SeleccionAleatoriaTexto = 'Tijera';
}

console.log(`La seleccion del usuario fue: ${SeleccionUsuarioTexto} y la de la maquina fue: ${SeleccionAleatoriaTexto}`);
if (SeleccionUsuario == NumeroAleatorio) {
    console.log('Es un empate!!!')
} else {
    switch (SeleccionUsuario) {
        case '0':
            if (NumeroAleatorio == 1) {
                console.log('El Usuario Pierde!!!');
            } else {
                console.log('El Usuario Gana!!!');
            }
            break;
        case '1':
            if (NumeroAleatorio == 2) {
                console.log('El Usuario Pierde!!!');
            } else {
                console.log('El Usuario Gana!!!');
            }
            break;
        case '2':
            if (NumeroAleatorio == 0) {
                console.log('El Usuario Pierde!!!');
            } else {
                console.log('El Usuario Gana!!!');
            }
            break;

        default:
            console.log('Index out of bounce.');
            break;
    }
}

console.log(NumeroAleatorio);