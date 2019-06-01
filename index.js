

// const {obtenerPromedio, argv} = require ('./datos.js');
// const express = require('express')
// const app = express()

// console.log('argv');
// if (argv._[0]== 'promedio') {
// 	texto=('El promedio de ' + argv.n + ' es '+ obtenerPromedio(argv.m, argv.i, argv.p));

// }else{
// 	console.log(' promedio no calculado');

// }

// app.get('/', function (req, res) {
//   res.send(texto)
// })

// app.listen(3000)

const { argv } = require('./yargs')

const funciones = require('./funciones')


let comando = argv._[0];

switch (comando) {
    case 'crear':
        funciones.crear(argv);
        break
    case 'mostrar':
        funciones.mostrar();
        break
    case 'mostrarest':
        funciones.mostrarest(argv.nombre);
        break
    case 'mostrarmat':
        funciones.mostrarmat();
        break
    case 'promedioE':
        funciones.promedioE(argv.nombre);
        break
    case 'mostrarAlto':
        funciones. mostrarAlto();
        break
    default:
        console.log(`No ingresó una función existente`);

       
}


// if (argv._[0]=='crear'){
//     funciones.crear(argv)
//  }