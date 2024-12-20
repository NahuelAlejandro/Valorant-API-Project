import { useEffect } from "react";
interface Props {
    title: string
}
export const useSEO =({title}: Props)=>{
    useEffect(()=>{
        document.title = `Valorant API| ${title}`
    },[title])
}