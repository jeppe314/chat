import React from "react"
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const LoginForm = () => {
  return (
    <div>
      <form className="form">
        <input type="text" className="email" placeholder="Email" />
        <input type="password" className="password" placeholder="Password" />
        <button type="submit" className="btn login">
          Sign in
        </button>
        <Link to="/register">Haven't signed up?</Link>
      </form>
    </div>
  )
}

// ;<Link to="/register">Register</Link>
// {
//   err && <span>Something went wrong</span>
// }
