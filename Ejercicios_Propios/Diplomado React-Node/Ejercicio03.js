let NumeroAleatorio = Math.round(Math.random() * 20);
let PreguntaUsuario = '';
let Nombre = '';
let Suerte;

console.log('********** BIENVENIDO A LA BOLA MAGICA **********')
Nombre = prompt('Please tell me your name', '');

while (PreguntaUsuario == '') {
    PreguntaUsuario = prompt('Write your question?', '');
}

switch (NumeroAleatorio) {
    case 0:
        Suerte = 'Try Again.';
        break;
    case 1:
        Suerte = 'It is certain.';
        break;
    case 2:
        Suerte = 'It is decidedly so.';
        break;
    case 3:
        Suerte = 'Without a doubt.';
        break;
    case 4:
        Suerte = 'Yes definitely.';
        break;
    case 5:
        Suerte = 'You may rely on it.';
        break;
    case 6:
        Suerte = 'As I see it, yes.';
        break;
    case 7:
        Suerte = 'Most likely.';
        break;
    case 8:
        Suerte = 'Outlook good.';
        break;
    case 9:
        Suerte = 'Yes.';
        break;
    case 10:
        Suerte = 'Signs point to yes.';
        break;
    case 11:
        Suerte = 'Reply hazy, try again.';
        break;
    case 12:
        Suerte = 'Ask again later.';
        break;
    case 13:
        Suerte = 'Better not tell you now.';
        break;
    case 14:
        Suerte = 'Cannot predict now.';
        break;
    case 15:
        Suerte = 'Concentrate and ask again.';
        break;
    case 16:
        Suerte = 'Don\'t count on it.';
        break;
    case 17:
        Suerte = 'My reply is no.';
        break;
    case 18:
        Suerte = 'My sources say no.';
        break;
    case 19:
        Suerte = 'Outlook not so good.';
        break;
    case 20:
        Suerte = 'Very doubtful';
        break;

    default:
        Suerte = 'Index out of bounce';
        break;
}

if (Nombre != '') {
    console.log(`Hello ${Nombre}, let\'s guess your fortune`);
} else {
    console.log('Hello, let\'s guess your fortune');
}

if (NumeroAleatorio == 0 || (NumeroAleatorio >= 11 && NumeroAleatorio <= 15)) {
    console.log(Suerte);
} else if (NumeroAleatorio >= 1 && NumeroAleatorio <= 10) {
    console.log(`Lucky you, ${Suerte}`);
} else if (NumeroAleatorio >= 16 && NumeroAleatorio <= 20) {
    console.log(`Sorry, ${Suerte}`);
} else {
    console.log('Index out of bounce.');
}