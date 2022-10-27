import React, { useState, useContext } from "react"
import { ImFire } from "react-icons/im"
import Hamburger from "hamburger-react"
import { MenuContext } from "../context/MenuContext"

export const ChatHeader = ({ data }) => {
  const { isOpen, setOpen } = useContext(MenuContext)

  return (
    <div className="chatHeader">
      <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
      <ImFire className="fireLogo" />
      {data.user.displayName ? (
        <h3>
          Chat with <span>{data.user.displayName}</span>
        </h3>
      ) : (
        <h2>FireChat</h2>
      )}
      <ImFire className="fireLogo" />
    </div>
  )
}
