import React from "react"

export const User = ({ photoURL, displayName }) => {
  return (
    <div className="user">
      <div className="userImg">
        <img src={photoURL} alt="" />
      </div>
      <div>
        <span>{displayName}</span>
        <p>
          Morjens hej köper du ost till korven?Morjens hej köper du ost till korven?Morjens hej
          köper du ost till korven?
        </p>
      </div>
    </div>
  )
}
