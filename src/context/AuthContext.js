import React, { useEffect, useState, createContext } from "react"
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })

    return () => {
      unsub()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
