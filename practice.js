miArray = ["hola","mundo","array"]
arrayNumber = [1,-2,3,15]
persona = {
    nombre : "facundo",
    edad : 26
}
/*1️⃣ Sumar dos números
Crear una función que reciba dos números y devuelva la suma. */

function sumar(a , b ){
    return Number(a) + Number(b)
}

console.log("1 - " + sumar(1,2))

/*2️⃣ Par o impar
Función que reciba un número y devuelva: */

function parOrImpar(num){
    return  num % 2===0  ? "es par" : "es impar"
}

console.log("2 - " +parOrImpar(2))
console.log("2 - " +parOrImpar(1))


/* 3️⃣ Mayor de edad
Función que reciba una edad y devuelva:
true si es mayor o igual a 18
false si no */

function mayorDeEdad(edad) {
    return  edad >= 18 
}

console.log("3 - " +mayorDeEdad(18))
console.log("3 - " +mayorDeEdad(17))

/*4️⃣ Longitud de texto
Función que reciba un string y devuelva la cantidad de caracteres. */

function countString(string){
    return string.length
}

console.log("4 - " +countString("facundo"))
console.log("4 - " +countString(" fAcundo "))


/*5️⃣ Convertir a mayúsculas

Función que reciba un texto y lo devuelva en mayúsculas. */

function upperCase(string){
    return string.toUpperCase()
}

console.log("5 - " +upperCase("facundo"))
console.log("5 - " +upperCase("facUndo"))


//6️⃣ Primer elemento
function firstElement(arr){
    return arr.at(0);
} 
console.log("6 - " +firstElement(miArray))


//7️⃣ Último elemento
function lastElement(miArray) {
    return miArray.at(-1)
}


console.log("7 - " +lastElement(miArray))


//8️⃣ Contar elementos

function countElements(arr){
    return arr.length
} 

console.log("8 - " +countElements(miArray))


//9️⃣ Sumar array

function sumArray(arr){
    let sum = 0
    for (let i = 0 ; i < arr.length ; i ++){
        sum += arr[i]
    }
    return sum 
}

console.log("9 - " +sumArray(arrayNumber))


//🔟 Existe valor


function  valueExist(arr,value){
    let result = false ; 
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == value){
            result =  true
        }
    }
    return result;
} 

console.log("10 - " +valueExist(miArray,"hola"))
console.log("10 - " +valueExist(arrayNumber,1))

//Alternativa
//return arr.includes(value);





//11️⃣ Crear objeto Y devuelva un objeto con esas propiedades.

function crearPersona(nombre, edad) {
  return {
    nombre,
    edad
  };
}

console.log("11 - "+ crearPersona("facundo",12))

//12️⃣ Leer propiedad - Función que reciba un objeto persona y devuelva el nombre.

function getName(persona) {
    return persona.nombre
}

console.log("12 - "+getName(persona))



//13️⃣ Modificar objeto - Función que reciba un objeto persona y cambie la edad.

function modificarEdad(persona, edad) {
  persona.edad = edad;
  return persona;
}


//14️⃣ Validar propiedad - Función que verifique si un objeto tiene la propiedad "email".

function verifyPropierty(persona){
    return "email" in persona
}

console.log("14 - "+verifyPropierty(persona))



//15️⃣ Contar propiedades-  Función que reciba un objeto y devuelva cuántas propiedades tiene.

function countPropierty(persona){
    return  Object.keys(persona).length;
}

console.log("15 - "+countPropierty(persona))



/*1️⃣6️⃣ Normalizar texto
Crear una función que:
reciba un string
elimine espacios al inicio y final
convierta a minúsculas*/ 


function normalizarTexto(texto) {
  return texto.trim().toLowerCase();
}

console.log("16 - "+normalizarTexto("faCund o"))


/*1️⃣7️⃣ Texto vacío
Función que reciba un string y devuelva:
true si está vacío o tiene solo espacios
false si tiene contenido*/

//NO PUDE RESOLVER CUANDO EL TEXTO CONTIENE SOLAMENTE ESPACIO DEVOLVERLO EN FALSE 

function verificarTextoVacio(texto) {
  return texto.trim().length === 0;
}

console.log("17 - "+verificarTextoVacio("faCund o"))




/*1️⃣8️⃣ Longitud mínima
Función que reciba:
un string
un número min
Devuelva true si el texto tiene al menos min caracteres. */

function validarLongitud(string , num) {
    return  string.length >= num 
}

console.log("18 - "+validarLongitud("hola",3))
console.log("18 - "+validarLongitud("hola",4))
console.log("18 - "+validarLongitud("hola",5))


/*1️⃣9️⃣ Reemplazar palabras
Función que reciba:
un texto
una palabra a buscar
una palabra nueva
Debe devolver el texto reemplazado. */

function remplazarPalabra(text,textReplace , newText){
    return text.replaceAll(textReplace, newText);
}

console.log("19 - "+remplazarPalabra("hola mundo","mundo","facundo"))
console.log("19 - "+remplazarPalabra("hola mundo","asd","facundo"))



/**2️⃣0️⃣ Contiene texto (case insensitive)
Función que verifique si un texto:
contiene otro texto
sin importar mayúsculas/minúsculas */

function contieneTexto(texto, buscado) {
  return texto.toLowerCase().includes(buscado.toLowerCase());
}

console.log("20 - "+contieneTexto("hola mundo","mundo"))
console.log("20 - "+contieneTexto("hola mundo","123"))


/**2️⃣1️⃣ Filtrar números positivos
Función que reciba un array de números y devuelva solo los positivos. */

//USANDO RECORRIDO
function filtrarNumerosPositivos(arr) {
  const numerosPositivos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      numerosPositivos.push(arr[i]); 
    }
  }
  return numerosPositivos;
}

//USANDO FUNCION NATIVA DE JS 
function filtrarNumerosPositivosV2(arr) {
  return arr.filter(val => val >= 0   );
}

console.log("21 - "+filtrarNumerosPositivos(arrayNumber))
console.log("21 - "+filtrarNumerosPositivosV2(arrayNumber))



/*2️⃣2️⃣ Contar mayores a X
Función que reciba:
un array de números
un número X
Devuelva cuántos son mayores a X. */

function contarMayor(arr, num) {
  let acum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      acum++;
    }
  }
  return acum;
}

console.log("22 - " + contarMayor(arrayNumber,10))


/**2️⃣3️⃣ Validar array vacío
Función que devuelva:
true si el array está vacío
false si tiene elementos */

function validarArrayVacio(arr) {
  return !arr || arr.length === 0;
}

console.log("23 - " + validarArrayVacio(arrayNumber))


/*2️⃣4️⃣ Duplicar valores
Función que reciba un array y devuelva otro array con los valores duplicados.
Ej: */

function duplicarValores(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i] * 2);
  }
  return resultado;
}

console.log("24 - " + duplicarValores(arrayNumber))


/*2️⃣5️⃣ Buscar elemento
Función que reciba:
un array
un valor
Devuelva:
el elemento si existe
null si no existe */


function buscarElemento(arr, valor) {
    i = 0;
    result = null
    while (i < arr.length){
        if (arr[i] === valor ){
            result = arr[i]
        }
          i++
    } 
    return result
}


function buscarElementoV2(arr, valor) {
  return arr.find(el => el === valor) ?? null;
}


console.log("25 - " + buscarElemento(arrayNumber,1))
console.log("25 - " + buscarElemento(arrayNumber,11))
console.log("25 - " + buscarElementoV2(arrayNumber,11))


