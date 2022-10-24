import React, { useState, useEffect } from "react"
import { db } from "../firebase"
import { doc, getDoc } from "firebase/firestore"

export const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = (e) => {
    const docRef = doc(db, "users", "SF")
    const docSnap = getDoc(docRef)

    setUsername(e.target.value)
  }

  return (
    <div className="search">
      <input type="text" onChange={handleSearch} placeholder="Search user..."></input>
    </div>
  )
}
