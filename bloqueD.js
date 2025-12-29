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