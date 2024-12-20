import { Link, useLocation } from "react-router-dom"
import { RiotIcon } from "./icons/Icons"

const Navbar = () => {
  const {pathname} = useLocation()
  const links = [
    { path: "/", title: "Home", isActive: "/" === pathname ? true: false },
    { path: "/Agents", title: "Agents", isActive: "/Agents" === pathname ? true: false },
    { path: "/Arsenal", title: "Arsenal", isActive: "/Arsenal" === pathname ? true: false }
  ]
  return (
    <header className="w-full flex justify-center h-16 p-5 bg-black ">
      <section className="flex justify-between w-[90%]">
        <RiotIcon style="fill-[#eb0029] h-7 "/>
        <nav className="text-white font-semibold font-mono">
          <ul className="list-none p-0 flex gap-4 text-lg">
          {links.map(link => <li key={link.title} className={`hover:text-[#eb0029] ${link.isActive ? "text-[#eb0029]": ""}`}><Link to={link.path}>{link.title}</Link></li>)}
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Navbar