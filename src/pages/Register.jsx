import React from "react"
import { RegisterForm } from "../components/RegisterForm"

import { FireTitle } from "../components/FireTitle"

export const Register = () => {
  return (
    <div className="loginWrapper">
      <FireTitle />
      <RegisterForm />
    </div>
  )
}
