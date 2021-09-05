/* eslint-disable @next/next/no-img-element */
import React from "react"

const PlantSpecies = ({ plant }) => {
  return (
    <>
      {plant.acf.plant_type == "non-woody" && (
        <>
          <div className="img-container">
            <img src={plant.acf.image_preview[0].thumbnail_image_url} alt="" />
          </div>
          <div className="description">
            <h4 className="heading">{`${plant.acf.genus} ${plant.acf.species}`}</h4>
            <span>
              <strong>Common name:</strong> {plant.acf.common_name}
            </span>
          </div>
        </>
      )}
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
