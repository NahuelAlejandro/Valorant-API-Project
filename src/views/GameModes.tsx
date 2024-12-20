import { useEffect, useState } from "react"
import { GameMode } from "../models/gameModesModel"
import { getGameModes } from "../services/services"

const GameModes = () => {
    const [data, setData] = useState<GameMode[]>([])
    useEffect(() => {
      getGameModes().then(data => setData(data))
    }, [])
  return (
    <section className="w-[90%] flex flex-col gap-5">
        <h2 className="text-white font-bold text-4xl font-mono lg:text-6xl">Game Modes</h2>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          {data.map(gameMode => (gameMode.description && gameMode.listViewIconTall) && (
            <li className="w-full h-[400px] md:h-[900px] relative group/card" key={gameMode.uuid}>
              <article className="w-full h-full flex">
                <img className="w-full object-cover " src={gameMode.listViewIconTall} alt={`image of ${gameMode.displayName}`} />
                <div className="absolute lg:group-hover/card:opacity-100 duration-500 ease-in-out lg:opacity-0 w-full h-full flex flex-col p-3 gap-2 justify-items-center bg-gradient-to-t from-black to-transparent">
                  {gameMode.displayIcon && <img className="w-10 self-end" src={gameMode.displayIcon} alt={`icon image of ${gameMode.displayName}`} />}
                  <div className="text-white grow flex flex-col justify-end gap-2 font-sans">
                    <p className="text-2xl md:3xl font-bold border-b-2 border-[#ff4655] font-mono lg:text-4xl">{gameMode.displayName}</p>
                    <p className="text-sm md:text-xl ">{gameMode.description}</p>
                  </div>
                </div>
              </article>
            </li>
          )
          )}
        </ul>
      </section>
  )
}

export default GameModes