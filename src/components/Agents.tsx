import { useEffect, useState } from 'react'

import AgentCard from './AgentCard';
import { Agent } from '../models/agentModel';
import { getAgents } from '../services/services';
import { Link } from 'react-router-dom';
import LayoutMain from '../views/LayoutMain';
import { useSEO } from '../hooks/useSEO';


const Agents = () => {
    useSEO({ title: "Agents" })
    const [agents, setAgents] = useState<Agent[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        getAgents().then(data => {
            setLoading(true)
            setAgents(data)
            setLoading(false)
        })
    }, [])

    return (
        <LayoutMain>
            <section className='w-[90%] grow flex flex-col '>
                {loading && <div className="w-full min-h-[35vh] font-mono text-3xl flex justify-center items-center text-white"> Loading...</div> ||
                    <>
                        <h2 className="text-white text-6xl font-mono self-start ">Agents</h2>
                        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 py-10'>
                            {agents.length > 0 && agents.map((agent: Agent) =>
                                <li key={agent.uuid}>
                                    <Link className='w-full h-fit' to={`/Agent/${agent.uuid}`}>
                                        <AgentCard>
                                            <img className='object-cover rounded-s-lg rounded-se-lg md:sepia-[70%] group-hover/item:sepia-0' src={agent.displayIcon} alt={`image of ${agent.displayName}`} />
                                            <article className='p-2 w-32 absolute rounded-ss-lg rounded-se-lg border-t-4 border-l-4 border-stone-900 right-2 z-10 bottom-12 bg-stone-300 group-hover/item:bg-stone-400 flex justify-center items-center gap-2'>
                                                <img className='w-5 h-5' src={agent.role.displayIcon} alt="" />
                                                <small className='font-semibold text-[#ff4655]'>{agent.role.displayName}</small>
                                            </article>
                                            <h2 className='py-1 px-2 w-full font-bold text-2xl bg-stone-300 rounded-s-lg rounded-ee-lg group-hover/item:bg-stone-400 relative
                                            after:content-[""] after:rounded-ee-lg after:absolute after:w-2 after:h-2 after:bg-transparent after:right-[120px] after:bottom-[36px] after:z-[11] after:border-stone-300 after:group-hover/item:border-stone-400 after:border-b-4 after:border-r-4
                                            before:content-[""] before:rounded-se-lg before:absolute before:w-3 before:h-2 before:bg-stone-300 before:group-hover/item:bg-stone-400 before:-right-[4px] before:bottom-[72px] before:z-[11] before:border-stone-900 before:border-t-4 before:border-r-4' >{agent.displayName} </h2>
                                        </AgentCard>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </>}
            </section>
        </LayoutMain>
    )
}

export default Agents