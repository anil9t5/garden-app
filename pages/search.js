import { connect, useDispatch } from "react-redux"
import * as api from "../generics/api"
const API_URL = process.env.API_URL
import SearchResults from "../components/search/SearchResults"

const search = ({ plants }) => {
  return (
    <div className="pt-4">
      <SearchResults plants_list={plants} />
    </div>
  )
}

export default search
export async function getStaticProps() {
  const res = await api.get(`${API_URL}plants`)
  return {
    props: {
      plants: res.data,
    },
    revalidate: 1,
  }
}
