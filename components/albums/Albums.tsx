"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { AlbumSlider } from "./AlbumSlider"
import { SectionHeader } from "@/components"


export interface IAlbum {
  id: number,
  img: string,
  name: string,
  tracks: {
    name: string
    src: string
  }[]
}

export const Albums = () => {
  return (
    <section id="discography" className="section">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} 
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  )
}
