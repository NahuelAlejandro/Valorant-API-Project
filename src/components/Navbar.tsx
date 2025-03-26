// import { Link, useLocation } from "react-router-dom"
// import { RiotIcon } from "./icons/Icons"

// const Navbar = () => {
//   const {pathname} = useLocation()
//   const links = [
//     { path: "/", title: "Home", isActive: "/" === pathname ? true: false },
//     { path: "/Agents", title: "Agents", isActive: "/Agents" === pathname ? true: false },
//     { path: "/Arsenal", title: "Arsenal", isActive: "/Arsenal" === pathname ? true: false }
//   ]
//   return (
//     <header className="w-full flex justify-center h-16 p-5 bg-black ">
//       <section className="flex justify-between w-[90%]">
//         <RiotIcon style="fill-[#eb0029] h-7 "/>
//         <nav className="text-white font-semibold font-mono">
//           <ul className="list-none p-0 flex gap-4 text-lg">
//           {links.map(link => <li key={link.title} className={`hover:text-[#eb0029] ${link.isActive ? "text-[#eb0029]": ""}`}><Link to={link.path}>{link.title}</Link></li>)}
//           </ul>
//         </nav>
//       </section>
//     </header>
//   )
// }

// export default Navbar


import { Link, useLocation } from "react-router-dom"
import { RiotIcon } from "./icons/Icons"
import { GiCrossedPistols } from "react-icons/gi"
import { GiCowled } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation()
  const links = [
    { path: "/", title: "Home", icon: <FaHome/>, isActive: "/" === pathname ? true : false },
    { path: "/Agents", title: "Agents", icon: <GiCowled/>, isActive: "/Agents" === pathname ? true : false },
    { path: "/Arsenal", title: "Arsenal", icon: <GiCrossedPistols/>, isActive: "/Arsenal" === pathname ? true : false }
  ]
  return (
    <header className="w-full flex justify-center h-16 p-5 bg-black ">
      <section className="flex justify-between w-[90%]">
        <RiotIcon style="fill-[#eb0029] h-7 " />
        <nav className="text-white md:flex md:items-center md:justify-end bg-stone-900 pt-2 md:py-2 z-[12] md:z-0 md:bg-black w-full font-semibold font-mono fixed bottom-0 left-0 md:static">
          <ul className="list-none p-0 flex justify-center items-center gap-5 md:gap-4 text-lg md:justify-end">
            {links.map(link =>
              <li key={link.title} className={`hover:text-[#eb0029] ${link.isActive ? "text-[#eb0029]" : ""}`}>
                <Link className={`flex flex-col gap-2 md:flex-row relative items-center ${
                  link.isActive? "after:content-[''] after:absolute after:w-2 after:h-[6px] after:-top-7 after:-right-1 after:rounded-es-lg after:border-l-2 after:border-b-2 after:border-stone-900 after:bg-transparent before:content-[''] before:absolute before:w-2 before:h-[6px] before:-top-7 before:-left-1 before:rounded-ee-lg before:border-r-2 before:border-b-2 before:border-stone-900 before:bg-transparent md:after:hidden md:before:hidden" 
                  : ""}`} to={link.path}>
                  <span className={`${link.isActive? "absolute -top-10 bg-stone-900 md:bg-black rounded-t-3xl w-full py-3 flex justify-center" : ""} md:static text-2xl md:text-lg`}>{link.icon}</span>
                  <span className={`${link.isActive? "opacity-100" : "opacity-0 "} md:opacity-100`}>{link.title}</span>
                </Link>
              </li>)}
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Navbar