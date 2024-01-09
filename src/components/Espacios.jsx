export function Espacios() {
  var diferents = true;
  const linea = [];
  while (diferents) {
    const randomValue = Math.floor(Math.random() * 7);
    if (!linea.includes(randomValue)) {
      linea.push(randomValue);
    }
    if (linea.length === 4) {
      diferents = false;
    }
  }
  return linea;
}
