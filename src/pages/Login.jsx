import React, { useContext } from "react"
import { FireTitle } from "../components/FireTitle"
import { LoginForm } from "../components/LoginForm"
import { LoadingScreen } from "../components/LoadingScreen"
import { AuthContext } from "../context/AuthContext"

export const Login = () => {
  const { loading } = useContext(AuthContext)

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="loginWrapper">
      <FireTitle />
      <LoginForm />
    </div>
  )
}
