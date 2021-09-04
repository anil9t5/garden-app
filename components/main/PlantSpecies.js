/* eslint-disable @next/next/no-img-element */
import React from "react"

const PlantSpecies = ({ plant }) => {
  return (
    <>
      <div className="img-container">
        <img src={plant.imgUrl} alt="" />
      </div>
      <div className="description">
        <h4 className="heading">{plant.name}</h4>
        <span>
          <strong>Common name:</strong> {plant.common_name}
        </span>
      </div>
      <style jsx>{`
        .img-container {
          overflow: hidden;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      `}</style>
    </>
  )
}

export default PlantSpecies
