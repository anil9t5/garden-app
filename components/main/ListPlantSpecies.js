import React from "react"
import PlantSpecies from "./PlantSpecies"

const ListPlantSpecies = ({ plants_list }) => {
  return (
    <div className="d-flex flex-wrap">
      {/* <PlantSpecies /> */}
      {plants_list.length > 0 &&
        plants_list.map((data, index) => (
          <div className="d-flex flex-column content-box" key={data.id}>
            <PlantSpecies plant={data} />
          </div>
        ))}

      <style jsx>{`
        .content-box {
          width: 220px;
          height: 220px;
          margin: 10px;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  )
}

export default ListPlantSpecies
