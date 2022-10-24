import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const RegisterForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()

  const email = emailRef.current.value
  const username = usernameRef.current.value
  const password = passwordRef.current.value

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }

  return (
    <form className="form" onSubmit={() => handleSubmit}>
      <input type="text" className="username" ref={usernameRef} placeholder="Username" />
      <input type="text" className="email" ref={emailRef} placeholder="Email" />
      <input
        type="password"
        pattern=".{8,}"
        title="Password needs to be minumum 8 characters long"
        className="password"
        ref={passwordRef}
        placeholder="Password"
      />
      <button className="btn registerBtn">Sign up</button>
      {/* {err && <p>Something went wrong</p>} */}

      <Link to="/login">Already signed up?</Link>
    </form>
  )
}
