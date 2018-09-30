import React from "react"

const FlexboxChallenge = props => {
  return (
    <div>
      <h1>flexbox</h1>
      <div
        style={{
          width: 700,
          height: 400,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "purple",
          //marginTop: -200,
          marginLeft: 50
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            margin: "auto",
            backgroundColor: "orange",
            fontSize: 30
          }}
        >
          <div
            style={{
              margin: "auto"
            }}
          >
            1
          </div>
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            margin: "auto",
            backgroundColor: "orange",
            fontSize: 30
          }}
        >
          <div
            style={{
              margin: "auto"
            }}
          >
            2
          </div>
        </div>
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            margin: "auto",
            backgroundColor: "orange",
            fontSize: 30
          }}
        >
          <div
            style={{
              margin: "auto"
            }}
          >
            3
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlexboxChallenge
