/**Agrupar por propiedad
Recibir un array de objetos con esta forma:
{ tipo, valor }
Devolver un objeto agrupado por tipo.
📌 Ejemplo conceptual:
{
  error: [...],
  success: [...]
} */

const registrosPorTipo = [
  { tipo: "error", valor: "timeout" },
  { tipo: "success", valor: "login ok" },
  { tipo: "error", valor: "500 server error" },
  { tipo: "success", valor: "data saved" },
  { tipo: "warning", valor: "deprecated api" }
];


function agruparPropiedadV0(arr) {
  const resultado = {};

  for (let i = 0; i < arr.length; i++) {
    const tipo = arr[i].tipo;

    if (!resultado[tipo]) {
      resultado[tipo] = [];
    }

    resultado[tipo].push(arr[i]);
  }

  return resultado;
}

function agruparPropiedad(arr){
  return Object.groupBy(arr, ele => ele.tipo);;
}

function agruparPropiedadV2(arr){
  return  Map.groupBy(arr, ele => ele.tipo);
}

console.log(agruparPropiedadV0(registrosPorTipo))
//console.log(agruparPropiedad(registrosPorTipo))
//console.log(agruparPropiedadV2(registrosPorTipo))


/**2️⃣ Contar por categoría
Recibir un array de strings que representan estados:
["passed", "failed", "passed", "skipped"]
Devolver un objeto con el conteo por estado. */

const estadosTests = [
  "passed",
  "failed",
  "passed",
  "skipped",
  "passed",
  "failed",
  "passed"
];



//using for 
function contarCategoria(arr){
const counts = {};
 arr.forEach(item => {
  counts[item] = (counts[item] || 0) + 1;
});
return counts
}


function contarCategoriaV2(arr) {
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



console.log(contarCategoria(estadosTests))
console.log(contarCategoriaV2(estadosTests))


/**3️⃣ Validar estructura de datos
Recibir un array de objetos y validar que todos tengan:
id
name
status
Devolver:
true si todos cumplen
false si alguno falla */

const usuariosApi = [
  { id: 1, name: "Facundo", status: "active" },
  { id: 2, name: "Juan", status: "inactive" },
  { id: 3, name: "Maria", status: "active" }
];

// Para probar error:
const usuariosApiInvalidos = [
  { id: 1, name: "Facundo" }, // falta status
  { id: 2, status: "inactive" } // falta name
];



function validarEstructura(arr) {
  const atributosRequeridos = ['id', 'name', 'status'];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < atributosRequeridos.length; j++) {
      if (!Object.hasOwn(arr[i], atributosRequeridos[j])) {
        return false;
      }
    }
  }
  return true;
}


console.log(validarEstructura(usuariosApi))
console.log(validarEstructura(usuariosApiInvalidos))


/**4️⃣ Buscar y resumir datos
Recibir un array de objetos:
{ usuario, resultado }
Devolver un resumen con:
total de registros
cantidad de "ok"
cantidad de "error" */

const resultadosUsuarios = [
  { usuario: "facundo", resultado: "ok" },
  { usuario: "juan", resultado: "error" },
  { usuario: "maria", resultado: "ok" },
  { usuario: "pedro", resultado: "ok" },
  { usuario: "ana", resultado: "error" }
];

function buscarResumir(arr) {
  const resumen = {
    total: 0,
    ok: 0,
    error: 0
  };

  for (let i = 0; i < arr.length; i++) {
    resumen.total++;

    if (arr[i].resultado === "ok") {
      resumen.ok++;
    } else if (arr[i].resultado === "error") {
      resumen.error++;
    }
  }

  return resumen;
}

console.log(buscarResumir(resultadosUsuarios))


/**5️⃣ Transformar response de API
Recibir un array de objetos:
{ id, nombre, edad }
Devolver:
{ id, nombre, isAdult }
📌 isAdult es true si edad ≥ 18. */

const personasApi = [
  { id: 1, nombre: "Facundo", edad: 26 },
  { id: 2, nombre: "Juan", edad: 17 },
  { id: 3, nombre: "Maria", edad: 30 }
];


function transformarResponse(arr) {
  const resultado = [];

  for (let i = 0; i < arr.length; i++) {
    const persona = arr[i];

    resultado.push({
      id: persona.id,
      nombre: persona.nombre,
      isAdult: persona.edad >= 18
    });
  }

  return resultado;
}


console.log(transformarResponse(personasApi))


/**6️⃣ Detectar duplicados
Recibir un array de valores.
Devolver:
un array con los valores duplicados
sin repetir duplicados en la salida */

const valoresDuplicados = [
  "login",
  "logout",
  "login",
  "error",
  "timeout",
  "error",
  "login"
];


function detectarDuplicados(arr){
  let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                }
            }
        }
    }
  return duplicates
}


//Version moderna
function detectarDuplicadosV2(arr) {
  const duplicados = arr.filter(
    (item, index) => arr.indexOf(item) !== index
  );
  return [...new Set(duplicados)];
}


console.log(detectarDuplicados(valoresDuplicados))
console.log(detectarDuplicadosV2(valoresDuplicados))


/**7️⃣ Normalizar data para asserts
Recibir un array de strings y devolver otro:
sin espacios
en minúsculas
sin caracteres especiales
*/
const textosUI = [
  "  Login Exitoso ",
  "ERROR de Servidor",
  "Usuario   Creado ",
  "   Tiempo de Espera ",
   "   !Tiempo de Espera #"
];


function normalizarData(arr){
  const arrayNormalizado = []
  for (let i = 0; i < arr.length ; i++) {
    arrayNormalizado.push( 
      arr[i]
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, " "))
  }
  return arrayNormalizado
}

console.log(normalizarData(textosUI))

/**8️⃣ Generar reporte simple
Recibir un array de resultados de test:
{ testName, status }
Devolver un objeto con:
total tests
cantidad passed
cantidad failed
porcentaje de éxito */
const resultadosTests = [
  { testName: "Login OK", status: "passed" },
  { testName: "Login error", status: "failed" },
  { testName: "Logout", status: "passed" },
  { testName: "Crear usuario", status: "passed" },
  { testName: "Eliminar usuario", status: "failed" }
];

//porcentaje de exito =  (Éxitos / Total de Intentos) * 100 
function generarReporte(arr){

    const resumen = {
    totalTest: 0,
    cantidadPass: 0,
    cantidadFailed: 0,
    porcentajeExito: 0
  };

  for(let i = 0 ; i < arr.length ; i++){
    resumen.totalTest++

    if(arr[i].status == "passed"){
      resumen.cantidadPass++
    }else{
      resumen.cantidadFailed++
    }
    
  }
  resumen.porcentajeExito = (resumen.cantidadPass / resumen.totalTest ) * 100
  return resumen
}

console.log(generarReporte(resultadosTests))

/**9️⃣ Validar reglas de negocio
Recibir un objeto usuario con:
{ username, role, active }
Validar:
admin siempre puede acceder
user solo si active === true
guest nunca
Devolver true o false. */

const usuariosAcceso = [
  { username: "admin1", role: "admin", active: false },
  { username: "user1", role: "user", active: true },
  { username: "user2", role: "user", active: false },
  { username: "guest1", role: "guest", active: true }
];

function validarReglasDeNegocio(usuariosAcceso){
  resultado = false;
    if( usuariosAcceso.role === "admin" ){
      resultado = true
    }else if(usuariosAcceso.role === "user" && usuariosAcceso.active ){
      resultado = true
    }else{
       resultado = false
    }
  return resultado
}


//version corta
function validarReglasDeNegocioV2(usuario) {
  if (usuario.role === "admin") return true;
  if (usuario.role === "user" && usuario.active === true) return true;
  return false;
}


console.log(validarReglasDeNegocio(usuariosAcceso[0]))
console.log(validarReglasDeNegocioV2(usuariosAcceso[0]))

/**🔟 Simular respuesta de API
Crear una función que:
devuelva una promesa
resuelva con data o error
simule delay
📌 NO fetch
📌 NO axios
📌 Solo lógica JS */
const apiResponseMock = [
  { id: 1, message: "ok" },
  { id: 2, message: "ok" },
  { id: 3, message: "error" }
];