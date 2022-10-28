import React, { useContext } from "react"
import { RegisterForm } from "../components/RegisterForm"
import { FireTitle } from "../components/FireTitle"
import { LoadingScreen } from "../components/LoadingScreen"
import { AuthContext } from "../context/AuthContext"

export const Register = () => {
  const { loading } = useContext(AuthContext)

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="loginWrapper">
      <FireTitle />
      <RegisterForm />
    </div>
  )
}
