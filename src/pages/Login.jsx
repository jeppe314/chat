import React from "react"
import { FireTitle } from "../components/FireTitle"
import { LoginForm } from "../components/LoginForm"

export const Login = () => {
  return (
    <div className="loginWrapper">
      <FireTitle />
      <LoginForm />
    </div>
  )
}
