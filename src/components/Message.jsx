import React from "react"

export const Message = ({message}) => {
  return (
    <div className="message">
      <img
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt=""
      />
      <p className="speechBubble">{message}</p>
    </div>
  )
}
