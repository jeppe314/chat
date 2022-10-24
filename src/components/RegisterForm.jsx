import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const RegisterForm = () => {
  const [err, setErr] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setErr(true)
    }
    navigate("/")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="username" placeholder="Username" />
      <input type="text" className="email" placeholder="Email" />
      <input
        type="password"
        pattern=".{8,}"
        title="Password needs to be minumum 8 characters long"
        className="password"
        placeholder="Password"
      />
      <button className="btn registerBtn">Sign up</button>
      {err && <p>Something went wrong</p>}
      <Link to="/login">Already signed up?</Link>
    </form>
  )
}
