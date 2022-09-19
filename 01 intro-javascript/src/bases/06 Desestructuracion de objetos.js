// desestructuracion de objetos
// asignacion desestructurante



const persona = { 
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log(`Tedioso`,persona.nombre);
console.log(`Tedioso`,persona.edad);
console.log(`Tedioso`,persona.clave);

//Esta forma es enormemente tediosa, no nos sirve. asi pues utilizaremos otra forma


const {nombre, edad, clave} = persona; 
console.log(`Forma GOOD`,nombre);
console.log(`Forma GOOD`,nombre);
console.log(`Forma GOOD`,edad);
console.log(`Forma GOOD`,clave);


//desestructuracion, le ingresamos persona y de ello obtenemos
const retornaPersona = ({nombre,edad,rango='Capitan'}) => { 
    console.log(`Desestructuracion `, nombre, edad,rango);
}

retornaPersona(persona);