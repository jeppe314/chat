import React, { useState } from "react"
import { ImFire } from "react-icons/im"
import { GiHamburgerMenu } from "react-icons/gi"
import Hamburger from "hamburger-react"

export const ChatHeader = ({ data }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="chatHeader">
      <Hamburger toggled={isOpen} toggle={setOpen} />
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
