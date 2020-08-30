import React from "react"
import PropTypes from 'prop-types';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import "bootstrap/dist/css/bootstrap.css"
import "react-image-lightbox/style.css"
import "./src/styles/index.scss"

const WrapRootElement = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
      {children}
    </GoogleReCaptchaProvider>
  )
}

WrapRootElement.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapRootElement
