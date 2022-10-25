import React, { useState, useEffect } from "react"
import { db } from "../firebase"
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"

export const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    const usersRef = collection(db, "users")
    const q = query(usersRef, where("displayName", "==", username))
    const querySnapshot = await getDocs(q)

    try {
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (err) {
      setErr(true)
      console.log("NU FORE FEL")
    }
    console.log(user)
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
    handleSearch()
  }

  return (
    <div className="search">
      <input type="text" onKeyDown={handleChange} placeholder="Search user..."></input>
      {user && (
        <div className="userFound">
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}
