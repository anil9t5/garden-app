import * as api from "../../generics/api"
import "bootstrap-icons/font/bootstrap-icons.css"

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

  const colorValues = [
    {
      color: "gb",
      label: "green to brown",
    },
    {
      color: "bp",
      label: "blue to purple",
    },
    {
      color: "o",
      label: "orange",
    },
    {
      color: "y",
      label: "yellow",
    },
    {
      color: "w",
      label: "white",
    },
    {
      color: "pr",
      label: "pink to red",
    },
  ]
  let id = 0
  const option = optionNames.map((item) => {
    return (
      <div key={item.key}>
        <h6 className="selector-heading">
          <i className="bi bi-check2-square" />
          &nbsp;&nbsp;
          <strong>{item.value}</strong>
        </h6>
        <div className="d-flex flex-wrap">
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
                  {api.capitalizeFirstLetter(data)}{" "}
                  {colorValues.map((item, index) => (
                    <span
                      className={data !== item.label ? "hide" : ""}
                      key={index}>
                      {item.color}
                    </span>
                  ))}
                </label>
              </div>
            )
          })}
        </div>
        <style jsx>{`
          .selector-heading {
            font-size: 13px;
            margin-top: 20px;
          }
          .form-check {
            width: 130px;
          }
          .form-check-label {
            font-size: 13px;
          }
          :global(.bi-check2-square::before) {
            font-weight: 600 !important;
          }
        `}</style>
      </div>
    )
  })
  return <>{option}</>
}

export default SideNavContent
