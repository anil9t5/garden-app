import React from "react"
import PlantSpecies from "./PlantSpecies"

const ListPlantSpecies = ({ plants_list }) => {
  return (
    <div className="d-flex flex-wrap">
      {/* <PlantSpecies /> */}
      {plants_list.length > 0 &&
        plants_list.map((data, index) => (
          <div className="content-box" key={data.ID}>
            <PlantSpecies plant={data} />
          </div>
        ))}

      <style jsx>{`
        .content-box {
          width: 220px;
          height: auto;
          margin: 10px;
          overflow: hidden;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  )
}

export default ListPlantSpecies
