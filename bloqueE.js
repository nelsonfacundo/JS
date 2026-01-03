const usuarioDB = require("./user.json");

/** 1️⃣ Validar edad (Promise simple)
Crear una función que:
reciba una edad
devuelva una Promise
Reglas:
si edad ≥ 18 → resolve("mayor de edad")
si edad < 18 → reject("menor de edad")*/

function validarEdad( edad ){
    return new Promise ((resolve,reject)=>{
        if(edad >= 18){
            resolve("mayor de edad")
        }else{
            reject("menor de edad")
        }
    })
}

//probar promesa por log 
console.log(validarEdad(18))

//ejecutar promesa mediante una funcion 
async function probarValidarEdad(edad) {
  try {
    const response = await validarEdad(edad);
    console.log("Éxito:", response);
  } catch (error) {
    console.log("Error:", error);
  }
}

probarValidarEdad(18)



/**2️⃣ Simular login async
Crear una función que:
reciba usuario y contraseña
simule un delay
valide contra un usuario hardcodeado
Resultados:
resolve("login ok")
reject("credenciales invalidas") */


function simularLogin(user, pass) {
  const userCredential = "admin";
  const passCredential = "123";

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === userCredential && pass === passCredential) {
        resolve("login ok");
      } else {
        reject("credenciales invalidas");
      }
    }, 1000);
  });
}


async function probarLogin(user , pass){
    try {
    const response = await simularLogin(user,pass)
    console.log("Éxito:", response);
  } catch (error) {
    console.log("Error:", error);
  }
}

probarLogin("admin","123")

/**||Crear una función async que reciba:
/3️⃣ Verificar acceso por rol (Promise + lógica)
{ role, active }
Reglas:
admin → resolve
user + active → resolve
cualquier otro → reject */

function verificarAcceso(role,active){
  return new Promise((resolve,reject) => {
    
    if(role ==="admin"|| (role === "user" && active)  ){
      resolve("acceso permitido")
    } else{
      reject("acceso denegado")
    }
  }) 
}

async function verificarAccesoTest(role,active){
  try{
    const response = await verificarAcceso(role,active)
    console.log("Éxito:", response);
  }catch (error) {
    console.log("Error:", error);
  }
}


verificarAccesoTest("admin",true) // true
verificarAccesoTest("admin",false) //true
verificarAccesoTest("user",false) //false
verificarAccesoTest("user",true) // true
verificarAccesoTest("peito",true) //false 
verificarAccesoTest("peito",false) //false


/**4️⃣ Buscar usuario async
Crear una función que:
reciba un username
busque en un array de usuarios
simule delay
Resultados:
resolve(usuario)
reject("usuario no encontrado") */

function buscarUsuario(username){
  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      let user = null
      let i = 0; 
       while (i < usuarioDB.length){
        if(usuarioDB[i].username == username){
            user = usuarioDB[i]
        }
        i++
      }
      if(user != null){
        resolve(user)
      }else{ 
        reject("usuario no encontrado")
      }
    },500)
  })
}

//Version mejorada
function buscarUsuarioV2(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < usuarioDB.length; i++) {
        if (usuarioDB[i].username === username) {
          return resolve(usuarioDB[i]);
        }
      }
      reject("usuario no encontrado");
    }, 500);
  });
}


async function buscarUserTest(username) {
  try{
    const response = await buscarUsuario(username)
    console.log("usuario", response)
  }catch(error){
    console.log("error", error)
  }
}

buscarUserTest("facundo")


/**5️⃣ Contar registros async
Crear una función que:
reciba un array
simule delay
devuelva una Promise con:
{ total } */

const arr = [1,2,3]

function contarRegistros(arr){
  return new Promise((resolve,reject) => {
  setTimeout(() =>{
     const registro= {
      total : 0,
    };
    for(let i = 0; i < arr.length ; i++){
      registro.total++
    }
    if(registro.total > 0){
      resolve(registro)
    }else{
      reject("no hay registros")
    }
  },500)
  })
}


async function contarRegistrosTest(arr){
  try{
    const response = await contarRegistros(arr)
    console.log(response)
  }catch(error){
    console.log("error",error)
  }
}

contarRegistrosTest(arr)


/**6️⃣ Filtrar datos async
Crear una función que:
reciba un array de números
devuelva solo los mayores a 10
use Promise */
arrayNumber = [1,-2,3,20,15]

function filtrarDatos(array){
  return new Promise((resolve, reject)  =>{
    const newArray = []
      for(let i = 0; i < array.length ; i++){
        if(array[i] > 10){
          newArray.push(array[i])
        }
      }
      if (newArray.length > 0) {
        resolve(newArray);
      } else {
        reject("No hay numeros mayores a 10");
      }
  } )
}


async function filtrarDatosTest(array){
  try{
    const response= await filtrarDatos(array)
    console.log(response)
  }catch(error){
    console.log("error:", error)
  }
}


filtrarDatosTest(arrayNumber)


/**7️⃣ Cadena de promesas (then)
Crear dos funciones:+
validar número (Promise)
duplicar número (Promise)
Encadenarlas usando .then. */


function validarNumero(n) {
  return new Promise((resolve, reject) => {
    if (typeof n === "number" && Number.isFinite(n)) {
      resolve(n);
    } else {
      reject("no es un numero valido");
    }
  });
}

function duplicarNumero(n) {
  return new Promise((resolve, reject) => {
    resolve(n * 2);
  });
}

validarNumero(5)
  .then(duplicarNumero)
  .then( (resultado)  => {
    console.log("resultado final:", resultado); // 10
  })
  .catch( (error)  => {
    console.log("error:", error);
  });

/**8️⃣ Promise con error aleatorio
Crear una función que:
simule una API
falle o funcione aleatoriamente
devuelva data o error */


function randomError(){
  return new Promise( (resolve,reject) => {
    setTimeout(() =>{
      if(Math.random > 0.5){
        resolve("success")
      }else{
        reject("error")
      }
    },500)
  })
}


async function randomErrorTest(){
  try{
    const response = await randomError()
    console.log(response)
  }catch(error){
    console.log(error)
  }
}

randomErrorTest()


/**9️⃣ Procesar array async
Crear una función que:
reciba un array de strings
normalice (minúsculas, trim)
devuelva el array normalizado usando Promise */

miArray = ["hOla"," mund o ","Array"]

function normalizarArray(arr){
  return new Promise((resolve,reject) => {
    const arrayNormalizado = []
    for(let i = 0; i < arr.length ; i++){
      arrayNormalizado.push( 
      arr[i]
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, " "))
    }

    if(arrayNormalizado.length > 0){
      resolve(arrayNormalizado)
    }else{
      reject("No hay Strings")
    }
  })
}


async function normalizarArrayTest(arr){
  try{
    const response = await normalizarArray(arr)
    console.log(response)
  }catch(error){
    console.log(error)
  }
}


normalizarArrayTest(miArray)


/**🔟 Reporte async (QA real)
Crear una función que:
reciba resultados de tests
calcule passed / failed
devuelva el reporte dentro de una Promise */

const resultadosTests = [
  { testName: "Login OK", status: "passed" },
  { testName: "Login error", status: "failed" },
  { testName: "Logout", status: "passed" },
  { testName: "Crear usuario", status: "passed" },
  { testName: "Eliminar usuario", status: "failed" },
  { testName: "Eliminar usuario", status: "pending" }
];

function reporte(resultadosTests){
  return new Promise( (resolve,reject) => {
    const reporte = {
      passed: 0,
      failed : 0,
      pending : 0,
      coverage: 0,
    }

    for(let i = 0 ; i < resultadosTests.length ; i++){
      if(resultadosTests[i].status === "passed"){
        reporte.passed++
      }else if(resultadosTests[i].status === "failed"){
        reporte.failed++
      }else{
        reporte.pending++
      }
    }

    const total = reporte.passed + reporte.failed + reporte.pending;

    reporte.coverage = total === 0 ? 0: (reporte.passed / total) * 100;

    if(!resultadosTests.length !== 0){
        resolve(reporte)
    }else{
        reject("No hay resultado de tests")
    }
  })
}


async function reporteTest(resultadosTests){
  try{
    const response = await reporte(resultadosTests)
    console.log(response)
  }catch(error){
    console.log(error)
  }
}


reporteTest(resultadosTests)
