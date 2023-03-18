/* 
  aImportante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function pedazos(array, cantidad) {
  // La funcion pedazos recibe un arreglo llamado 'array' y un numero entero llamado 'cantidad'
  // Esta debe separar el array recibido en N subarreglos que tengan como máximo el numero recibido en cantidad de elementos.
  // Por ejemplo:
  // pedazos([1,2,3,4,5], 2) -> retorna [[1,2], [3,4], [5]);
  // pedazos([1,2,3,4,5], 4) -> retorna [[1,2,3,4], [5]);
  // pedazos{[1,2],4) -> retorna [[1,2]];
  var sumados = [];

  while (array.length > 0) {
      var subarreglo = [];
      for (var i = 0; i < cantidad && array.length > 0; i++) {
        subarreglo.push(array.splice(0, 1)[0]);
      }
      sumados.push(subarreglo);
    }
  return sumados;


};
// No modifiques nada debajo de esta linea //

module.exports = pedazos