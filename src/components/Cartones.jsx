/* import { useEffect } from "react"; */
import { useEffect, useState } from "react";
import { Espacios } from "./Espacios";
import { Diferentes } from "./Diferentes";
import { Numeros } from "./Numeros";
import { CheckDiferentes } from "./CheckDiferentes";
export const Cartones = () => {
  const [primeraLinea, setPrimeraLinea] = useState(() => {
    return Array(7).fill(1);
  });
  const [segundaLinea, setSegundaLinea] = useState(() => {
    return Array(7).fill(null);
  });
  const [terceraLinea, setTerceraLinea] = useState(() => {
    return Array(7).fill(null);
  });
  var lineaDeEspacios1 = Espacios();
  var lineaDeEspacios2 = Espacios();
  var lineaDeEspacios3 = Espacios();
  const espaciosBlancos = ({ espacio }) => {
    var newLinea = [...primeraLinea];
    for (let index = 0; index < 4; index++) {
      newLinea[espacio[index]] = null;
    }
    return newLinea;
  };

  var EspaceFirtsLine = espaciosBlancos({ espacio: lineaDeEspacios1 });
  var EspaceSecondLine = espaciosBlancos({ espacio: lineaDeEspacios2 });
  var EspaceThirdLine = espaciosBlancos({ espacio: lineaDeEspacios3 });

  var result = false;
  while (result == false) {
    result = Diferentes({
      newPrimeraLineaE: EspaceFirtsLine,
      newSegundaLineaE: EspaceSecondLine,
      newTerceraLineaE: EspaceThirdLine,
    });
    if (result == false) {
      EspaceFirtsLine = Espacios();
      EspaceSecondLine = Espacios();
      EspaceThirdLine = Espacios();
    } else {
      result = true;
    }
  }
  var formatedFirstLine = [1, 1, 1, 1, 1, 1, 1];
  var formatedSecondLine = [1, 1, 1, 1, 1, 1, 1];
  var formatedThirdLine = [1, 1, 1, 1, 1, 1, 1];
  for (let index = 0; index < 4; index++) {
    formatedFirstLine[EspaceFirtsLine[index]] = null;
    formatedSecondLine[EspaceSecondLine[index]] = null;
    formatedThirdLine[EspaceThirdLine[index]] = null;
  }
  const resultado1 = Numeros({ fila: formatedFirstLine });
  const resultado2 = Numeros({ fila: formatedSecondLine });
  const resultado3 = Numeros({ fila: formatedThirdLine });
  const mejor = CheckDiferentes({
    linea1: resultado1,
    linea2: resultado2,
    linea3: resultado3,
  });
  useEffect(() => {
    setPrimeraLinea(mejor[0]);
    setSegundaLinea(mejor[1]);
    setTerceraLinea(mejor[2]);
  }, []);

  return (
    <section>
      <div className="bg-gray-800 rounded-2xl md:p-10 p-3">
        <h1 className="text-4xl text-white">Carton</h1>
        <div className="grid grid-cols-7  bg-gray-200">
          {primeraLinea.map((primeraLinea, index) => (
            <div key={index} className="border border-sky-500 md:p-8 p-3">
              {primeraLinea}
            </div>
          ))}
          {segundaLinea.map((primeraLinea, index) => (
            <div key={index + 8} className="border border-sky-500 md:p-8 p-3">
              {primeraLinea}
            </div>
          ))}
          {terceraLinea.map((primeraLinea, index) => (
            <div key={index + 57} className="border border-sky-500 md:p-8 p-3">
              {primeraLinea}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
