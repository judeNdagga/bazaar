// components/Carousel.tsx
import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import '../css/embla.css'
import Image from 'next/image'
type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const image1 = "https://hips.hearstapps.com/hmg-prod/images/2022-mitsubishi-eclipse-cross-101-1612907183.jpg?crop=0.871xw:0.736xh;0.00326xw,0.127xh&resize=1200:*"
const image2 = "https://hips.hearstapps.com/hmg-prod/images/2024-mitsubishi-mirage-101-64b94568391dc.jpg?crop=0.800xw:0.478xh;0.0391xw,0.373xh&resize=1200:*"
const image3 = "https://hips.hearstapps.com/hmg-prod/images/2024-mitsubishi-outlander-sport-103-64b83fa38da65.jpg?crop=0.469xw:0.399xh;0.231xw,0.450xh&resize=1200:*"
const image4 = "https://hips.hearstapps.com/hmg-prod/images/2024-mitsubishi-mirage-g4-103-6508a36ae3654.jpg?crop=0.792xw:1.00xh;0.106xw,0&resize=1200:*"


const images: string[] = [image1, image2, image3, image4]
const imageByIndex = (index: number): string => images[index % images.length]


const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
