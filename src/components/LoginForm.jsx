import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { AuthContext } from "../context/AuthContext"

export const LoginForm = () => {
  const [err, setErr] = useState(false)
  const { loading, setLoading } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setErr(true)
    }
    setLoading(false)
    navigate("/")
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input required type="email" className="email" placeholder="Email" />
        <input required type="password" className="password" placeholder="Password" />
        <button type="submit" className="btn login">
          Sign in
        </button>
        {err && <span>Something went wrong</span>}
        <Link to="/register">Haven't signed up?</Link>
      </form>
    </div>
  )
}
