import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { searchPlantPosts } from "../../redux/actions/getPlantsAction"
import SearchFormValidate from "./SearchFormValidate"

const SearchForm = () => {
  const dispatch = useDispatch()
  const submitSearchQuery = (value) => {
    dispatch(searchPlantPosts(value))
  }
  return (
    <div>
      <SearchFormValidate submitSearchQuery={submitSearchQuery} />
    </div>
  )
}

export default SearchForm
