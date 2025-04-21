// clase 2 parte 1 mocks y TDD

/* 
    1. ¿Qué es TDD (Test Driven Development)?
    Es una forma de programar escribiendo primero las pruebas antes del código funcional.
    Ciclo TDD:
    Escribir el test (¡va a fallar! porque todavía no hay código).
    Escribir el código justo para que el test pase.
    Refactorizar (mejorar el código sin cambiar lo que hace).
    Beneficios:
    Tu código es más confiable.
    Queda más organizado y modular.
    Las pruebas sirven como documentación.
*/

// TDD: Test driven development?

// ejemplo, funcion que sume dos numeros
    //  Que pruebas deberia pasar para garantizar el funcionamiento?

// ciclo del TDD

// 1.-Escribir prueba fallida

// const suma = (a,b)=>{
//     return console.log(a+b)
// }

// const suma = (a,b) =>{
//     // test 2
//     if(!a || !b){
//         return 0
//     }

//     // test 1
//     if(typeof a!== "number" || typeof a!== "number"){
//         return null
//     }

//     // test 3
//     return a+b
// }

// para resolver el test 4 se tienen que modificar todas las funciones
const suma = (...numeros) =>{
    // debo retornar 0 si no recibo ningun parametro 
    if(numeros.length===0){
        return 0
    }

// retornar null si algo no es numerico 
// se crea una bandera que es true y eso cambia cuando algo no se cumple
let banderita = true
for(let i=0; i<numeros.length && banderita; i++){
    if(typeof numeros[i] !== "number"){
        banderita=false
    }

    if(banderita !== true){
        return null
    }

    // test 3 y 4
    let resultado = 0
    for(let i=0; i<numeros.length;i++){
        resultado += numeros[i]
    }
    return resultado
}
}



// suma(1,3)

// la funcion debe rtornar null si el parametro no es numerico 
// La funcion debe retornar 0 si el parmetro no es numerico 

//TEST: 
let testPasados = 0; 
let testTotales = 4; 
//Prueba 1: 
console.log("1. La función debe retornar NULL si algun parametro no es numerico.");
let resultado1 = suma("2", 3);
if (resultado1 === null) {
    console.log("Test 1 Pasado!"); 
    testPasados++; 
} else {
    console.log("El test 1 no se pasó, se esperaba null pero se recibió " + resultado1 );
}
console.log("-------------------------------------------------------------");
//Prueba 2: 
console.log("2. La función debe retornar 0 si no se pasa ningun parametro.");
let resultado2 = suma();
if (resultado2 === 0) {
    console.log("Test 2 Pasado!"); 
    testPasados++; 
} else {
    console.log("El test 2 no se pasó, se esperaba 0 pero se recibió " + resultado2 );
}
console.log("-------------------------------------------------------------");

//Prueba 3: 
console.log("3. La función debe poder relizar la suma correctamente.");
let resultado3 = suma(2, 3);
if (resultado3 === 5) {
    console.log("Test 3 Pasado!"); 
    testPasados++; 
} else {
    console.log("El test 3 no se pasó, se esperaba 5 pero se recibió " + resultado3 );
}
console.log("-------------------------------------------------------------");

//Prueba 4: 
console.log("4. La función debe poder hacer la suma con cualquier cantidad de numeros. ");
let resultado4 = suma(1, 2, 3, 4, 5);
if (resultado4 === 15) {
    console.log("Test 4 Pasado!"); 
    testPasados++; 
} else {
    console.log("El test 4 no se pasó, se esperaba 15 pero se recibió " + resultado4 );
}
console.log("-------------------------------------------------------------");

if(testPasados === testTotales){
    console.log('todos los tests se han pasado con exito ')
}else{
    console.log('Se pasaron ' + testPasados + ' tests de ' + testTotales + " todo es dolor"
    )
}

