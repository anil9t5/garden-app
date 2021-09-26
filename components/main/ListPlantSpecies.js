/* eslint-disable @next/next/no-img-element */
import { connect } from "react-redux"
import PlantSpecies from "./PlantSpecies"
import * as options from "../../data/sideNavListDataArray"

const ListPlantSpecies = ({ plants_list, activeFilterList }) => {
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

  console.log("Active list", activeFilterList)
  console.log("Filter list", filteredList)

  return (
    <div className="d-flex flex-wrap">
      {filteredList.length > 0 ? (
        filteredList.map((data, index) => {
          return <PlantSpecies plant={data} key={data.id} />
        })
      ) : (
        <div className="info-section d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column text-center">
            <img src="../images/no_result_found.png" alt="" />
            <h3>Oops! No data found!</h3>
          </div>
        </div>
      )}
      <style jsx>{`
        .info-section {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeFilterList: state.selector.activeFilterList,
  }
}

export default connect(mapStateToProps)(ListPlantSpecies)
