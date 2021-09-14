import { useState } from "react"
import * as options from "../../data/sideNavListDataArray"
import SideNavContent from "./SideNavContent"

const SideNav = () => {
  const [county, setCounty] = useState(
    new Array(options.newBrunswickCounty.length).fill(false)
  )

  const [leafArrangement, setLeafArrangement] = useState(
    new Array(options.leafArrangement.length).fill(false)
  )
  const handleOnChange = (position, option) => {
    switch (option) {
      case "newBrunswickCounty":
        const updatedCounty = county.map(
          (item, index) => (index === position ? !item : item) //if index === position then !item i.e. true, otherwise false, since initially item is false...
        )
        setCounty(updatedCounty)
        break
      case "leafArrangement":
        const updatedLeafArrangement = leafArrangement.map((item, index) =>
          index === position ? !item : item
        )
        setLeafArrangement(updatedLeafArrangement)
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
      {console.log(county)}
      {console.log(leafArrangement)}
      <div className="options">
        {/* <h4 className="side-nav-heading">Habitat</h4>
        {options.habitat.length > 0 &&
          options.habitat.map((data, index) => (
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
          ))} */}

        <SideNavContent options={options} />
      </div>
      {/* <div className="options">
        <h4 className="side-nav-heading">Flower Petal Colour</h4>
        {options.flowerPetalColor.length > 0 &&
          options.flowerPetalColor.map((data, index) => (
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
          ))}
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Leaf Blade Edges</h4>
        {options.leafBladeEdges.length > 0 &&
          options.leafBladeEdges.map((data, index) => (
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
          ))}
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Leaf Blade Edges</h4>
        {options.leafType.length > 0 &&
          options.leafType.map((data, index) => (
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
          ))}
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Leaf Arrangement</h4>
        {options.leafArrangement.length > 0 &&
          options.leafArrangement.map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={index}
                checked={leafArrangement[index]}
                onChange={(e) => handleOnChange(index, "leafArrangement")}
              />
              <label className="form-check-label" htmlFor={index}>
                {api.capitalizeFirstLetter(data)}
              </label>
            </div>
          ))}
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Leaf Blade Edges</h4>
        {options.newBrunswickCounty.length > 0 &&
          options.newBrunswickCounty.map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={data}
                id={index}
                checked={county[index]}
                onChange={(e) => handleOnChange(index, "newBrunswickCounty")}
              />
              <label className="form-check-label" htmlFor={index}>
                {api.capitalizeFirstLetter(data)}
              </label>
            </div>
          ))}
      </div> */}
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

export default SideNav
