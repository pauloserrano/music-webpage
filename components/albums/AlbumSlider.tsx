"use client"

import { useState } from "react"
import Image from "next/image"
import useSWR from "swr"
import { AudioPlayer } from "react-audio-play"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper as SwiperType } from "swiper/types"
import { IAlbum } from "./Albums"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export const AlbumSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState< SwiperType | null>(null)
  const { data, error } = useSWR("/albums", (url: string) => {
    return fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + url).then(res => res.json())
  })

  if (error) return "Failed to fetch data"
  if (!data) return "Loading..."

  console.log(data)

  return (
    <>
      <Swiper 
        effect="coverflow" 
        speed={1000} 
        spaceBetween={80} 
        allowTouchMove={false} 
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        className="album-slider"
      >
        {data.map((album: IAlbum) => (
          <SwiperSlide key={album.id} className="mb-12">
            <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
              <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                <Image 
                  alt={album.name}
                  src={album.img}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-1 w-full h-[500px]">
                <div className="flex-1 flex flex-col xl:px-12">
                  {album.tracks?.map((track, id) => (
                    <div key={id} className="flex flex-1 w-full h-[500px]">
                      <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                        <div className="text-accent text-sm xl:text-lg">{`0${id + 1}.`}</div>
                        <div className="text-sm xl:text-base">{track.name}</div>
                      </div>
                      <div>
                        <AudioPlayer
                          src={track.src}
                          preload="none"
                          color="#fff"
                          volume={40}
                          volumePlacement="bottom"
                          loop
                          style={{
                            background: "transparent",
                            boxShadow: "none",
                            width: "100%",
                            maxWidth: "none"
                          }}
                          className="album-player"
                          />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper 
        onSwiper={(swiper) => setThumbsSwiper(swiper)} 
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1310: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={20}
        slidesPerView={5}
        watchSlidesProgress
        freeMode
        className="thumb-slider"
      >
        {data?.map((thumb: IAlbum, id: number) => (
          <SwiperSlide key={id} className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]">
            <div className="relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer">
              <Image 
                alt={thumb.name}
                src={thumb.img}
                fill
                priority
                className="object-contain group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
