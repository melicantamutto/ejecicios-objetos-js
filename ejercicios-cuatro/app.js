// Nombre completo

//     Tenemos una variable persona, con la información de perfil de una persona en GMail
//     Necesitamos crear una función obtenerNombreCompleto que reciba un objeto por parámetro (con las mismas propiedades que el objeto que tenemos guardado en persona) y nos devuelva un string con el nombre completo (nombre + apellido)

// const persona = {
//   nombre: 'Grace',
//   apellido: 'Hopper',
//   email: 'grace.hopper@gmail.com',
//   plan: 'premium'
// };

// CODEA ACA LA SOLUCION

// const obtenerNombreCompleto = (obj) =>{
//   console.log(`${obj['nombre']} ${obj['apellido']}`)
// }

// obtenerNombreCompleto(persona); // Grace Hopper

// Estado alumnxs

//     Estamos diseñando un nuevo sistema para una facultad, y tenemos la información de las materias para cada alumnx en objetos donde cada propiedad es una materia que contiene un array con las notas de los resultados de los parciales

// const materiasAda = {
//   matematica: [10, 6, 10, 8],
//   algoritmos: [10, 10, 9],
//   algebra: [7, 9],
// };

// const materiasGrace = {
//   matematica: [2, 9, 10, 7],
//   algoritmos: [7, 1, 9],
//   algebra: [2, 3],
// };

//     Nos pidieron generar un informa que muestre las materias aprobadas (promedio de notas >= 4) y desaprobadas (promedio de notas < 4)
//     Para implementar este reporte, vamos a tener que desarrollar una función que tome como parámetro de entrada un objeto con las materias y sus notas, y nos retorne un objeto con dos propiedades: aprobadas y desaprobadas
//     Cada propiedad es un array que contiene el nombre de las materias que aprobaron o desaprobaron respectivamente

// const agruparMateriasPorEstado = (materias) => {
//   let reporte = {
//     aprobadas: [],
//     desaprobadas: [],
//   };
//   for (let key in materias) {
//     let promedio =0;;
//     for (let i = 0; i < materias[key].length; i++) {
//       promedio += materias[key][i];
//     }
//     promedio = promedio / materias[key].length;
//     if (promedio >= 4) {
//       reporte.aprobadas.push(key);
//     } else {
//       reporte.desaprobadas.push(key);
//     }
//   }
//   return reporte
// };

// console.log(agruparMateriasPorEstado(materiasAda));
// {
//   aprobadas: ['matematica', 'algoritmos', 'algebra'],
//   desaprobados: []
// }

// console.log(agruparMateriasPorEstado(materiasGrace));
// // {
// //   aprobadas: ['matematica', 'algoritmos'],
// //   desaprobados: ['algebra]
// // }

// Validar contraseña

//     Tenemos los datos de distintas personas que quieren crear un user dentro de GMail
//     Todos los datos se guardan como objetos con las propiedades: nombre, apellido, email y password
//     Nos pidieron implementar una función, llamada validarPassword, que recibe estos objetos y valide la contraseña
//     La función nos tiene qu retornar un objeto con dos propiedades: verificada (un boolean que es true cuando la contraseña pasa las validaciones, o false en caso contrario) y mensaje (un string que contiene el mensaje de la validación que falló, o vacío si salió todo bien)
//     De la contraseña tenemos que validar:
//         Que la longitud sea mayor o igual a 6 (si es menor, retornar el mensaje "Contraseña con menos de 6 caracteres")
//         Que la contraseña no sea una de: "123456", "password", "111111", "qwerty" (si coincide con alguna de esas contraseñas, retornar el mensaje "Contraseña muy insegura")

// const user1 = {
//   nombre: 'Grace',
//   apellido: 'Hopper',
//   email: 'grace.hopper@gmail.com',
//   password: '123456'
// };

// const user2 = {
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   password: '**178!Ada--'
// };

// const user3 = {
//   nombre: 'Hedy',
//   apellido: 'Lamarr',
//   email: 'hlamarr@gmail.com',
//   password: '1234'
// };

// CODEA ACA LA SOLUCION

// const validarPassword = (user) =>{
//   if(user.password.length >= 6){
//     if(user.password === '123456' || user.password === 'querty' || user.password === '111111'){
//       user.verificada = false;
//       console.log("Contraseña muy insegura");
//     } else{
//       console.log("Contraseña verificada");
//       user.verificada = true;
//     }
//   } else{
//       user.verificada = false;
//     console.log("Contraseña con menos de 6 caracteres");
//   }
// }

// // casos de prueba
// validarPassword(user1); // { verificada: false, mensaje: 'Contraseña muy insegura' }
// validarPassword(user2); // { verificada: true, mensaje: '' }
// validarPassword(user3); // { verificada: false, mensaje: 'Contraseña con menos de 6 caracteres' }

// Render álbum

//     Todos los discos en Spotify, se guardan como objetos que tienen las propiedades: id (string), nombre (string), anio (número), genero (array de strings), banda (string), portada (string) e info (string)
//     En este ejemplo, tenemos una variable album, con la información de un disco de Nirvana
//     Necesitamos crear una función render que reciba un objeto por parámetro (con las mismas propiedades que el objeto que tenemos guardado en album)
//     La función nos tiene que devolver el HTML que deberíamos agregar en nuestra web
//     El HTML con el que representamos un disco es:

// <div class="card m-5" id="nirv1234">
//   <img class="card-img-top" src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg" alt="Nirvana - With The Lights Out" />
//   <div class="card-body">
//     <h5 class="card-title">Nirvana</h5>
//     <p class="card-text">With The Lights Out (2004) | Grunge</p>
//     <a href="https://en.wikipedia.org/wiki/With_the_Lights_Out" class="btn btn-primary">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>
//   </div>
// </div>

//     La variable album que tenemos en nuestra aplicación, ahora, es:

// const album = {
//   id: 'nirv1234',
//   nombre: 'With The Lights Out',
//   anio: 2004,
//   genero: 'Grunge',
//   banda: 'Nirvana',
//   portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
//   info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
// };

// // CODEA ACA LA SOLUCION


// const render = (album) =>{
//   let div =`<div class="card m-5" id="${album.id}">
//   <img class="card-img-top" src="
//   ${album.portada}" alt="${album.banda} - ${album.nombre}" />
//   <div class="card-body">
//     <h5 class="card-title">${album.banda}</h5>
//     <p class="card-text">${album.nombre} (${album.anio}) | ${album.genero}</p>
//     <a href="${album.info}" class="btn btn-primary">${album.info}</a>
//   </div>
// </div>`  
//   document.body.insertAdjacentHTML('beforeend' , div)
// }


// render(album);

// // <div class="card m-5" id="nirv1234">
// //   <img class="card-img-top" src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg" alt="Nirvana - With The Lights Out" />
// //   <div class="card-body">
// //     <h5 class="card-title">Nirvana</h5>
// //     <p class="card-text">With The Lights Out (2004) | Grunge</p>
// //     <a href="https://en.wikipedia.org/wiki/With_the_Lights_Out" class="btn btn-primary">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>
// //   </div>
// // </div>

//     bulb Pista: para armar el HTML podés utilizar interpolación de strings, por ejemplo:

// const producto = {
//   nombre: 'Notebook',
//   precio: 123
// }

// const html = `
//   <div class="producto">
//     <p>${producto.nombre}</p>
//     <small>ARS ${producto.precio}</small>
//   </div>
// `;


// Volumen de caja

//     Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.

// const size = { width: 2, length: 5, height: 1 };

// const getBoxVolume = (volume) =>{
//   return volume.width * volume.length * volume.height
// }

// console.log(getBoxVolume(size)); // returns 10

// Redondeo

//     Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round)

// const round = (number) =>{
//   let obj={
//     floor : Math.floor(number),
//     ceil : Math.ceil(number),
//     round : Math.round(number)
//   };
//   console.log(obj);
// }

// round(13.3); //  returns { floor: 13, ceil: 14, round: 13 }

// Comprar productos

//     Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino
//     (Pista) deberia recorrer todo el objeto que nos pasan por parametro
//     (Pista) deberia usar un acumulador o clonar products,que guarde true o false segun corresponda
//     (Pista) deberia validar y guardar que el producto sea menor a dinero ingresado

// const buyProducts = (money, products) =>{
//   let result = {...products}
//   for (const key in products) {
//     if(products[key] <= money){
//       result[key] = true;
//     }else{
//       result[key] = false;
//     }
//   }
//   console.log(result);
// }

// const products = { cookies: 60, chocolate: 110, soda: 120 };
// const money = 115;
// buyProducts(money, products); // returns { cookies: true, chocolate: true, soda: false}

// Comprar lista de productos

//     Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, true si puede comprarlos a todos o false si no
//     (Pista) deberia recorrer todo el objeto que nos pasan por parametro
//     (Pista) deberia sumar el precio de todos los items
//     (Pista) deberia validar el total es menor a dinero ingresado

// const canBuyAllProduct = (money, products) =>{
//   let total=0;
//   for (const key in products) {
//     total += products[key];
//   }
//   if(money >= total){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }


// const products = { cookies: 60, chocolate: 110, soda: 120 };
// const money = 300;
// canBuyAllProduct(money, products); // returns true

// Obtener experiencia

//     Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida
//     (Pista) deberia recorrer todo uno de los objeto que nos pasan por parametro,haciendo refencia al indice(EASE,MEDIUM,HARD)
//     (Pista) deberia crear un acumulador para sumar los puntajes parciales
//     (Pista) deberia tomar los valores de ambos objetos con el mismo indice y multiplicarlo

// const getXP = (challenges, score) =>{
//   let total = 0;
//   for (const key in challenges) {
//     total += challenges[key] * score[key]
      
//   }
//   console.log(total);
// }

// const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
// const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };
// getXP(challenges, score); // returns 430 (3 * 10 + 4 * 50 + 2 * 100)

// Analizando strings

//     Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra
//     (Pista) deberia recorrer el string letra por letra
//     (Pista) deberia crear un objeto que guarde LETTERS,DIGITS,SPACES
//     (Pista) deberia convertilo a formato number y si retorna no retorna un NaN lo guardo en digits
//     (Pista) en caso contrario revisar si es un espacio,si es asi guardarlo en spaces
//     (Pista) sino guardarlo en letters

// const getStringInfo = (str) =>{
//   let obj = {
//     LETTERS: str.match(/[a-z]/gi).length,
//     DIGITS: str.match(/\d/g).length, 
//     SPACES: str.match(/\s/g).length
//   }
//   console.log(obj);
// }
// getStringInfo("H3ll0 Wor1d"); // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }

// Analizando párrafos

//     Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.
//     (Pista) deberia recorrer el string letra por letra
//     (Pista) deberia crear un objeto que guarde LETTERS,WORDS,SENTENCE
//     (Pista) deberia contar las letras y guardarlas en LETTERS

//     (Pista) deberia contar los espacios y guardarlas WORDS,deberia empezar a contar desde el uno
//     (Pista) deberia contar los puntos

// const getParagraphInfo = (str) =>{
//   let obj = {
//         LETTERS: str.match(/[a-z]/gi).length,
//         WORDS: str.match(/\s/g).length + 1, 
//         SENTENCE: str.match(/[.]/g).length
//       }
//       console.log(obj);
// }

// getParagraphInfo("Do. Or do not. There is no try."); // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }

// Parámetros de búsqueda

// Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y se escriben como parametro=valor, separados por el signo &. Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.

//     (Pista) deberia usar un funcion para quedarme con lo que esta despues del ?,la funcion que se usa con string
//     ["http://www.exercises.com","keyword=objects&language=javascript&level=intermediate"]
//     (Pista) con el array sobrante,el segundo elemento con indice 1,deberia extraer usar la misma funcion anterior para extraer el &
//     ["keyword=objects","language=javascript,"level=intermediate"]
//     (Pista) deberiamos crear un objeto como acumulador,ej queryParams
//     (Pista) deberia recorrer el array que nos quedo,usando la misma funcion de antes sacar el =
//     aux = ["keyword","objects"]
//     (Pista) esto asignarlo al acumulador que creamos antes
//     queryParams[aux[0]] = aux[1]

// const parseQueryParams = (url) =>{
//   let obj={};
//   let coincidences = url.match(/[a-z]*[=][a-z]*/g)
//   coincidences.forEach(element => {
//     let tempValue = element.match(/[=][a-z]*/).toString()
//     obj[`${element.match(/[a-z]*/)}`] = `${tempValue.slice(1)}`
//   });
//   console.log(obj);
// }

// parseQueryParams(
//   "http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"
// ); // returns { keyword: "objects", language: "javascript", level: "intermediate }

// Batalla

//     Crear una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: daño = ataque - defensaEnemigo y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. Devolver un objeto que indique la cantidad de rondas de duración y quién ganó.
//     (Pista) deberia clonar ambos objetos
//     (Pista) deberia crear un objeto para guardar las rondas y la ganadora(un acumulador)
//     (Pista) deberia usar un bucle while con una condicion que pregunte si fighterA es mayor a cero y si fighterB es mayor a cero
//     (Pista) deberia sumar un round
//     (Pista) deberia calcular el daño del fighterA
//     (Pista) deberia resta el daño del fighterA al fighterB
//     (Pista) deberia comprobar que la vida del fighterB llego a cero,si esto pasa deberia guardar el nombre del fighterA en el objeto y romper el bucle
//     (Pista) deberia calcular el daño del fighterB
//     (Pista) deberia resta el daño del fighterB al fighterA
//     (Pista) deberia comprobar que la vida del fighterA llego a cero,si esto pasa deberia guardar el nombre del fighterA en el objeto y romper el bucle
//     (Pista) deberia retonar el objeto

// const fight = (fighterA, fighterB) =>{
//   let one = {...fighterA}
//   let two = {...fighterB}
//   let rounds = 0;
//   let winner
//   do {
//     rounds += 1;
//     one.life -= two.attack - one.defense;
//     two.life -= one.attack - two.defense;
//   } while (one['life'] > 0 && two['life'] > 0);
//   if(one.life <= 0){
//     winner = two.name;
//   } else{
//     winner = one.name;
//   }
//   let results = {
//     rounds: rounds,
//     winner: winner
//   };
//   console.log(results);
// }
// const fighterA = { name: "Chun-Li", life: 100, attack: 40, defense: 10 };
// const fighterB = { name: "Cammy", life: 50, attack: 20, defense: 20 };
// fight(fighterA, fighterB); // returns { rounds: 3, winner: "Chun-Li"}

// Búsqueda laboral

//     Crear una función que dada una persona y una búsqueda de empleo, devuelva true si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:

// let persona = {
//   experience: 4,
//   languages: ["JavaScript", "HTML","CSS"],
//   location: ["Buenos Aires"],
//   remuneration: 35000
// }

// let busqueda = {
//   experience: 1,
//   languages: ["JavaScript", "HTML"],
//   location: ["Buenos Aires"],
//   remuneration: 40000
// }//return true

 
// const match = (persona, busqueda) =>{
//   let totalLanguages = 0;
//   for (let i = 0; i < busqueda['languages'].length; i++) {
//     if(persona.languages[i] === busqueda.languages[i]){
//       totalLanguages +=1
//     }
//   }
//   let location= busqueda.location.includes(persona.location[0]);
//   if(persona.experience > busqueda.experience &&
//     totalLanguages === busqueda.languages.length &&
//     location &&
//     persona.remuneration <= busqueda.remuneration){
//       console.log(true);
//     }else{
//       console.log(false);
//     }
// }

// match(persona, busqueda)
// La persona es adecuada si:

//     tiene igual o más años de experiencia que la búsqueda

//     los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada)

//     su locación está incluida dentro de las locaciones posibles de la búsqueda

//     su remuneración (pretendida) es igual o menor a la de la búsqueda

//     (Pista) deberia empezar a comprobar si las condiciones mas sencillas se cumplen,como la expiencia o la remuneracion

//     (Pista) deberia recorrer los array de busqueda y preguntar si estan existen en la persona

//     (Pista) deberia retornar false a la primera que falla.


// Unión de objetos

//     Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.

// const info1 = { a: 1, b: 2, c: 3 };
// const info2 = { d: 4, b: 5 };
// const merge = (info1, info2) =>{
//     const copyInfo1 = {...info1}
//     const copyInfo2 = {...info2}
//   const newInfo = Object.assign(copyInfo2, copyInfo1)
//   console.log(newInfo);
// }
// merge(info1, info2); // returns {a: 1, b: 2, c: 3, d: 4}


// Diferencia de objetos

//     Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos

// const info1 = { a: 1, b: 2, c: 3 };
// const info2 = { d: 4, b: 5 };
// const differentiate =(info1, info2)=>{
//   const newInfo ={}

//     for (const key in info1) {
//      if(!info2[`${key}`]){
//       newInfo[`${key}`] = info1[`${key}`] ;
//      }
//     }
//     for (const key in info2) {
//      if(!info1[`${key}`]){
//       newInfo[`${key}`] = info2[`${key}`] ;
//      }
//     }
  
//   console.log(newInfo);
// }
// differentiate(info1, info2); // returns {a: 1, c: 3, d: 4}


// Eliminar propiedades

//     Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array

// const data = { a: 1, b: 2, c: 3 };
// const props = ["c"];
// const removeProperties =(data, props)=>{
//   let newData ={...data}
//   props.forEach(prop => {
//    delete newData[`${prop}`];
//   });
//   console.log(newData);
// }
// removeProperties(data, props); // returns {a: 1, b: 2}


// Filtrar propiedades

//     Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array

// const data = { a: 1, b: 2, c: 3 };
// const props = ["c", "b"];
// const filterProperties =(data, props)=>{
//   let newData ={}
//   props.forEach(prop => {
//    newData[`${prop}`] = data[`${prop}`];
//   });
//   console.log(newData);
// }
// filterProperties(data, props); // returns {b: 2, c: 3}


// Analizando strings

//     Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra

// const getStringInfo = (str) =>{
//   console.log({
//     LETTERS: str.match(/[a-z]/gi),
//     DIGITS: str.match(/\d/gi),
//     SPACES : str.match(/\s/g),
//   });
// }

// getStringInfo("H3ll0 Wor1d") // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }


// Analizando párrafos

//     Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.

// const getParagraphInfo = (str) =>{
//   return {
//     LETTERS: str.match(/[a-z]/gi),
//     WORDS: str.match(/[a-z]*[^\s]/gi),
//     SENTENCE : str.match(/\./g),
//   }
// }

// console.log(getParagraphInfo("Do. Or do not. There is no try."));  // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }


// Contar palabras

//     Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que aparece. La función debe ignorar el caso ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto devuelto debe tener todas sus propiedades en minúscula

// const countWords = (str) =>{
//   let obj ={};
//   let array = str.toLowerCase().match(/[a-z]*[^\s]/g)
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     count =1;
//     for (let j = 0; j < array.length; j++) {
//       if(array[i] === array[j] && i !==j){
//         count +=1;
//       }
//     }
//     obj[`${array[i]}`] = count;
    
//   }
//   console.log(obj); 
// }


// countWords("El que compra pocas capas pocas capas paga") // returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }
