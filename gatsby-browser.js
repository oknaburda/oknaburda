import React from "react"
import PropTypes from 'prop-types';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import "bootstrap/dist/css/bootstrap.css"
import "react-image-lightbox/style.css"
import "./src/styles/index.scss"

const WrapRootElement = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={"6LcgJ8IZAAAAAAC9A9iqQIoo_YwpO8FDWMEUaSlv"}>
      {children}
    </GoogleReCaptchaProvider>
  )
}

WrapRootElement.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapRootElement
