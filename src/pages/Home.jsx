import React from "react"
import { Sidebar } from "../components/Sidebar"
import { Chat } from "../components/Chat"

export const Home = () => {
  return (
    <div className="homeWrapper">
      <Sidebar />
      <Chat />
    </div>
  )
}