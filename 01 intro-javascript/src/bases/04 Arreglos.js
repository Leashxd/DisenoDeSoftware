//arreglos en js

//identificamos a los arreglos en el console.log pq se imprimen con []
//el valor dentro de Array es el espacio que creamos para el arreglo

const arreglo = new Array();
//si queremos agregar posiciones al arreglo agregamos la siguiente linea

arreglo.push(1)

//Ahora bien tambien podemos utilizar los arreglos como

const arreglo1 = [1,2,3,4];
let arreglo2 = [...arreglo1,5];


//map crea un nuevo arreglo, ahora si lo creamos bajo la funcion creamos una regla
const arreglo3 = arreglo2.map( function(numero){
    return numero *3;
});


console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);