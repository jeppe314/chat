import React from "react"
import { Link } from "react-router-dom"

export const LoginForm = () => {
  return (
    <div>
      <form className="form">
        <input type="text" className="email" placeholder="Email" />
        <input type="password" className="password" placeholder="Password" />
        <button type="submit" className="btn login">
          Sign in
        </button>
        <Link to="/register">
          <p>Haven't signed up?</p>
        </Link>
      </form>
    </div>
  )
}

// ;<Link to="/register">Register</Link>
// {
//   err && <span>Something went wrong</span>
// }
