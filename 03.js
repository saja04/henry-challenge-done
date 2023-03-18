/* 
  aImportante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function cuentaPorFavor(comidas) {
  // La funcion 'cuentaPorFavor' recibe como argumento un array de objetos llamado 'comidas'
  // Cada objeto tiene una propiedad 'nombre' ,'precio' y 'cantidad'.
  // La funcion debe devolver el precio total de las comidas consumidas.
  // var comidas = [
  //   {
  //     nombre: 'pizza',
  //     cantidad: 6,
  //     precio: 5
  //   },
  //   {
  //     nombre: 'coca-cola',
  //     cantidad: 3,
  //     precio: 1
  //   }
  // ]
  // cuentaPorFavor(comidas) devuelve => 33

  // Tu código aca:

  //var objeto1 = comidas[1];
  //var objeto2 = comidas[2];
  var sumas = 0;
  for (var i = 0; i < comidas.length; i++){
    var ecuacion = comidas[i].precio * comidas[i].cantidad
    sumas += ecuacion
  }
  return sumas;
  //for (var i = 0; i < 1; i++){
  //  var precios2 = (objeto2[i].precio) * (objeto2[i].cantidad);
  //}

  //var resultado = precios1 + precios2;
  return ;

  
}

// No modifiques nada debajo de esta linea //

module.exports = cuentaPorFavor