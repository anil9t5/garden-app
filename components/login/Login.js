import { useRouter } from "next/router"
import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { adminLogin } from "../../redux/actions/loginAction"
import LoginForm from "./LoginForm"

const Login = ({ user_data }) => {
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const router = useRouter()
  const login = (details) => {
    dispatch(adminLogin(details)).then(() => {
      router.push("/admin", { shallow: false })
    })
  }

  return (
    <div>
      <LoginForm login={login} error={error} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user_data: state.user.user_data,
  }
}

export default connect(mapStateToProps)(Login)
