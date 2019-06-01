const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}
const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraes = {
    nombre
}
const promedioE = {
    nombre
   
}

// const actualiza = {
//     nombre,
//     asignaturas: {
//         demand: true,
//         alias: 'a'
//     },
//     calificacion: {
//         demand: true,
//         alias: 'c'
//     }
// }

// const elimina = {
//     nombre
// }

const argv = require('yargs')
    .command('crear', 'crear un estudiante en mi BD', creacion)
    .command('mostrar', 'Muestra los estudiantes y sus notas')//muestra todos los objetos dentro de la lista.Json
    .command('mostrarest', 'Muestra los nombres de estudiantes',  muestraes)//buscar un objeto dentro de la lista.JSon
    .command('promedioE', 'Muestra El promedio de estudiantes',  promedioE)
    .command('mostrarAlto, muestra los estudiantes con promedio Alto')
    // .command('mostrarmat', 'Muestra los nombres de estudiantes',  matematicas)
    .argv;

module.exports = {
    argv
};

// [{"nombre":"maria","matematicas":2,"ingles":2,"programacion":2},{"nombre":"Maria","matematicas":2,"ingles":2,"programacion":2},{"nombre":"pedro","matematicas":3,"ingles":1,"programacion":2},{"nombre":"Sain","matematicas":4,"ingles":3,"programacion":5},{"nombre":"alejo","matematicas":2,"ingles":5,"programacion":5},{"nombre":"Mario","matematicas":4,"ingles":3,"programacion":5}]