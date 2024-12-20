import { useEffect, useState } from "react"
import LayoutMain from "../views/LayoutMain"
import { getWeapon } from "../services/services"
import { useParams } from "react-router-dom"
import type { Weapon } from "../models/weaponModel"
import { useSEO } from "../hooks/useSEO"

const Weapon = () => {
    const [weapon, setWeapon] = useState({} as Weapon)
    const [loading, setLoading] = useState<boolean>(false)
    useSEO({title: `${weapon.displayName}`})
    const { id } = useParams()

    useEffect(() => {
        getWeapon(id).then(data => {
            setLoading(true)
            setWeapon(data)
            setLoading(false)
        })
    }, [])
    return (
        <LayoutMain>
            <section className="w-[90%] grow py-5 text-white flex flex-col gap-4">
                {loading && <div className="w-full min-h-[35vh] font-mono text-3xl flex justify-center items-center text-white"> Loading...</div> ||
                    <>
                        <h2 className=" text-6xl font-mono">{weapon?.displayName}</h2>
                        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center justify-center">
                            <img className="object-cover px-4" src={weapon?.displayIcon} alt="" />
                            <table className=" w-full">
                                <thead className="bg-stone-700 text-3xl rounded-lg">
                                    <tr>
                                        <th colSpan={2}>
                                            Stats
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-lg bg-stone-600">
                                    <tr>
                                        <th>Cost</th>
                                        <td>{weapon.shopData?.cost}</td>
                                    </tr>
                                    <tr>
                                        <th>Fire Rate</th>
                                        <td>{weapon.weaponStats?.fireRate}</td>
                                    </tr>
                                    <tr>
                                        <th>Run Speed Multiplier</th>
                                        <td>{weapon.weaponStats?.runSpeedMultiplier}</td>
                                    </tr>
                                    <tr>
                                        <th>equip Time Seconds</th>
                                        <td>{weapon.weaponStats?.equipTimeSeconds}</td>
                                    </tr>
                                    <tr>
                                        <th>Reload Time Seconds</th>
                                        <td>{weapon.weaponStats?.reloadTimeSeconds}</td>
                                    </tr>
                                    <tr>
                                        <th>first Bullet Accuracy</th>
                                        <td>{weapon.weaponStats?.firstBulletAccuracy}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <section className="flex flex-col gap-5">
                            <h2 className='text-white text-6xl font-mono '>Skins</h2>
                            <ul className="w-full grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] list-none gap-5">
                                {weapon.skins?.map(skin => !skin.displayName.includes("Standard") && skin.displayIcon && (
                                    <li className="p-0 bg-black overflow-hidden" key={skin.uuid}>
                                        <article className="flex flex-col h-full">
                                            <img className="h-full object-contain" src={skin.displayIcon} alt="" />
                                            <h3 className="text-lg bg-stone-200 text-black">{skin.displayName}</h3>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </>}
            </section>
        </LayoutMain>
    )
}

export default Weapon