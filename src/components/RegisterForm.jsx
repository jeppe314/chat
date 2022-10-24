import React from "react"
import { Link } from "react-router-dom"

export const RegisterForm = () => {
  return (
    <form className="form">
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
      {/* {err && <p>Something went wrong</p>} */}

      <Link to="/login">
        <p>Already signed up?</p>
      </Link>
    </form>
  )
}

// ;<Link to="/login">Login</Link>
