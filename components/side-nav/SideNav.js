import React from "react"

const lightRequirements = [
  "Deciduous Shade (Spring Sun)",
  "Partial Shade",
  "Shade",
  "Sun",
]
const moistureRequirement = ["Dry", "Moist", "Normal", "Wet"]
const habitat = [
  "Alpine",
  "Alvar",
  "Bog/Fen",
  "Desert",
  "Forest",
  "Lakeshores",
  "Rocky Bluff",
  "Savannah",
  "Tundra",
  "Woodland",
]
const SideNav = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      <div className="options">
        <h4 className="side-nav-heading">Plant Species: </h4>
        <span>Non-Woody</span>
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Native Range</h4>
        <span>New Brunswick</span>
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Light Requirements</h4>
        {lightRequirements.length > 0 &&
          lightRequirements.map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {data}
              </label>
            </div>
          ))}
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Moisture Requirements</h4>
        {moistureRequirement.length > 0 &&
          moistureRequirement.map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {data}
              </label>
            </div>
          ))}
      </div>
      <div className="options">
        <h4 className="side-nav-heading">Natural Habitat</h4>
        {habitat.length > 0 &&
          habitat.map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {data}
              </label>
            </div>
          ))}
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

export default SideNav
