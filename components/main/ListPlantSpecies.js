import { connect } from "react-redux"
import PlantSpecies from "./PlantSpecies"
import * as options from "../../data/sideNavListDataArray"

const ListPlantSpecies = ({
  plants_list,
  activeFilterList,
  selectorFilter,
}) => {
  let filteredList

  if (activeFilterList.length === 0) {
    filteredList = plants_list
  } else {
    const filterKeys = Object.keys(options)
    filteredList = plants_list.filter((item) => {
      return filterKeys.some((key) => {
        return item.acf.characteristics[key].some((element) => {
          return activeFilterList.includes(element)
        })
      })
    })
  }

  console.log("Filter data:", selectorFilter)
  console.log("Active list", activeFilterList)
  console.log("Filter list list", filteredList)
  return (
    <div className="d-flex flex-wrap">
      {filteredList.length > 0 &&
        filteredList.map((data, index) => {
          return (
            <PlantSpecies
              plant={data}
              selectorFilter={selectorFilter}
              key={data.id}
            />
          )
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeFilterList: state.selector.activeFilterList,
    selectorFilter: state.selector.selectorFilter,
  }
}

export default connect(mapStateToProps)(ListPlantSpecies)
