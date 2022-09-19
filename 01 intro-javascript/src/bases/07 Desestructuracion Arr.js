// desestructuracion de arreglos

const personajes = ['Goku','Vegeta','Trunks'];
//desestructuracion de un arreglo
const [,,p3] = personajes;

console.log(p3)



const retornaArreglo = () => {
    return['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);



const useState = ( valor ) => {
    return [ valor, () => { console.log('hola'); } ];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();
//console.log(nombre);