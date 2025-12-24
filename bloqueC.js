miArray = ["h ola","m undo","Array","hola  mundo"]
arrayNumber = [1,1,-2,3,15,11,3,3]
arrayNumberv2 = [1,1,-2,3,15,11,3,3]
const usuarioDB = require("./user.json");

/*1️⃣1️⃣ Normalizar array de strings
Recibir un array de strings y devolver:
sin espacios
en minúscula*/

function NormalizarArray(arr){
    let newArray = []
    for(let i = 0; i < arr.length ; i++){
       newArray.push(arr[i].split(' ').join('').toLowerCase())
    }
    return newArray
}

console.log(NormalizarArray(miArray))

/**1️⃣2️⃣ Filtrar por palabra
Recibir un array de textos y una palabra.
Devolver solo los que la contengan. */

function filtrarPalabra(arr,palabra){
    let newArray = []
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].includes(palabra)){
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log("12  " + filtrarPalabra(miArray,"mundo"))

/**1️⃣3️⃣Transformar estructura
Dado
[{name, age}]
Devolver:
[{name, isAdult}] */

function transformarEstructura(arr) {
  const resultado = [];

  for (let i = 0; i < arr.length; i++) {
    const persona = arr[i];

    resultado.push({
      name: persona.name,
      isAdult: persona.age >= 18
    });
  }

  return resultado;
}

const personas = [
  { name: "Facundo", age: 26 },
  { name: "Juan", age: 16 }
];

console.log(transformarEstructura(personas));

/**1️⃣4️⃣ Contar ocurrencias
Recibir un array y devolver un objeto con:
{ valor: cantidad } */

function contarOcurrencias(arr) {
  const resultado = {};

  for (let i = 0; i < arr.length; i++) {
    const valor = arr[i];


    if (resultado[valor] === undefined) {
      resultado[valor] = 1;
    } else {
      resultado[valor]++;
    }
  }

  return resultado;
}

console.log("14", JSON.stringify(contarOcurrencias(miArray)));

/**1️⃣5️⃣ Validar datos
Función que reciba un objeto y valide:
nombre no vacío
edad mayor a 0 */

function buscarUsuario(username){
    let user = null;
    let i = 0;
    while (i < usuarioDB.length){
        if(usuarioDB[i].username == username){
            user = usuarioDB[i]
        }
        i++
    } 
    return user 
}


function validarDatos(username) {
  const persona = buscarUsuario(username);

  if (!persona) {
    return { valido: false, error: "usuario no existe" };
  }

  if (!persona.age || persona.age <= 0) {
    return { valido: false, error: "edad invalida" };
  }

  return { valido: true, data: persona };
}


console.log("15", JSON.stringify(validarDatos("facundo")));
console.log("15", JSON.stringify(validarDatos("martin")));
console.log("15", JSON.stringify(validarDatos("jorge")));