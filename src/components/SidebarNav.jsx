import React from "react"
import { ImFire } from "react-icons/im"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

export const SidebarNav = () => {
  return (
    <div className="sidebarNav">
      <div className="sidebarNavLogo">
        <ImFire className="fireLogo" />
      </div>
      <div className="sidebarNavRight">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <span>Jesper</span>
        <button className="logoutBtn" onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  )
}
