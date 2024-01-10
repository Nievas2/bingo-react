export function WinnerModal({ ganador }) {
  if (ganador) {
    return (
      <section className="winner ">
        <div className="bg-gray-300 rounded-3xl">
          <div className="text-2xl ">
            <header className="win p-3">
              <h1>Juego termiando, ¡Ganaste!</h1>
            </header>
            <div className="flex justify-center m-3">
              <button className="p-2 bg-gray-900 rounded-md flex space-x-0 text-white" onClick={() => window.location.reload()}>
                Jugar de nuevo
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
