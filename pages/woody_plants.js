import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { fetchWoodyPlantPosts } from "../redux/actions/postAction"
import ListPlantSpecies from "../components/main/ListPlantSpecies"
import SideNav from "../components/side-nav/SideNav"

const WoodyPlants = ({ plants_list }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWoodyPlantPosts())
  }, [dispatch])
  return (
    <div className="row">
      <div className="col-lg-3">
        <SideNav />
      </div>
      <div className="col-lg-9">
        {/* <h4>Woody Plants..</h4> */}
        <ListPlantSpecies plants_list={plants_list} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    plants_list: state.post.woody_plants,
  }
}

export default connect(mapStateToProps)(WoodyPlants)
