import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import CustomDots from "./custom-dots"

const CustomCarousel = ({ children, responsive }) => {
  return (
    <Carousel
      responsive={responsive}
      containerClass="row"
      sliderClass="cmt-xsm-1 cmt-md-2 cmt-3"
      dotListClass="col-12 custom-carousel__dots cmb-xsm-4 cmb-md-5 cmb-6 cmt-xsm-1 cmt-md-2 cmt-3"
      focusOnSelect={false}
      minimumTouchDrag={80}
      showDots={true}
      arrows={false}
      customDot={<CustomDots />}
    >
      {children}
    </Carousel>
  )
}

export default CustomCarousel
