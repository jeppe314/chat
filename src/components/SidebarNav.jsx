import React, { useContext } from "react"
import { ImFire } from "react-icons/im"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { AuthContext } from "../context/AuthContext"

export const SidebarNav = () => {
  const { currentUser } = useContext(AuthContext)

  const { displayName, photoURL } = currentUser

  return (
    <div className="sidebarNav">
      <div className="sidebarNavLogo">
        <ImFire className="fireLogo" />
      </div>
      <div className="sidebarNavRight">
        <img src={photoURL} alt="" />
        <span>{displayName}</span>
        <button className="logoutBtn" onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  )
}
