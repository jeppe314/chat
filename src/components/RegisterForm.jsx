import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db, storage } from "../firebase"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { MdFace } from "react-icons/md"

export const RegisterForm = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]


    try {
      // 1. Creates user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      // 2. Create unique name for image
      const date = new Date().getTime()
      const storageRef = ref(storage, `${displayName + date}`)

      // 3. Upload image to cloud and get the images download url to use
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // 4. Updates profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })

            // 5. Creates registered user on firestore (database) doesnt work
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            // 6. Creates empty userChats in database

            await setDoc(doc(db, "userChats", res.user.uid), {})
          } catch (err) {
            setErr(true)
          }
        })
      })
    } catch (err) {
      setErr(true)
      console.log("Error in registration")
    }
    navigate("/")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1em" }}>
        <span>Choose avatar</span>
        <label htmlFor="fileBtn">
          <MdFace />
        </label>
        <input required type="file" id="fileBtn" hidden></input>
      </div>

      <button className="btn registerBtn">Sign up</button>
      {err && <p>Something went wrong</p>}
      <Link to="/login">Already signed up?</Link>
    </form>
  )
}
