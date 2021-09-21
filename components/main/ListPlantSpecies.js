import { connect } from "react-redux"
import PlantSpecies from "./PlantSpecies"

const ListPlantSpecies = ({ plants_list, activeFilterList }) => {
  let filteredList
  if (activeFilterList.length === 0) {
    filteredList = plants_list
  } else {
    filteredList = plants_list.filter((item) =>
      activeFilterList.includes(item.acf.habitat[0].value)
    )
  }
  console.log(filteredList)
  return (
    <div className="d-flex flex-wrap">
      {filteredList.length > 0 &&
        filteredList.map((data, index) => {
          return <PlantSpecies plant={data} key={data.id} />
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeFilterList: state.selector.activeFilterList,
  }
}

export default connect(mapStateToProps)(ListPlantSpecies)
