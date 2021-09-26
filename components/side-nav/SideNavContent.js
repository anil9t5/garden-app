import React from "react"
import * as api from "../../generics/api"

const SideNavContent = ({
  options,
  habitat,
  flower_petal_colour,
  leaf_blade_edges,
  leaf_type,
  leaf_arrangement,
  new_brunswick_county,
  onSelectorChange,
  handleOnChange,
}) => {
  const optionNames = [
    {
      key: "habitat",
      value: "Habitat",
    },
    {
      key: "flower_petal_colour",
      value: "Flower Petal Colour",
    },
    {
      key: "leaf_blade_edges",
      value: "Leaf Blade Edges",
    },
    {
      key: "leaf_type",
      value: "Leaf Type",
    },
    {
      key: "leaf_arrangement",
      value: "Leaf Arrangement",
    },
    {
      key: "new_brunswick_county",
      value: "New Brunswick County",
    },
  ]

  let id = 0
  const option = optionNames.map((item) => {
    return (
      <div key={item.key}>
        <h5>
          <strong>{item.value}</strong>
        </h5>
        {options[item.key].map((data, index) => {
          id = id + 1
          return (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={data}
                id={id}
                onClick={(e) => onSelectorChange(data)}
                checked={
                  item.key == "new_brunswick_county"
                    ? new_brunswick_county[index]
                    : item.key == "leaf_arrangement"
                    ? leaf_arrangement[index]
                    : item.key == "leaf_type"
                    ? leaf_type[index]
                    : item.key == "habitat"
                    ? habitat[index]
                    : item.key == "flower_petal_colour"
                    ? flower_petal_colour[index]
                    : item.key == "leaf_blade_edges"
                    ? leaf_blade_edges[index]
                    : false
                }
                onChange={(e) => handleOnChange(index, item.key)}
              />
              <label className="form-check-label" htmlFor={id}>
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
