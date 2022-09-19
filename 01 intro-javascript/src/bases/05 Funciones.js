//funciones en JS

//una funcion común y corriente sin embargo es facil caer en errores

function saludar( nombre ){
    return `Hola, ${ nombre }`
}
//claramente puedo utilizar una variable con el mismo nombre de la funcion y me nos morimos, asi que
//mejor utilizar funciones de flecha


const saludar2 = ( nombre ) =>{
    return `Hola, ${ nombre }`
}

//la ventaja de estas funciones es que podemos simplificarlas de la siguiente manera
const saludar3 = ( nombre ) => `Hola, ${ nombre }`

//o simplificarla aun mas con
const saludar4 = ( nombre ) => `Hola, es una funcion de flecha ni tan simplificada`


console.log( saludar2('√Funcion de flecha No simplificada'));
console.log( saludar3('Funcion de flecha simplificada'));
console.log( saludar4() );



//ahora esto se usar dms en react

const getUser = () => {
    return {
        uid:'ABC123',
        username:'Papichulo'
    }
}

//imprimimos
const user = getUser();
console.log(`Hola esto es una funcion con return}`, user);


//tenemos una funcion de flecha con un unico return por lo que podriamos utilizar una funcion de flecha
//mas simplificada

//Podemos hacerlo con 2 llaves
//objeto implicito
const getUser1 = () => ({
        uid:'ABC123',
        username:'Papichulo1'
    });

 
const user1 = getUser1();
console.log(`Hola esto es una funcion sin return, una funcion implicita `,user1);

const getUsuarioActivo = ( nombre ) => ({
    uid:'ABC123',
    username:nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

