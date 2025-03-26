import { ReactNode } from "react"


const AgentCard = ({children}: {children:ReactNode} ) => {
  return (
    <article className="w-full h-full gap-1 p-2 bg-stone-900 rounded-lg font-mono group/item hover:cursor-pointer flex flex-col overflow-hidden relative 
    after:content-[''] after:rounded-ee-lg after:absolute after:w-2 after:h-2 after:bg-transparent after:right-[134px] after:bottom-[50px] after:z-[11] after:block after:border-stone-900 after:hover:border-stone-900 after:border-b-2 after:border-r-2
    before:content-[''] before:rounded-ee-lg before:absolute before:w-3 before:h-2 before:bg-transparent before:right-[4px] before:bottom-[84px] before:z-[11] before:block before:border-stone-900 before:hover:border-stone-900 before:border-b-4 before:border-r-4">
      {children}
    </article>
  )
}

export default AgentCard