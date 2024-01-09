export function Diferentes({
  newPrimeraLineaE,
  newSegundaLineaE,
  newTerceraLineaE,
}) {
  var resultado = true;
  for (let primer = 0; primer < newPrimeraLineaE.length; primer++) {
    for (let segunda = 0; segunda < newSegundaLineaE.length; segunda++) {
      for (let tercera = 0; tercera < newTerceraLineaE.length; tercera++) {
        if (
          newPrimeraLineaE[primer] == newSegundaLineaE[segunda] &&
          newSegundaLineaE[segunda] == newTerceraLineaE[tercera]
        ) {
          resultado = false;
        }
      }
    }
  }
  return resultado;
}
