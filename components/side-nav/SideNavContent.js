import React from "react"
import * as api from "../../generics/api"

const SideNavContent = ({
  options,
  habitat,
  flowerPetalColor,
  leafBladeEdges,
  leafType,
  leafArrangement,
  county,
  handleOnChange,
}) => {
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
      <div key={item.key}>
        <h5>
          <strong>{item.value}</strong>
        </h5>
        {options[item.key].map((data, index) => {
          return (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={data}
                id={index}
                checked={
                  item.key == "newBrunswickCounty"
                    ? county[index]
                    : item.key == "leafArrangement"
                    ? leafArrangement[index]
                    : item.key == "leafType"
                    ? leafType[index]
                    : item.key == "habitat"
                    ? habitat[index]
                    : item.key == "flowerPetalColor"
                    ? flowerPetalColor[index]
                    : item.key == "leafBladeEdges"
                    ? leafBladeEdges[index]
                    : false
                }
                onChange={(e) => handleOnChange(index, item.key)}
              />
              <label className="form-check-label" htmlFor={index}>
                {api.capitalizeFirstLetter(data)}
              </label>
            </div>
          )
        })}
      </div>
    )
  })
  return <>{option}</>
}

export default SideNavContent
