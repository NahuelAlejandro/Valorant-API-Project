import { useEffect, useState } from 'react'
import { getArsenal } from '../services/services'
import LayoutMain from '../views/LayoutMain'
import { Weapon } from '../models/weaponModel'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import knife from "../assets/images/knife.png"
import rifle from "../assets/images/rifle.png"
import shotgun from "../assets/images/shotgun.png"
import pistol from "../assets/images/pistol.png"
import sniper from "../assets/images/sniper.png"
import SMG from "../assets/images/SMG.png"
import heavyWeapon from "../assets/images/heavy-weapon.png"

const Arsenal = () => {
    useSEO({ title: "Arsenal" })
    const [weapons, setWeapons] = useState<Weapon[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        getArsenal().then(data => {
            setLoading(true)
            setWeapons(data)
            setLoading(false)
        })
    }, [])

    const categoryIcon =(category: string):string =>{
        if(category === "Rifles"){
            return rifle
        }
        if(category === "Shotguns"){
            return shotgun
        }
        if(category === "Pistols"){
            return pistol
        }
        if(category === "Sniper Rifles"){
            return sniper
        }
        if(category === "SMGs"){
            return SMG
        }
        if(category === "Heavy Weapons"){
            return heavyWeapon
        }
        return knife
    }
    return (
        <LayoutMain>
            <section className='text-white w-[90%] flex flex-col '>
                {loading && <div className="w-full min-h-[35vh] font-mono text-3xl flex justify-center items-center text-white">Loading...</div> ||
                    <>
                        <h2 className='text-white text-6xl font-mono '>Choose your Weapon</h2>
                        <ul className='w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 py-10'>
                            {weapons.map(weapon => (
                                <li className='h-[300px] w-full' key={weapon.uuid}>
                                    <Link to={`/Arsenal/${weapon.uuid}`}>
                                        <article className='h-full w-full flex flex-col justify-between bg-stone-900 group group/weapon p-2 relative'>
                                            <img className='object-contain grow max-h-60 p-2 md:sepia-[70%] group-hover/weapon:sepia-0' src={weapon.displayIcon} alt={`image of ${weapon.displayName}`} />
                                            <div className=' w-32 h-10 absolute rounded-ss-lg rounded-se-lg border-t-4 border-l-4 border-stone-900 right-2 z-10 bottom-12 bg-stone-300 group-hover/weapon:bg-stone-400 flex justify-center items-center gap-1'>
                                                <img className='w-6 h-5' src={categoryIcon(weapon.shopData?.category)} alt="" />
                                                <small className='text-[#eb0029]'>{weapon.shopData?.category || "Knife"}</small>
                                            </div>
                                                <h3 className='py-1 px-2 w-full text-black font-bold text-2xl bg-stone-300 rounded-s-lg rounded-ee-lg group-hover/weapon:bg-stone-400 relative
                                            after:content-[""] after:rounded-ee-lg after:absolute after:w-2 after:h-2 after:bg-transparent after:right-[120px] after:bottom-[36px] after:z-[11] after:border-stone-300 after:group-hover/weapon:border-stone-400 after:border-b-4 after:border-r-4'>{weapon.displayName}</h3>
                                        </article>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>}
            </section>
        </LayoutMain>
    )
}

export default Arsenal