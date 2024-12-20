import Hero from "../components/hero/Hero"
import LayoutMain from "./LayoutMain"
import agentsImg from "../assets/images/agent-img.webp"
import { Link } from "react-router-dom"
import GameModes from "./GameModes"
import arsenalImage from "../assets/images/arsenal.png"
import { useSEO } from "../hooks/useSEO"
const Home = () => {
useSEO({title: "Home"})
  return (
    <LayoutMain>
      <Hero />
      <section className="w-[90%] text-white grid grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 gap-5 py-10">
        <img className="object-cover" src={agentsImg} alt="image of agents" />
        <div className="flex flex-col justify-center gap-4 lg:gap-6 px-10">
          <h2 className="text-4xl border-b-2 border-[#ff4655] font-bold font-mono lg:text-6xl">YOUR AGENTS</h2>
          <p className="text-xl font-sans lg:text-2xl">CREATIVITY IS YOUR GREATEST WEAPON.</p>
          <p className="text-pretty font-sans lg:text-xl">More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.</p>
          <Link className="bg-[#ff4655] w-fit py-1 px-3 font-bold outline-1 outline-offset-4 outline self-center md:self-start hover:bg-[#fd6773] hover:outline-[#ff4655] lg:text-xl" to={"/Agents"}>
            VIEWS ALL AGENTS
          </Link>
        </div>
      </section>
      <section className="w-[90%] text-white grid grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 gap-5 py-10">
        <img className="object-cover" src={arsenalImage} alt="image of agents" />
        <div className="flex flex-col justify-center gap-4 lg:gap-6 px-10 lg:order-first">
          <h2 className="text-4xl border-b-2 border-[#ff4655] font-bold font-mono lg:text-6xl">YOUR WEAPONS</h2>
          <p className="text-xl font-sans lg:text-2xl">IN VALORANT, STRATEGY AND PRECISION DEFINE VICTORY.</p>
          <p className="text-pretty font-sans lg:text-xl">Your weapon is just as crucial as your Agent. With a variety of firearms suited for different combat styles, mastering your arsenal is key. Whether it's the steady power of a rifle or the speed of a pistol, every shot counts. Choose wisely, and let your skill decide the game.</p>
          <Link className="bg-[#ff4655] w-fit py-1 px-3 font-bold outline-1 outline-offset-4 outline self-center md:self-start hover:bg-[#fd6773] hover:outline-[#ff4655] lg:text-xl" to={"/Arsenal"}>
          VISIT THE ARSENAL
          </Link>
        </div>
      </section>
     <GameModes/>
      
    </LayoutMain>
  )
}

export default Home