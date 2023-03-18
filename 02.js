/* 
  aImportante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function masFrecuente(array) {
  // La funcion llamada 'masFrecuente' recibe como argumento un array de numeros enteros
  // y debe devolver el número entero que mas veces aparece (el más frecuente).
  // ej:
  // masFrecuente([1,1,2,3,4]) => 1
  // masFrecuente([3,2,3,2,3,3]) => 3
  // Nota: Los numeros pueden NO estar ordenados

  // Tu código aca:
var nuevo = {};
for (var i = 0; i < array.length; i++){ 
  if (nuevo[array[i]] === undefined) {
    nuevo[array[i]] = 1;
  } else{
    nuevo[array[i]]++;
  }
}
var cuenta = 0;
var masFrecuente;
for (var num in nuevo){
  if (nuevo[num] > cuenta){
    cuenta = nuevo[num];
    masFrecuente = +num;
  }
}
return masFrecuente;

}


// No modifiques nada debajo de esta linea //

module.exports = masFrecuente