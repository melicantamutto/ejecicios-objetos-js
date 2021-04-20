// 01 - persona

//     Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
//     Declarar una variable con el nombre propiedadEdad y asignar el valor edad
//     Crear un objeto persona con las propiedades nombre y edad
//     Asignar a las propiedades del objeto persona tu nombre y edad
//     Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
//     Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad

// const persona = {
//     nombre : 'Melina',
//     edad: '23',
// }
// const propiedadNombre = persona.nombre;
// const propiedadEdad = persona.edad;

// console.log(persona['nombre']);
// console.log(persona['edad']);
// console.log(propiedadNombre);
// console.log(propiedadEdad);



// 02 - keys

//     Partiendo de un objeto guardado en la variable producto
//     Mostrar en la consola el nombre de todas las propiedades que tiene el producto
//     Utilizar el método keys

// const producto = {
//   id: 'ADA-020',
//   title: 'Gubergren sed est amet voluptua',
//   price: 123.75,
//   picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
//   condition: 'nuevo',
//   free_shipping: true,
//   location: 'Capital Federal'
// };

// completá acá el código

// var todasLasPropiedades = Object.keys(producto);

// console.log(todasLasPropiedades);
// resultado esperado
// [ 'id',
//   'title',
//   'price',
//   'picture',
//   'condition',
//   'free_shipping',
//   'location' ]

// 03 - producto

//     Partiendo de un objeto guardado en la variable producto
//     Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
//     Utilizar el método keys
//     El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"

// const producto = {
//   id: "ADA-020",
//   title: "Gubergren sed est amet voluptua",
//   price: 123.75,
//   picture:
//     "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
//   condition: "nuevo",
//   free_shipping: true,
//   location: "Capital Federal",
// };

// // completá acá el código

// const mostrarObjeto = () =>{
//     let array = Object.keys(producto);
//     for (let i = 0; i < array.length; i++) {
//         console.log(`producto[${array[i]}] --->  ${producto[`${array[i]}`]}`)
//     }
// }


// console.log(mostrarObjeto())

// ///
// RESULTADO ESPERADO
// producto['id'] -> ADA-020
// producto['title'] -> Gubergren sed est amet voluptua
// producto['price'] -> 123.75
// producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// producto['condition'] -> nuevo
// producto['free_shipping'] -> true
// producto['location'] -> Capital Federal

// 04 - email

//     Partiendo de un objeto guardado en la variable user
//     Verificar si tiene la propiedad email
//         Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
//         Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

// const user = {
//   username: "ada_lovelace",
//   password: "1234567890!",
// };

// acá tu solucion

// const mostrarMail = () =>{
//   if(user.email){
//     console.log('El usuario tiene la propiedad email');
//   } else{
//     console.log('El usuario no tiene la propiedad email');
//   }
// }

// mostrarMail()


// 05 - propiedad

//     Completa el código dentro de la función hasProperty
//         Si el objeto de la variable object tiene la propiedad que recibe en la variable property, retorna true
//         Sino retorna false

// const hasProperty = (object, property) => {
//   if(typeof object[property] === "string"){
//     return true
//   } else{
//     return false
//   }
// };

// const user = {
//   username: "ada_lovelace",
//   password: "1234567890!",
// };

// const user2 = {
//   username: "grace_hopper",
//   password: "1234567890!",
//   email: "grace@hopper.com",
// };

// console.log(hasProperty(user, "email")); // false
// console.log(hasProperty(user, "password")); // true
// console.log(hasProperty(user, "id")); // false

// console.log(hasProperty(user2, "email")); // true
// console.log(hasProperty(user2, "password")); // true
// console.log(hasProperty(user2, "id")); // false