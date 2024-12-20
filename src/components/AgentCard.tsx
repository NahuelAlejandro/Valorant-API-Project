import { ReactNode } from "react"


const AgentCard = ({children}: {children:ReactNode} ) => {
  return (
    <article className="w-full h-full border border-[#ff4655] rounded-lg font-mono group/item hover:cursor-pointer flex flex-col items-center bg-slate-950 overflow-hidden">
      {children}
    </article>
  )
}

export default AgentCard