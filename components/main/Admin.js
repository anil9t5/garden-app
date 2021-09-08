import Router from "next/router"
import { useEffect } from "react"
import DataUploader from "../uploader/DataUploader"
import AuthService from "../../generics/authService"

const Admin = () => {
  const auth = new AuthService()
  const isLoggedIn = auth.loggedIn()

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/login")
    }
  })
  const onLogOut = () => {
    auth.logOut()
    Router.push("/login")
  }

  return (
    <div>
      {isLoggedIn && (
        <div>
          <DataUploader />
          <button className="btn btn-success" onClick={onLogOut}>
            Log out
          </button>
        </div>
      )}
    </div>
  )
}

export default Admin
