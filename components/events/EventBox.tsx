"use client";

import Image from "next/image"
import { RiMapPin2Fill } from "react-icons/ri"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { useFetch } from "@/hooks";
import { IEvent } from "./Events"

const EventBox = () => {
  const { data: events, error } = useFetch<IEvent[]>("/events")

  function getDay(date: string): number {
    return (new Date(date)).getDate()
  }

  function getMonth(date: string): string {
    return (new Date(date)).toLocaleDateString("en-US", { weekday: "short" })
  }

  function getCurrencySymbol(currency: string) {
    return (0).toLocaleString(
      "en-US",
      {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }
    ).replace(/\d/g, '').trim()
  }

  if (error) return (
    <div className="text-center">Failed to fetch data</div>
  )
  if (!events) return (
    <div className="text-center">Loading...</div>
  )

  return (
    <motion.div 
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative"
    >
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        <div className="hidden xl:flex w-[400px]">
          <Image 
            alt=""
            src="/assets/events/singer.png"
            width={358}
            height={489}
            quality={100}
            priority
          />
        </div>
        <ul className="flex-1 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 xl:pr-6">
          {events.map(event => (
            <li key={event.id} className="flex flex-col xl:flex-row items-center justify-between xl:justify-start gap-y-4 xl:gap-y-0 xl:gap-x-4 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0">
                <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0">
                  <div className="text-[44px] font-black text-accent">{getDay(event.date)}</div>
                  <div className="text-[20px] font-extrabold">{getMonth(event.date)}</div>
                </div>

                <div className="w-64 flex flex-col gap-y-2">
                  <div className="text-lg leading-none font-bold">{`${event.location.city}, ${event.location.country}`}</div>
                  <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                    <div className="text-accent text-lg">
                      <RiMapPin2Fill />
                    </div>
                    <div className="font-light">{event.location.address}</div>
                  </div>
                </div>

                <div className="w-[100px] text-[17px] text-center text-accent font-bold">
                  {`${event.priceRange.min}-${event.priceRange.max}${getCurrencySymbol(event.priceRange.currency)}`}
                </div>

                <button className="btn btn-sm btn-accent xl:ml-auto">Get tickets</button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default EventBox