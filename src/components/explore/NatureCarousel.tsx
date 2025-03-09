"use client"

import { cx } from 'class-variance-authority'
import React, { useEffect, useState } from 'react'
import Button from '../button'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel'
import Container from '../ui/Container'
import Image from 'next/image'

const NatureCarousel = ({ header, items, button }: { header: string, items: { title: string, image: string, description: string }[], button: string }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <div
        className={cx(
          "text-center flex flex-col justify-center items-center gap-6 relative mb-12 px-4 sm:px-12 lg:px-40"
        )}
      >
        <span className="text-sm font-bold tracking-widest w-full uppercase">
          {header}
        </span>
        <h1 className={cx("text-subtitle font-prata w-full")}>{header}</h1>
        <div className="rounded-full w-full h-full border border-[#CD5A05] contents sm:flex sm:p-4 sm:max-w-fit">
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-between sm:max-w-fit">
            {items.map((item, index) => (
              <Button rounded="rounded-full" onClick={() => api && api?.scrollTo(index)} className={`text-xs transition duration-300 py-3 border border-[#CD5A05] ${current === index + 1 ? "text-white" : "!text-[#CD5A05] bg-transparent hover:bg-[#ffe7d6]"}`}>
                {item.title}
              </Button>
            ))}
          </div>
        </div>
        <p className={cx("text-description w-full leading-6")}>
          {items[current - 1].description}
        </p>
      </div>
      <div className="relative w-full">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem>
                <Container className={cx("w-full relative space-y-10 px-4 py-2 text-center sm:px-8 md:px-0 md:space-y-0 md:flex md:flex-col md:items-center md:justify-center")}>
                  <div
                    className={cx(
                      "w-full h-full flex flex-col gap-24-d justify-center items-center md:absolute md:justify-center md:z-20 md:text-white md:text-center md:px-32 md:h-fit"
                    )}
                  >
                    <div className="hidden space-y-3 md:block lg:space-y-6">
                      <p>{index + 1}/{items.length}</p>
                      <div className="flex items-center gap-6">
                        <p>SWIPE</p>
                        <div className="w-96 bg-white h-1 rounded-full">
                          <div className="h-full bg-orange-borneo rounded-full" style={{ width: `${Math.ceil((index + 1) * (100 / items.length))}%` }}></div>
                        </div>
                        <p>{">>"}</p>
                      </div>
                    </div>
                    <p className={cx("font-prata text-subtitle w-full lg:w-[60%]")}>
                      {items[current - 1].title}
                    </p>
                    <Button className="text-xs transition rounded-full py-3 w-fit">
                      {button}
                    </Button>
                  </div>

                  <div
                    className={cx(
                      "w-full h-44 rounded-xl relative overflow-hidden sm:h-80 md:rounded-none md:h-96 lg:h-screen"
                    )}
                  >
                    <div
                      className={cx("hidden w-full h-full bg-[#37281780]/50 absolute z-10 md:block")}
                    ></div>
                    <Image src={item.image} alt="picture of orang utan" className="w-full rounded-lg object-cover md:rounded-none lg:h-screen" height={1000} width={1000} />
                  </div>
                </Container>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default NatureCarousel