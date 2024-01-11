/* import { useEffect } from "react"; */
import { useEffect, useState } from "react";
import { Espacios } from "./Espacios";
import { Diferentes } from "./Diferentes";
import { Numeros } from "./Numeros";
import { CheckDiferentes } from "./CheckDiferentes";
import { WinnerModal } from "./Winner";
import ConfettiExplosion from "react-confetti-explosion";
export const Cartones = () => {
  const [numberBolillero, setNumberBolillero] = useState(0);
  const [resetGame, setResetGame] = useState(false);
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const [primeraLinea, setPrimeraLinea] = useState(() => {
    return Array(7).fill(1);
  });
  const [segundaLinea, setSegundaLinea] = useState(() => {
    return Array(7).fill(null);
  });
  const [terceraLinea, setTerceraLinea] = useState(() => {
    return Array(7).fill(null);
  });


  const espaciosBlancos = ({ espacio }) => {
    var newLinea = [...primeraLinea];
    for (let index = 0; index < 4; index++) {
      newLinea[espacio[index]] = null;
    }
    return newLinea;
  };
  const color = (background) => {
    if (background === null) {
      return "bg-blue-500";
    }
    if (background >= 0) {
      return "bg-gray-300";
    }
    if (background === undefined) {
      return "bg-green-500";
    }
  };
  const checkExist = () => {
    setNumberBolillero(Math.floor(Math.random() * (69 - 0) + 0));
    let result = false;
    setRound(round + 1);
    let index = 0;
    primeraLinea.forEach((element) => {
      index = index + 1;
      if (element === numberBolillero) {
        let newPrimeraLinea = [...primeraLinea];
        index = index - 1;
        newPrimeraLinea[index] = undefined;
        result = true;
        setPrimeraLinea(newPrimeraLinea);
      }
    });
    index = 0;
    if (result == false) {
      segundaLinea.forEach((element) => {
        index = index + 1;
        if (element === numberBolillero) {
          let newSegundaLinea = [...segundaLinea];
          index = index - 1;
          newSegundaLinea[index] = undefined;
          result = true;
          setSegundaLinea(newSegundaLinea);
        }
      });
    }
    index = 0;
    if (result == false) {
      terceraLinea.forEach((element) => {
        index = index + 1;
        if (element === numberBolillero) {
          let newTerceraLinea = [...terceraLinea];
          index = index - 1;
          newTerceraLinea[index] = undefined;
          result = true;
          setTerceraLinea(newTerceraLinea);
        }
      });
    }
    const ganador = Winner();
    if (ganador)  {
      setWinner(ganador);
      setIsExploding(true);
    } 
  };

  useEffect(() => {
    setRound(0);
    var lineaDeEspacios1 = Espacios();
    var lineaDeEspacios2 = Espacios();
    var lineaDeEspacios3 = Espacios();

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

    setPrimeraLinea(mejor[0]);
    setSegundaLinea(mejor[1]);
    setTerceraLinea(mejor[2]);
  }, [resetGame]);

  const Winner = () => {
    if (
      primeraLinea.every((element) => element === null || element === undefined)
    ) {
      if (
        segundaLinea.every(
          (element) => element === null || element === undefined
        )
      ) {
        if (
          terceraLinea.every(
            (element) => element === null || element === undefined
          )
        ) {
          setIsExploding(true);
          return true;
        }
      }
    }
  };
  return (
    <section>
      
      <div className="bg-gray-800 rounded-2xl md:p-10 p-3">
        <h1 className="text-4xl text-white">Carton</h1>
       
        <div className="grid grid-cols-7  bg-gray-200">
        
          {primeraLinea.map((primeraLinea, index) => (
            <div
              key={index}
              className={`min-h-[50px] border border-sky-500 md:p-8 p-3  ${color(
                primeraLinea
              )}`}
            >
              {primeraLinea}
            </div>
          ))}
          {segundaLinea.map((segundaLinea, index) => (
            <div
              key={index + 8}
              className={`min-h-[50px] border border-sky-500 md:p-8 p-3  ${color(
                segundaLinea
              )} `}
            >
              {segundaLinea}
            </div>
          ))}
          {terceraLinea.map((terceraLinea, index) => (
            <div
              key={index + 57}
              className={`min-h-[50px] border border-sky-500 md:p-8 p-3  ${color(
                terceraLinea
              )}`}
            >
              {terceraLinea}
            </div>
          ))}
        </div>
        <button
          onClick={checkExist}
          className="p-2 bg-fuchsia-900 rounded-md mt-3 justify-center"
        >
          Generar una bolilla
        </button>
        <p className="text-3xl text-white"> Bolilla: {numberBolillero}</p>

        <button
          onClick={() => {
            setResetGame(!resetGame);
          }}
          className="p-2 bg-fuchsia-900 rounded-md mt-3 justify-center"
        >
          Resetear partida
        </button>
        <p className="text-3xl text-white"> Ronda: {round}</p>
      </div>
      {isExploding && <ConfettiExplosion style={{ position: "absolute", zIndex: "1000", top: "40%", left: "50%"  }  }/>}
      <WinnerModal ganador={winner} > </WinnerModal>
      
    </section>
  );
};
