import React from "react"
import { RegisterForm } from "../components/RegisterForm"

export const Register = () => {
  return (
    <div className="loginWrapper">
      <div className="titleWrapper">
        <h1 className="overlay">FireChat</h1>
        <h1 className="appTitle">FireChat</h1>
        <h1 className="shadow">FireChat</h1>
      </div>
      <RegisterForm />
    </div>
  )
}
