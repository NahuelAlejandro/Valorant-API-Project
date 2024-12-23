import { useEffect, useState } from 'react'
import { getArsenal } from '../services/services'
import LayoutMain from '../views/LayoutMain'
import { Weapon } from '../models/weaponModel'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

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
                                        <article className='h-full w-full flex flex-col justify-between bg-black'>
                                            <img className='object-contain grow max-h-60 p-2' src={weapon.displayIcon} alt={`image of ${weapon.displayName}`} />
                                            <div className='bg-stone-200 flex justify-between px-5 py-2'>
                                                <h3 className='text-2xl text-black'>{weapon.displayName}</h3>
                                                <small className='text-[#eb0029]'>{weapon.shopData?.category}</small>
                                            </div>
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