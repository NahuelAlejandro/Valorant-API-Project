import { Link } from "react-router-dom"
import { Discord, Facebook, Instagram, RiotIcon, TwitterIcon, YouTube } from "./icons/Icons"
import rating from "../assets/images/rating.png"


const Footer = () => {
    const socialLinks = [
        { path: "https://x.com/valorantlatam", title: "Twitter", icon: <TwitterIcon /> },
        { path: "https://www.youtube.com/channel/UClfAp7i_XZXlkQSMQkRcmuQ", title: "YouTube", icon: <YouTube /> },
        { path: "https://www.instagram.com/valorantlatam/", title: "Instagram", icon: <Instagram /> },
        { path: "https://www.facebook.com/latamVALORANT/", title: "Facebook", icon: <Facebook /> },
        { path: "https://discord.com/invite/riotgameslatam", title: "Discord", icon: <Discord /> }
    ]
    const ratingsText = ["Blood", "Language", "Violence", "Users Interact", "In-Game Purchases"]
    return (
        <footer className="w-full flex flex-col items-center gap-5">
            <div className="flex flex-col gap-3 md:flex-row justify-center items-center md:gap-5 text-white bg-stone-700 w-full min-h-20 py-2">
                <Link className="text-lg py-1 px-3 hover:bg-stone-500 rounded-lg" to={"https://playvalorant.com/en-us/platform-selection/"}>Download Game Client</Link>
                <Link className="text-lg py-1 px-3 hover:bg-stone-500 rounded-lg" to={"https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&referrer=singular_click_id%3D4106a1fc-a79a-4ea0-9289-6684d9dc3257"}>Download Riot Mobile Companion App</Link>
            </div>
            <div className="flex flex-col items-center w-[90%] py-10 gap-8">
                <ul className="list-none flex gap-4">
                    {socialLinks.map(link => (
                        <li className="w-12 p-2 bg-stone-700 hover:bg-stone-500 rounded-lg content-center " key={link.title}>
                            <Link className="h-full lg:text-lg" to={link.path} title={link.title}>{link.icon}</Link>
                        </li>
                    ))}
                </ul>
                <Link to={"https://playvalorant.com/en-us/"}>
                    <RiotIcon style="fill-stone-700 hover:fill-white h-10 cursor-pointer lg:h-12" />
                </Link>
                <p className="text-stone-700 lg:text-xl">© 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT y todos los logotipos relacionados son marcas y nombres comerciales, marcas de servicio o marcas registradas de Riot Games, Inc.</p>
                <article className="flex p-2 gap-4 bg-stone-700 rounded-lg">
                    <img src={rating} alt="" />
                    <ul>
                        {ratingsText.map(text => <li className="text-white font-semibold " key={text}>{text}</li>)}
                    </ul>
                </article>
            </div>
        </footer>
    )
}

export default Footer