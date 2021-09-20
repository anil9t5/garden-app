import React from "react"
import PlantSpecies from "./PlantSpecies"

const ListPlantSpecies = ({ plants_list }) => {
  return (
    <div className="d-flex flex-wrap">
      {plants_list.length > 0 &&
        plants_list.map((data, index) => (
          <PlantSpecies plant={data} key={data.id} />
        ))}
    </div>
  )
}

export default ListPlantSpecies
