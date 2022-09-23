//Promesas
import heores from './data/heroes'
import { getHeroeById,getHeroebyOwner } from './bases/08 Import Export ';
// Resolve, se ejecuta cuando la promesa se cumple
//reject se ejecuta cuando la promesa falla.
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () =>{
        const heroe = getHeroeById(1);
        resolve (heroe);
        //en caso de error
        reject('No se pudo encontrar el heroe');
        //el resolve otorga el argumento dentro de este al then
        
    }, 2000 )
    //settime out, funcion propia de javascript que permite ejecutar cosas en un tiempo determinado
});



promesa.then( ( argumento ) => 
    console.log('Then de la promesa', argumento)
).catch(err => console.warn(err));
//el catch agarra el error y lo coloca 
//then promesa, se hizo correctamente
//catch dio un error, para manejar la exepcion
//finally, lo ultimo que se ejcuta





////////////////////////////



const getHeroeByIdAsync = ( id ) => {

    const promesa = new Promise ((resolve, reject) => {

        setTimeout( () => {
            const personaje = getHeroeById(id);
            if (personaje) {
                resolve(personaje);
            } else {
                reject('No se pudo encontrar el heroe')
            }

        },2000)
        
    });
    return promesa;
}

getHeroeByIdAsync(2)
.then( (argumento) => console.log('Async Heroe', argumento) )
.catch( err => console.warn(err))
