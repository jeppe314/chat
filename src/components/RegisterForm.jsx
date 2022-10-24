import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db, storage } from "../firebase"
import { doc, setDoc } from "firebase/firestore"
import { ref } from "firebase/storage"
import { MdFace } from "react-icons/md"

export const RegisterForm = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const storageRef = ref(storage)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      // const docRes = await setDoc(doc(db, "users", res.user.uid), {
      //   uid: res.user.uid,
      //   displayName,
      //   email,
      // })
    } catch (err) {
      setErr(true)
    }
    navigate("/")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label for="fileBtn">
        <MdFace />
      </label>
      <input required type="file" id="fileBtn" hidden></input>
      <input requiredtype="text" className="username" placeholder="Username" />
      <input required type="text" className="email" placeholder="Email" />
      <input
        required
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
