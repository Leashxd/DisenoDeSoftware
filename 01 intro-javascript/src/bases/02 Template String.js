// Variables y constantes

const nombre = 'Joaquin';
const apellido = 'Leal';

let valor = 5;

const nombrecompleto = ` ${nombre} ${apellido}`;

function getSaludo(nombre){
    return `Hola `+ nombre;
}

console.log(`Esto es un texto: ${ getSaludo(nombre) }`);