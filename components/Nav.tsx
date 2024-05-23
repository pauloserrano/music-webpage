"use client"

import { useContext } from "react"
import { Link } from "react-scroll"
import { useMediaQuery } from "react-responsive"
import { NavContext } from "@/context/NavContext"

const links = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "tours",
    name: "Tours",
  },
  {
    path: "discography",
    name: "Discography",
  },
  {
    path: "contact",
    name: "Contact",
  },
]

interface NavProps {
  containerStyles?: string
  linkStyles?: string
}

export const Nav = ({ containerStyles, linkStyles }: NavProps) => {
  const { setIsOpen } = useContext(NavContext)
  const isDesktop = useMediaQuery({ query: "(min-width: 1310px)" })

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, id) => (
        <Link
          key={id}
          to={link.path}
          offset={-50}
          activeClass="active"
          smooth={!isDesktop ? false : true }
          spy
          className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
          onClick={() => !isDesktop && setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
