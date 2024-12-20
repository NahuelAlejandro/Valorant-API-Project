import video from "../../assets/videos/hero-video-1.mp4"
import valorantLogo from "../../assets/images/valorant-logo.webp"
const Hero = () => {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative ">
        <video className="h-full w-full object-fill object-center " src={video} loop autoPlay muted>
        </video>
        <article className="absolute top-0 flex flex-col bg-black/70 w-full h-full justify-center items-center gap-10 md:gap-20 ">
            <p className=" text-center text-pretty font-sans text-white md:text-lg lg:text-2xl">A 5v5 character-based tactical shooter</p>
            <img className="w-52 md:w-80" src={valorantLogo} alt="" />
        </article>
    </div>
  )
}

export default Hero