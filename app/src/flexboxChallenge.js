import React from "react"

const FlexboxChallenge = props => {
  return (
    <div>
      <h1>flexbox</h1>
      <div
        style={{
          width: "80%",
          height: 400,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          backgroundColor: "purple",
          margin: "auto",
          borderRadius: 8
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            margin: "auto",
            padding: 70,
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
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            margin: "auto",
            backgroundColor: "orange",
            fontSize: 30
            //order: -1
          }}
        >
          <div
            style={{
              margin: "auto"
            }}
          >
            4
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlexboxChallenge
