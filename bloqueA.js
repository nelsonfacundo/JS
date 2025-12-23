const usuarioDB = require("./user.json");


/*0 Crear funcion que recorra un json de usuario y devuelva dado un usuario el mismo  "*/

console.log(usuarioDB)

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

console.log(buscarUsuario("facundo"))


/*1️⃣ Validar login
Función que reciba:
usuario
contraseña
Devuelv:
"login correcto"
"usuario incorrecto"
"contraseña incorrecta"*/

function validarLogin(user , pass ){
    let usuario = buscarUsuario(user)
    let message = "" 
    if(usuario != null && usuario.pass === pass) {
        message = "login correcto"
    }else if (usuario != null &&  usuario.pass != pass){
        message = "contraseña incorrecta"
    }else{
          message = "usuario incorrecto"
    }

    return message
}


console.log(validarLogin("facundo","123"))
console.log(validarLogin("facundo","1"))
console.log(validarLogin("asd","123"))



/*2️⃣ Clasificar número
Función que reciba un número y devuelva:
"positivo"
"negativo"
"cero"*/

function clasificarNumero(num){
    let message = ""
        if(num === 0){
            message = "cero"
        }else if(num > 0){
            message = "positivo"
        }else{
            message ="negativo"
        }
    return message
}

console.log(clasificarNumero(1))
console.log(clasificarNumero(0))
console.log(clasificarNumero(-1))


/*3️⃣ Validar rango
Función que reciba:
número
mínimo
máximo
Devuelva true si está dentro del rango.*/

function validarRango(num , min , max){
    if(num > min && num < max ){
        return true
    }
    return false
}

console.log(validarRango(5,1,10))
console.log(validarRango(5,10,1))


/*4️⃣ Calcular descuento
Función que reciba:
precio
tipoCliente ("vip", "regular", "nuevo")
Devuelva el precio final según reglas:
vip → 20% off
regular → 10% off
nuevo → sin descuento*/

const tipoCliente = {
  vip: 'vip',
  regular: 'regular',
  nuevo: 'nuevo',

};

function calcularDescuento(precio ,tipoCliente) {
    let montoDescuento  = 0 
    let precioFinal = 0
    let porcentajeVip = 20 / 100
    let porcentajeRegular = 10 / 100
    let porcentajeNuevo = 0

    if (tipoCliente === "vip") {
        montoDescuento = precio * porcentajeVip
        precioFinal = precio - montoDescuento

    }else if (tipoCliente === "regular"){
        montoDescuento = precio * porcentajeRegular
        precioFinal = precio - montoDescuento

    } else{
        montoDescuento = precio * porcentajeNuevo
        precioFinal = precio - montoDescuento

    }
    return precioFinal 
}

console.log(calcularDescuento(100,"vip"))

/*5️⃣ Evaluar nota
Función que reciba una nota (0–10) y devuelva:
"Excelente" (9–10)
"Bien" (7–8)
"Regular" (4–6)
"Desaprobado" (<4)*/

function evaluarNota(nota){
    let message = ""
    if(nota >= 9 && nota <=  10){
        message = "Excelente"
    }else if(nota >= 7 && nota <= 8) {
        message = "Bien"
    }else if (nota >= 4 && nota <= 6){
        message = "Regular"
    }else{
          message = "Desaprobado"
    }

    return message
}

console.log(evaluarNota(9))
console.log(evaluarNota(7))
console.log(evaluarNota(5))
console.log(evaluarNota(2))