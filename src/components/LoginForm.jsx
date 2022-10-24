import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const LoginForm = () => {
  const [err, setErr] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setErr(true)
    }
    navigate("/")
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" className="email" placeholder="Email" />
        <input type="password" className="password" placeholder="Password" />
        <button type="submit" className="btn login">
          Sign in
        </button>
        {err && <span>Something went wrong</span>}
        <Link to="/register">Haven't signed up?</Link>
      </form>
    </div>
  )
}

// ;<Link to="/register">Register</Link>
// {
// }
