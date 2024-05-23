"use client"

import Image from "next/image"
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { IEvent } from "@/components"


function getLocationSequence(events: IEvent[]): (string | number)[] {
  const locationSequence: (string | number)[] = []

  for(let i = 0; i < events.length; i++) {
    locationSequence.push(`${events[i].location.city}, ${events[i].location.country}`)
    locationSequence.push(3000)
  }
  
  return locationSequence
}

interface HeroProps {
  events: IEvent[]
}

export const Hero = ({ events }: HeroProps) => {
  const locationSequence = getLocationSequence(events)

  return (
    <section className="h-[80vh] xl:h-[850px]" id="home">
      <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
        <div className="h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]"
          >
            <MouseParallaxChild 
              factorX={0.2} 
              factorY={0.4} 
              className="relative"
            >
              <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="relative w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]"
              >
                <Image 
                  alt="mia"
                  src="/assets/hero/typo-1.svg"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
            
            <MouseParallaxChild 
              factorX={0.9} 
              factorY={0.9} 
              className="absolute xl:left-6 z-30"
            >
              <motion.div 
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className=" relative w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]"
              >
                <Image 
                  alt="reynolds"
                  src="/assets/hero/typo-2.svg"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
            
            <MouseParallaxChild 
              factorX={0.3} 
              factorY={0.6} 
              className="hidden xl:flex absolute right-0 z-20 opacity-80"
            >
              <motion.div 
                variants={fadeIn("left", 1.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="relative w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] mix-blend-luminosity"
              >
                <Image 
                  alt="bird"
                  src="/assets/hero/bird.png"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>

          <motion.div 
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="min-h-[60px] flex items-center mb-6 text-[26px]"
          >
            <div className="hidden xl:flex items-center xl:gap-x-0">
              <div>World</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image 
                  alt="dot"
                  src="/assets/hero/dot.svg"
                  fill
                />
              </div>
              <div>Tour</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image 
                  alt="dot"
                  src="/assets/hero/dot.svg"
                  fill
                />
              </div>
              <div>2024</div>
            </div>
            <div className="hidden xl:flex items-center justify-center relative w-7 h-7 mx-4">
              <Image 
                alt="microphone"
                src={"/assets/hero/mic.svg"}
                fill
              />
            </div>
            <TypeAnimation 
              sequence={locationSequence}
              wrapper="div"
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false} 
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <button className="btn btn-lg btn-accent">Get Tickets</button>
          </motion.div>

        </div>
        <motion.div 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0  before:top-0 before:bg-singerOverlay before:z-10"
        >
          <Image 
            alt="singer"
            src="/assets/hero/singer.png"
            width={617}
            height={893}
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
