export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


export const owners = ['DC','Marvel'];
//Si queremos exportar algo que se repite, en index.js debemos llamarlo asi
// import heroes , {owners} from 'direccion'

//asi pues {owners pertenece al arreglo aparte.}


//Otra forma de exportar mas de un artributo a la vez


/* 

export {
    heroes as default,
    owners
} 

*/

//existen mil maneras de exportar, asi pues no nos enredemos