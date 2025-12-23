miArray = ["hola","mundo","array"]
arrayNumber = [1,1,-2,3,15,11,3,3]
arrayNumberv2 = [1,1,-2,3,15,11,3,3]

/*6️⃣ Contar pares
Función que cuente cuántos números pares hay en un array.*/

function contarPares(arr){
    let cont = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 0){
            cont++
        }
    }
    return cont
}

console.log("6- " + contarPares(arrayNumber))

/*7️⃣ Buscar máximo
Función que devuelva el número más grande de un array.*/

function buscarMaximo(arr){
    let max = 0
    for(let i = 0 ; i < arr.length ; i++){
        if( arr[i]  > max ){
            max = arr[i]
        }
    }
    return max
}

console.log("7- "+ buscarMaximo(arrayNumber))

/*8️⃣ Invertir array
Función que devuelva un nuevo array invertido (sin usar reverse).*/

function invertirArray(arr) {
  let nuevoArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    nuevoArray.push(arr[i]);
  }
  return nuevoArray;
}

console.log("8- "+invertirArray(arrayNumber))
function invertirArrayV2(arr) {
    return arr.reverse()
}

console.log("8- "+invertirArrayV2(arrayNumber))

/*9️⃣ Eliminar duplicados
Función que reciba un array y devuelva otro sin valores repetidos.*/

function eliminarDuplicados(arr){
    let arraySinDuplicados = []
        for (let i = 0; i < arr.length; i++) {
        if (!arraySinDuplicados.includes(arr[i])) {
            arraySinDuplicados.push(arr[i]);
        }
    }
    return arraySinDuplicados
}

console.log("9 - "+eliminarDuplicados(arrayNumber))


/*
🔟 Sumar hasta condición
Función que sume números de un array hasta encontrar un número negativo.*/


function sumarCondicion(arr){
    let acum = 0;
    let i = 0;

    while(i < arr.length){ 
        if(arr[i] >= 0){
            acum += arr[i];
        } else {
            break;
        }
        i++;
    }
    return acum;
}

console.log(sumarCondicion(arrayNumberv2));