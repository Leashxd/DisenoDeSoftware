//Objetos
//Objeto de propiedad persona que tiene los valores nombre,apellido, edad.
//Ojo evitar caracteres con tildes blablabla
const persona = {
    //llave nombre con apunte al valor, nombre
    //es similar al json para temas practicos
    nombre: 'Tony',
    apellido: 'Stark',
    edad : 45,
    direccion: {
        ciudad:'New York',
        zip: 12313,
        lat: 14.21123,
        lng:34.1312
    }
};

// ahora si quiero crear una segunda persona a partir de la primera
const persona2  = persona;
persona2.nombre= 'Peter';



//no podemos crear una persona 2 asi dado que modificamos persona1 ya que los valores se pasan por direcion y no por referencia

//si realmente quiero utilizar un valor por referencia

const persona3 = { ...persona };
persona3.nombre='Caca';

//con los tres puntos copiamos el objeto y creamos una nueva direccion de memoria a la cual acudir
//esta direccion es unica de persona 2, so e; nombre de persona2 sera caca y no peter


//si lo queremos ver como tabla podemos utilizar
// console.table(persona);
console.log( {persona} );