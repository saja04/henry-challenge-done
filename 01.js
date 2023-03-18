/* 
  aImportante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloStrings(array) {
  // La funcion llamada 'soloStrings' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los strings.
  // Ej:
  // soloStrings([1, 'Henry', 2, 'Toni']) debe retornar ['Henry', 'Toni']

  // Tu código aca:
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    if (typeof array[i] === 'string') newArray.push(array[i]);
  }
  return newArray;
  
}

// No modifiques nada debajo de esta linea //

module.exports = soloStrings