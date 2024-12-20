import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAgent } from "../services/services"
import { Agent } from "../models/agentModel"
import LayoutMain from "../views/LayoutMain"
import { useSEO } from "../hooks/useSEO"

const AgentCharacter = () => {
  const params = useParams()
  const [agent, setAgent] = useState<Agent>({} as Agent)
  useSEO({title: `${agent.displayName}`})
  const [ selectedAbility, setSelectedAbility]= useState<string>("")
  useEffect(() => {
    const { id } = params
    getAgent(id).then((data) => {
      const ability = data?.abilities[0].slot
      setAgent(data)
      setSelectedAbility(ability)
    })
  }, [])
  return (
    <LayoutMain>

   
    <section className="bg-zinc-950 min-h-screen text-white flex flex-col items-center pb-10">
      <article className="bg-black grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-5 items-center w-full overflow-hidden relative font-mono">
        <img className="col-span-2" src={agent.background} alt={`${agent.displayName} name image`} />
        <img className="col-span-3" src={agent.fullPortraitV2} alt={`image of ${agent.displayName}`} />
        <div className="bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent absolute top-0 left-0 w-full h-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <article className="w-full px-8 md:px-16 flex flex-col justify-center gap-6 lg:gap-12">
            <h2 className="text-5xl font-bold border-b-2 border-red-500 lg:text-6xl">{agent.displayName}</h2>
            <p className="text-lg font-semibold font-sans lg:text-xl">{agent.description}</p>
            <div className=" border-red-500 p-2 border rounded-md flex gap-5 w-fit items-center bg-black/70 self-center">
              <img className="w-10" src={agent.role?.displayIcon} alt={`icon image of ${agent.role?.displayName}`} />
              <div className="flex flex-col">
                <span className="text-2xl">Rol</span>
                <p className="font-semibold text-red-500 ">{agent.role?.displayName}</p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <section className="w-[90%] grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-5 py-10">
        <article className="p-14 flex flex-col gap-16 w-full items-center bg-black rounded-lg">
          <h3 className="text-4xl font-bold self-start font-mono lg:text-6xl">Special Abilities</h3>
          
          <ul className="grid grid-cols-2 w-fit rotate-45 gap-2 p-5">
            {agent.abilities?.map(ability => {
              if(ability.displayIcon){
                return (
                  <li key={ability.slot}>
                    <article className="border-4 border-white p-3 bg-red-500 group/ability hover:bg-red-300 relative cursor-pointer" onClick={()=>{setSelectedAbility(ability.slot)}}>
                      <img className="lg:w-20 w-10 -rotate-45 " src={ability.displayIcon} alt={`image of ${ability.displayName}`} />
                      <span className="hidden absolute text-balance text-center w-full h-full top-0 left-0 group-hover/ability:flex items-center justify-center -rotate-45 text-red-600 text-base font-bold font-sans">{ability.displayName}</span>
                    </article>
                  </li>)
              }
            })}
          </ul>
        
        </article>
        <article className="p-14 flex flex-col gap-16 bg-black rounded-lg">
          <h3 className="text-4xl font-bold self-start font-mono lg:text-6xl">Description</h3>
          {agent.abilities?.map(ability => {
            if(ability.slot === selectedAbility){
             return (
             <div className="flex flex-col gap-3" key={ability.slot}>
              <h4 className="text-xl font-semibold text-red-500 font-sans lg:text-2xl">{ability.displayName}</h4>
              <p className="text-balance font-sans lg:text-lg" key={ability.slot}>{ability.description}</p>
             </div>)
            } 
          })}
        </article>
      </section>

    </section> 
    </LayoutMain>
  )
}

export default AgentCharacter