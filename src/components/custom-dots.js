import React from "react"

const CustomDots = ({ onClick, ...rest }) => {
  const { active } = rest

  return (
    <button
      className={`custom-carousel__dot ${active ? "custom-carousel__dot--active" : ""}`}
      onClick={() => onClick()}
    >&nbsp;</button>
  )
}

export default CustomDots
