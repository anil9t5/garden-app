import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { fetchPlantPosts } from "../redux/actions/postAction"
import ListPlantSpecies from "../components/main/ListPlantSpecies"
import SideNav from "../components/side-nav/SideNav"

const NonWoodyPlants = ({ plants_list }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPlantPosts())
  }, [dispatch])
  return (
    <div className="row">
      <div className="col-lg-3">
        <SideNav />
      </div>
      <div className="col-lg-9">
        {/* <h4>Non Woody Plants..</h4> */}
        <div className="grid-container">
          <ListPlantSpecies plants_list={plants_list} />
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    plants_list: state.post.plants_list,
  }
}

export default connect(mapStateToProps)(NonWoodyPlants)
