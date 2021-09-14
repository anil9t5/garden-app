import React from "react"
import PlantSpecies from "./PlantSpecies"

const ListPlantSpecies = ({ plants_list }) => {
  return (
    <div className="d-flex flex-wrap">
      {/* <PlantSpecies /> */}
      {plants_list.length > 0 &&
        plants_list.map((data, index) => (
          // <div className="content-box" key={data.id}>
          // </div>
          <PlantSpecies plant={data} key={data.id} />
        ))}
    </div>
  )
}

export default ListPlantSpecies
