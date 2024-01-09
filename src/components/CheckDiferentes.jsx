export const CheckDiferentes = ({ linea1, linea2, linea3 }) => {
  var chico = 0;
  var grande = 9;
  let result = true;
  while (result == true) {
    for (let primer = 0; primer < linea1.length; primer++) {
      if (linea1[primer] == linea2[primer]) {
        if (linea1[primer] !== null) {
          let numeroAleatorio = Math.floor(
            Math.random() * (grande - chico) + chico
          );
          linea1[primer] = numeroAleatorio;
          console.log();
        }
      }
      if (linea2[primer] == linea3[primer]) {
        if (linea2[primer] != null) {
          let numeroAleatorio = Math.floor(
            Math.random() * (grande - chico) + chico
          );
          linea2[primer] = numeroAleatorio;
          console.log();
        }
      }
      chico = chico + 10;
      grande = grande + 10;
    }
    result = false;
  }
  return [linea1, linea2, linea3];
};
