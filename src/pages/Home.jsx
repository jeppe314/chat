import React, { useContext } from "react"
import { Sidebar } from "../components/Sidebar"
import { Chat } from "../components/Chat"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Home = () => {
  
  return (
    <div className="homeWrapper">
      <Chat />
    </div>
  )
}
