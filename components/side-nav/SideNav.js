import { useState, useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import * as options from "../../data/sideNavListDataArray"
import SideNavContent from "./SideNavContent"

import {
  toggleHabitatData,
  toggleFlowerPetalColorData,
  toggleLeafBladeEdgesData,
  toggleLeafTypeData,
  toggleLeafArrangementData,
  toggleCountyData,
} from "../../redux/actions/toggleSelectorAction"

const SideNav = ({
  habitat,
  flowerPetalColor,
  leafBladeEdges,
  leafType,
  leafArrangement,
  county,
}) => {
  const dispatch = useDispatch()

  const handleOnChange = (position, option) => {
    switch (option) {
      case "habitat":
        const updatedHabitat = habitat.map((item, index) =>
          index === position ? !item : item
        )
        // dispatch(dispatch({ type: "TOGGLE_HABITAT", payload: updatedHabitat }))
        dispatch(toggleHabitatData(updatedHabitat))
        break
      case "flowerPetalColor":
        const updatedFlowerPetalColor = flowerPetalColor.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleFlowerPetalColorData(updatedFlowerPetalColor))
        break

      case "leafBladeEdges":
        const updatedLeafBladeEdges = leafBladeEdges.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafBladeEdgesData(updatedLeafBladeEdges))
        break
      case "leafType":
        const updatedLeafType = leafType.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafTypeData(updatedLeafType))
        break
      case "leafArrangement":
        const updatedLeafArrangement = leafArrangement.map((item, index) =>
          index === position ? !item : item
        )
        dispatch(toggleLeafArrangementData(updatedLeafArrangement))
        break
      case "newBrunswickCounty":
        const updatedCounty = county.map(
          (item, index) => (index === position ? !item : item) //if index === position then !item i.e. true, otherwise false, since initially item is false...
        )
        dispatch(toggleCountyData(updatedCounty))
        break

      default:
        break
    }
  }

  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      {/* <div className="options">
        <h4 className="side-nav-heading">Plant Species: </h4>
        <span>Non-Woody</span>
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Native Range</h4>
        <span>New Brunswick</span>
      </div> */}
      {console.log(habitat)}
      {console.log(flowerPetalColor)}
      {console.log(leafBladeEdges)}
      {console.log(leafType)}
      {console.log(leafArrangement)}
      {console.log(county)}
      <div className="options">
        <SideNavContent
          options={options}
          habitat={habitat}
          flowerPetalColor={flowerPetalColor}
          leafBladeEdges={leafBladeEdges}
          leafType={leafType}
          leafArrangement={leafArrangement}
          county={county}
          handleOnChange={handleOnChange}
        />
      </div>
      <style jsx>{`
        .sidebar {
          background-color: #f5f6f8;
          border-radius: 10px;
          border: 1px solid #e0e1e3;
          padding: 15px 20px;
          margin-top: 25px;
          height: auto;
          .options {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    habitat: state.selector.habitat,
    flowerPetalColor: state.selector.flowerPetalColor,
    leafBladeEdges: state.selector.leafBladeEdges,
    leafType: state.selector.leafType,
    leafArrangement: state.selector.leafArrangement,
    county: state.selector.county,
  }
}

export default connect(mapStateToProps)(SideNav)
