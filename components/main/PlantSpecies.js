/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"

const PlantSpecies = ({ plant }) => {
  const router = useRouter()
  return (
    <>
      {router.pathname == "/nonwoody_plants" &&
      plant.acf.plant_type == "non-woody" ? (
        <div
          className={
            plant.acf.plant_type == "non-woody" ? "content-box" : "hidden"
          }>
          <div className="img-container">
            <img
              src={
                plant.acf.image_preview.length > 0
                  ? plant.acf.image_preview[0].thumbnail_image_url
                  : "../images/no_result_found.png"
              }
              alt=""
            />
          </div>
          <div className="description">
            <h4 className="heading mt-3">{`${plant.acf.genus} ${plant.acf.species}`}</h4>
            <span>
              <strong>Common name:</strong> {plant.acf.common_name}
            </span>
          </div>
        </div>
      ) : (
        router.pathname == "/woody_plants" &&
        plant.acf.plant_type == "woody" && (
          <div
            className={
              plant.acf.plant_type == "woody" ? "content-box" : "hidden"
            }>
            <div className="img-container">
              <img
                src={
                  plant.acf.image_preview.length > 0
                    ? plant.acf.image_preview[0].thumbnail_image_url
                    : "../images/no_result_found.png"
                }
                alt=""
              />
            </div>
            <div className="description">
              <h4 className="heading mt-3">{`${plant.acf.genus} ${plant.acf.species}`}</h4>
              <span>
                <strong>Common name:</strong> {plant.acf.common_name}
              </span>
            </div>
          </div>
        )
      )}
      <style jsx>{`
        .content-box {
          width: 220px;
          height: auto;
          margin: 10px;
          overflow: hidden;
          margin-bottom: 40px;
        }
        .img-container {
          overflow: hidden;
          width: 100%;
          height: 230px;
          border-radius: 15px;
          border: 1px solid #e0e1e3;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .hidden {
          display: none;
        }
      `}</style>
    </>
  )
}

export default PlantSpecies
