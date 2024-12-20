import { useEffect, useState } from 'react'

import AgentCard from './AgentCard';
import { Agent } from '../models/agentModel';
import { getAgents } from '../services/services';
import { Link } from 'react-router-dom';
import LayoutMain from '../views/LayoutMain';


const Agents = () => {
    const [agents, setAgents] = useState<Agent[]>([]);
    useEffect(() => {
        getAgents().then(data => setAgents(data))
    }, [])

    return (
        <LayoutMain>
            <section className='w-[90%] grow flex flex-col '>
                <h2 className="text-white text-6xl font-mono self-start ">Agents</h2>
                <ul className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 py-10'>
                    {agents.length > 0 && agents.map((agent: Agent) =>
                        <li  key={agent.uuid}>
                            <Link className='w-full h-fit' to={`/Agent/${agent.uuid}`}>
                                <AgentCard>
                                    <img className='group-hover/item:scale-110 rounded-full' src={agent.displayIcon} alt={`image of ${agent.displayName}`} />
                                    <article className='w-full p-2 z-10 bg-stone-200 flex justify-between group-hover/item:bg-gray-400 '>
                                        <h2 className='font-bold text-2xl' >{agent.displayName} </h2>
                                        <small className='font-semibold text-[#ff4655]'>{agent.role.displayName}</small>
                                    </article>
                                </AgentCard>
                            </Link>
                        </li>
                    )}
                </ul>
            </section>
        </LayoutMain>
    )
}

export default Agents