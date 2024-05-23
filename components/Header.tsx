"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { Nav, NavMobile } from "@/components"

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8"
      }`}>
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link href={"#"} className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0">
          <Image 
            alt=""
            src="/assets/header/logo.svg"
            fill
            className="object-contain"
          />
        </Link>
        <Nav containerStyles="hidden xl:flex items-center gap-x-8" />
        <NavMobile />
        <div>menu btn</div>
        <div>socials</div>
      </div>
    </header>
  )
}
