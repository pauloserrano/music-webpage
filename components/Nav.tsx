"use client"

import { Link } from "react-scroll"

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
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, id) => (
        <Link
          key={id}
          to={link.path}
          offset={-50}
          activeClass="active"
          smooth
          spy
          className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
