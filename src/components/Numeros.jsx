export const Numeros = ({ fila }) => {
  var chico = 0;
  var grande = 9;
  var resultado = [];
  for (let index = 0; index < 7; index++) {
    if (fila[index] != null) {
      let numeroAleatorio = Math.floor(
        Math.random() * (grande - chico) + chico
      );
      resultado.push(numeroAleatorio);
      chico = chico + 10;
      grande = grande + 10;
    } else {
      chico = chico + 10;
      grande = grande + 10;
      resultado.push(null);
    }
  }
  return resultado;
};
