"use client"
import { usePathname } from "next/navigation"
import { NavLink } from "../interface"
import { useState,useEffect,useRef } from "react"
import Image from "next/image"
import Link from "next/link"
function Nav() {
  const pathname = usePathname()
  const menuRef=useRef<HTMLDivElement|null>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [])
  const ArrLink: Array<NavLink> = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Academics",
      path: "/academics"
    },
    {
      name: "Admissions",
      path: "/admissions"
    },
    {
      name: "Student Life",
      path: "/studentLife"
    },
    {
      name: "Contact",
      path: "/contact"
    },

  ]
  return (
    <nav className="flex justify-between mt-3.5 border-2 rounded-lg relative">
      <div className="w-[195.29px] h-full bg-Orang-65 rounded-tl-lg rounded-bl-lg max-[600px]:w-[130.29px]">
        <Image src="/Img/Logo.png"
          alt="any"
          width={182.6933135986328}
          height={40}
          className="py-5 px-6 max-[600px]:px-2" />
      </div>
      <div className="flex max-[1250px]:hidden">
        {
          ArrLink.map((item, index) => {
            const islast: boolean = index === ArrLink.length - 1;
            const isActive = pathname === item.path
            return (
              <Link
                key={index}
                href={item.path} className={`
                    ${islast ? "bg-Orange-75 rounded-tr-lg rounded-br-lg" : ""}
                    ${isActive && !islast ? "bg-Orange-95" : ""}
                    ${"px-8.5 border-l-2 py-4.25 h-full text-[20px]"}`}>
                {item.name}
              </Link>)
          })}
      </div>
      <div className="min-[1249.99px]:hidden flex items-center px-8 bg-Orange-95 rounded-tr-lg rounded-br-lg border-l-2">
        <button onClick={() => setOpen(!open)} >
          <Image
            src="/Img/IconNav.png"
            alt="Menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </button>
      </div>
      {open && (
        <div ref={menuRef} className="min-[1249.99px]:hidden flex flex-col absolute right-0 -bottom-99.5 z-1 max-[600px]:-bottom-88">
          {ArrLink.map((item, index) => {
            const islast: boolean = index === ArrLink.length - 1;
            const isActive = pathname === item.path
            return (
              <Link
                key={index}
                href={item.path} className={`
                    ${islast ? "bg-Orange-75" : ""}
                    ${isActive && !islast ? "bg-Orange-95" : ""}
                    ${"px-8.5 border-b-2 border-r-2 border-l-2 py-4.25 h-full text-[20px] max-[600px]:text-[15px] "}`}
                    onClick={() => setOpen(!open)}>
                {item.name}
              </Link>)
          })}
        </div>
      )}
    </nav>
  )
}

export default Nav