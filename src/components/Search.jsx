import React, { useState, useEffect } from "react"
import { db } from "../firebase"
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"

export const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

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
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Search user..."
      ></input>
      {err && <span>Something went wrong</span>}
      {user && (
        <div className="userFound">
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
            <p>Last message</p>
          </div>
        </div>
      )}
    </div>
  )
}
