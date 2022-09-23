//import export y funciones comunes de arreglos
import {heroes} from '../data/heroes'

console.log(heroes) //se imprime en consola los  heroes.js 


export const getHeroeById = (Id) => {
    return heroes.find( heroe => heroe.id === Id);
    //find recibe una funcion de argumeno que se ejecuta como un callback
    //es decir que funciona por iteraciones al igual que un for, donde estamos buscando el valor
    //que le otorgamos
}

console.log( getHeroeById(2) );


 export  const getHeroebyOwner = (Owner) => {
    return heroes.filter( heroe => heroe.owner === Owner);

    //Filter es similar al find, solo que devuelve todos los valores que contienen la regla
}


//Ahora bien, diferencia entre FIND y FILTER
//FIND solamente devuelve el primer caso que cumple la condicion
//FILTER devuelve todos los casos que cumplen con la condicion
//OJO QUE FILTER ES CASE SENSITIVE 
console.log(getHeroebyOwner('DC'));
