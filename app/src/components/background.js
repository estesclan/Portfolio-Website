import React from "react"
import animate from "animate.css"

const Background = props => {
  return (
    <div
      style={{
        backgroundColor: "black"
      }}
    >
      <div
        className="animated fadeIn"
        style={{
          width: "100%",
          height: "100em",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          background:
            "linear-gradient(47deg, rgba(156,1,41,1) 0%, rgba(100,11,131,1) 43%, rgba(75,2,39,1) 99%)",
          alignItems: "center",
          //backgroundColor: "gray",
          margin: "auto",
          borderRadius: "50%"
        }}
      />
    </div>
  )
}

export default Background
