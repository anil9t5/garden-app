import React from "react"
import NonWoodyPlantSelector from "../species-selectors/NonWoodyPlantSelector"
import WoodyPlantSelector from "../species-selectors/WoodyPlantSelector"
import Link from "next/link"

const SpeciesOption = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="selection-blocks d-flex align-items-center justify-content-evenly">
        <Link href="/woody_plants">
          <a>
            <WoodyPlantSelector />
          </a>
        </Link>
        <Link href="/nonwoody_plants">
          <a>
            <NonWoodyPlantSelector />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SpeciesOption
