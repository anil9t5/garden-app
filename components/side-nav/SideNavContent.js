import React from "react"
import * as api from "../../generics/api"

const SideNavContent = ({ options }) => {
  const optionNames = [
    {
      key: "habitat",
      value: "Habitat",
    },
    {
      key: "flowerPetalColor",
      value: "Flower Petal Color",
    },
    {
      key: "leafBladeEdges",
      value: "Leaf Blade Edges",
    },
    {
      key: "leafType",
      value: "Leaf Type",
    },
    {
      key: "leafArrangement",
      value: "Leaf Arrangement",
    },
    {
      key: "newBrunswickCounty",
      value: "New Brunswick County",
    },
  ]
  const option = optionNames.map((item) => {
    return (
      <>
        <span>
          <strong>{item.key}</strong>
        </span>
        {options[item.key].map((data, index) => {
          return (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={index}
              />
              <label className="form-check-label" htmlFor={index}>
                {api.capitalizeFirstLetter(data)}
              </label>
            </div>
          )
        })}
      </>
    )
  })
  return <>{option}</>
}

export default SideNavContent
