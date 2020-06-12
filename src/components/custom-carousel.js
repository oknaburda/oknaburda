import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"


const CustomCarousel = ({ children, carouselOptions }) => {
  return (
    <Carousel
      {...carouselOptions}
    >
      {children}
    </Carousel>
  )
}

export default CustomCarousel
