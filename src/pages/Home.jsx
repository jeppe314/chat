import React from "react"
import { Sidebar } from "../components/Sidebar"
import { Chat } from "../components/Chat"
import { Link } from "react-router-dom"
import { LoadingScreen } from "../components/LoadingScreen"
export const Home = () => {
  return (
      <LoadingScreen />
    // <div className="homeWrapper">
    //   <Chat />
    // </div>
  )
}
