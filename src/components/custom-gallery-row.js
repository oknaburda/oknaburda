import React, { useState } from "react"
import CustomCarousel from "./custom-carousel"
import GatsbyImage from "gatsby-image"
import Lightbox from "react-image-lightbox"

import CustomDots from "./custom-dots"
import { galleryResolutions } from "../utils/resolutions"


const carouselOptions = {
  containerClass: "row cmt-5",
  dotListClass: "col-12 custom-carousel__dots cmt-xsm-3 cmt-md-4 cmt-5",
  focusOnSelect: false,
  minimumTouchDrag: 80,
  showDots: false,
  arrows: false,
  customDot: <CustomDots/>,
  autoPlay: false,
  autoPlaySpeed: 10000,
  responsive: galleryResolutions
}

const CustomGalleryRow = ({ title, images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const fullImages = images.map(item => item.fullImages)
  const thumbnails = images.map(item => item.thumbnails)


  return (
    <section className="cmb-xsm-6 cmb-md-8 cmb-10 cmt-md-1 cmt-2 custom-gallery-row">
      <div className="container">
        <h2 className="section-header cmb-2">{title}</h2>
      </div>

      {images && (
        <div className="container-fluid custom-gallery-row__slider">
          <CustomCarousel carouselOptions={carouselOptions}>
            {
              thumbnails.map((image, index) => (
                <div className="custom-gallery-row__slider-item-wrapper">
                  <button
                    type="button"
                    id={index}
                    key={`${image.src}:${index}`}
                    onClick={() => {
                      setIsOpen(true)
                      setPhotoIndex(index)
                    }}
                    className="custom-gallery-row__slider-item"
                  >
                    <GatsbyImage
                      className="custom-gallery-row__image"
                      fixed={image}
                    />
                  </button>
                </div>
              ))
            }
          </CustomCarousel>

          {!!isOpen && (
            <Lightbox
              mainSrc={fullImages[photoIndex].src}
              nextSrc={fullImages[(photoIndex + 1) % images.length].src}
              prevSrc={fullImages[(photoIndex + images.length - 1) % fullImages.length].src}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + fullImages.length - 1) % fullImages.length
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % fullImages.length)
              }
            />
          )}
        </div>
      )}
    </section>
  )
}

export default CustomGalleryRow
