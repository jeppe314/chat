import React from "react"
import { LoginForm } from "../components/LoginForm"

export const Login = () => {
  return (
    <div className="loginWrapper">
      <div className="titleWrapper">
        <h1 className="overlay">FireChat</h1>
        <h1 className="appTitle">FireChat</h1>
        <h1 className="shadow">FireChat</h1>
      </div>
      <LoginForm />
    </div>
  )
}
