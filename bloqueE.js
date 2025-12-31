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
