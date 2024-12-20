import axios from "axios"
// import { Agent } from "../models/agentModel"

export const getAgents = async()=>{
    const agents = await axios('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
    const {data} = agents.data

    // const mapedAgents = data.map((agent:Agent) => ({
    //     id: agent.uuid,
    //     abilities: agent.abilities,
    //     displayIcon: agent.displayIcon,
    //     name: agent.displayName,
    //     image: agent.fullPortraitV2,
    //     role: agent.role,
    //     description: agent.description
    // }))
    return data
}
export const getAgent = async(id: string | undefined)=>{
    const agents = await axios(`https://valorant-api.com/v1/agents/${id}?isPlayableCharacter=true`)
    const {data} = agents.data
    return data
}
export const getGameModes =async ()=>{
    const {data} = await axios("https://valorant-api.com/v1/gamemodes")
    return data.data
}
export const getArsenal= async()=>{
 const {data} = await axios("https://valorant-api.com/v1/weapons")
 return data.data
}
export const getWeapon =async(id: string | undefined)=>{
    const {data} = await axios(`https://valorant-api.com/v1/weapons/${id}`)
    return data.data
}