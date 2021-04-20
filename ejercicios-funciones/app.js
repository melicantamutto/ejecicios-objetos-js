// Objetos 001

//     Declarar la variable holaMundo y asignarle un objeto con las siguiente propiedades:
//         mostrarMensaje: una función que muestra en consola el mensaje '¡Hola mundo!'
//         obtenerMensaje: una función que retorna un string con el mensaje "¡Alo mundo!"

// escribi aca tu solucion

// const holaMundo = {
//     mostrarMensaje : () =>{
//         console.log('¡Hola Mundo!');
//     },
//     obtenerMensaje: () =>{
//         return '¡Alo mundo!'
//     }
// }

// holaMundo.mostrarMensaje(); // ¡Hola mundo!
// console.log(holaMundo.obtenerMensaje()); // ¡Alo mundo!

// Objetos 002

//     Tenemos una variable pelicula, con propiedades que guardan información sobre una película
//     Necesitamos agregar un método/función mostrarInfo que muestre por consola el mensaje: "Película: [NOMBRE PELI] - Año: [AÑO PELI]"

// const pelicula = {
//   titulo: "The Dark Knight",
//   anio: 2008,
//   director: "Christopher Nolan",
//   mostrarInfo : () =>{
//       console.log(`Pelicula: ${pelicula.titulo} - Año: ${pelicula.anio}`);
//   }
// };



// pelicula.mostrarInfo();
// Película: The Dark Knight - Año: 2008

// Objetos 003

//     Tenemos una variable playlist, con información sobre una playlist de spotify
//     El objeto tiene una propiedad songs que es un array vacío
//     Al objeto vamos a agregarle un método que se llame addSong
//         Este método va a recibir un string como parámetro (el nombre de una canción) y va a agregarlo en la propiedad songs del objeto.
//     Después de crear la función, agregá las siguientes 3 canciones utilizando playlist.addSong: 'Geronimo', 'Sissy That Walk', 'Cover Girl'

// TODO: agregar en el objeto el método addSong, que recibe como parámetro el nombre de una canción a agregar en el array songs
// const playlist = {
//   name: "Rupaul Lipsyncs",
//   owner: "Ada",
//   followers: 8743,
//   songs: [],
//   addSongs: (song) =>{
//     playlist.songs.push(song);
//   }
// };

// TODO: utilizando el método que creamos antes, agrega las siguientes tres canciones utilizando el método playlist.addSong
// playlist.addSongs('Geronimo')
// playlist.addSongs('Sissy That Walk')
// playlist.addSongs('Cover Girl')
// 'Geronimo'
// 'Sissy That Walk'
// 'Cover Girl'

// console.log(playlist.songs); // [ 'Geronimo', 'Sissy That Walk', 'Cover Girl' ]

// Objetos 004

//     Tenemos una variable user, con información sobre una persona (firstName, lastName, age)
//     Al objeto vamos a agregarle un método que se llame getFullname, que no tiene parámetros y tiene que retornar un string con el firstName y lastName concatenadas, separados por un espacio.

// TODO: agregar en el objeto el método getFullname, que tiene que retornar el nombre completo de la persona

// const user = {
//   firstName: "Hedy",
//   lastName: "Lamarr",
//   age: 30,
//   getFullname: () =>{
//       return `${user.firstName} ${user.lastName}`
//   }
// };


// console.log(user.getFullname()); // Hedy Lamarr

// Objetos 005

//     Tenemos la misma variable user del ejercicio anterior, con información sobre una persona, pero con una diferencia en la estructura.
//     Al objeto vamos a agregarle un método que se llame getFullname, que no tiene parámetros y tiene que retornar un string con el nombre completo de la persona

// TODO: agregar en el objeto el método getFullname, que tiene que retornar el nombre completo de la persona
// var user = {
//   name: {
//     first: "Hedy",
//     last: "Lamarr",
//   },
//   age: 30,
//   getFullname: () =>{
//     return `${user.name.first} ${user.name.last}`
//   }
// };

// console.log(user.getFullname()); // Hedy Lamarr

// Objetos 006 - carrito parte 1

//     Tenemos un objeto shoppingCart, que guarda datos de un carrito de compras en una tienda virtual
//         Tiene dos propiedades: owner (un objeto con los datos de la persona que está haciendo la compra) y products (un array de objetos, con todos los productos que está por comprar)
//     Los objetos de los productos tienen 4 propiedades: id (un número), title (string, el nombre del producto), price (un número, el precio del producto) y freeShipping (un booleano que indica si el producto tiene o no cargos por envio)
//     Agregar al objeto shoppingCart un método addProduct que nos permita agregar objetos de productos al array products.
//     También necesitamos agregar un método getTotal que sume el precio de todos los productos que tenemos en el array products y nos devuelva el precio final total.
//     Crear los siguientes productos y agregarlos al carrito:

// 1,At vero elitr,320,true
// 2,Dolore ipsum est eos,230,false
// 3,Lorem sadipscing tempor,120.50,true
// 4,Duo invidunt accusam,510,false
// 5,Labore accusam eirmod.,125.99,true

// Ejemplo del formato de cada objeto del producto: 0,Mouse Genius,150,false
const mouse = {
  id: 23,
  title: "Mouse Logitech G305",
  price: 3980,
  freeShipping: false,
};
const auriculares = {
  id: 60,
  title: "Logitech G533",
  price: 11300,
  freeShipping: true,
};
const teclado = {
  id: 15,
  title: "Teclado Redragon Yama White",
  price: 9200,
  freeShipping: false,
};
const microfono = {
  id: 118,
  title: "HyperX Quadcast",
  price: 16390,
  freeShipping: true,
};

// objeto que guarda la información que quien hace la compra y que productos agregó al carrito
const shoppingCart = {
  owner: {
    id: 123,
    name: "Ada Lovelace",
  },
  products: [],
  addProduct : (product) =>{
    shoppingCart.products.push(product);
  },
  getTotal : () =>{
      let total =0;
      for (let i = 0; i < shoppingCart.products.length; i++) {
        total += Number(shoppingCart.products[i].price);
      }
      return total;
  }
};

shoppingCart.addProduct(mouse);
shoppingCart.addProduct(teclado);
shoppingCart.addProduct(auriculares);
shoppingCart.addProduct(microfono);
shoppingCart.addProduct(auriculares);

console.log('primero' + ' ' + shoppingCart.getTotal()); // 1306.49

// **Objetos 007 - carrito parte 2 **

//     Copiar y pegar el código de la solución al ejercicio anterior
//     Debido a un cambio de requerimiento, el precio final total se calcula distinto
//     Si un producto no tiene free shipping (freeShipping es false) entonces al precio del producto hay que sumarle 120
//     Si tiene free shipping (freeShipping es true) entonces se toma el precio que está en el objeto y no se le suma nada
//     Una vez calculado el total, hay que agregar un 21% de IVA

shoppingCart.getTotal = () =>{
  let total =0;
  for (let i = 0; i < shoppingCart.products.length; i++) {
    total += Number(shoppingCart.products[i].price);
    if(!shoppingCart.products[i].freeShipping){
      total += 120;
    }
  }
  return total + total * 0.21;
}

console.log('segundo' + ' ' + shoppingCart.getTotal()); // 1871.2529

// Objetos 008 - carrito parte 3

//     Crear un documento con el nombre obj_031.js
//     Copiar y pegar el código de la solución al ejercicio obj_030
//     Ahora tenemos que agregarle un método a shoppingCart que se llame render para mostrar el listado de productos a comprar con su precio y al final de todo el precio final total

// COPIAR Y PEGAR LA SOLUCION EL EJERCICIO 030

shoppingCart.render = () =>{
  const div = `<div class="card m-5">
 <h1>Listado de productos:</h1>
 <ul class="card-body" id="container">
 </ul>
</div>`
  document.body.insertAdjacentHTML('beforeend', div)
  const container = document.getElementById('container')
  shoppingCart.products.forEach(product => {
    let newLi = `<li>${product.title} - $${product.price}</li>`
    container.insertAdjacentHTML('beforeend', newLi)
  });
  const total = `<br><p>Total con IVA: $${shoppingCart.getTotal()}</p>`;
  container.insertAdjacentHTML('beforeend', total)
}


shoppingCart.render();
// /**** RESULTADO ESPERADO ****/

// Listado de productos:
// At vero elitr - $320
// Dolore ipsum est eos - $250
// Lorem sadipscing tempor - $120.5
// Duo invidunt accusam - $530
// Labore accusam eirmod. - $125.99
// Total con IVA: $1629.2529