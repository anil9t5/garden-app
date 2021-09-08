import Router from "next/router"
import Login from "../components/login/Login"
import DataUploader from "../components/uploader/DataUploader"
import AuthService from "../generics/authService"

const admin = () => {
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()

  const onLogOut = () => {
    auth.logOut()
    Router.push("/admin")
  }
  return (
    <div>
      {isLoggedIn ? (
        <>
          <DataUploader />
          <button className="btn btn-success" onClick={onLogOut}>
            Log out
          </button>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default admin
