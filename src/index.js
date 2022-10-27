import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AuthContextProvider } from "./context/AuthContext"
import { ChatContextProvider } from "./context/ChatContext"
import { MenuContextProvider } from "./context/MenuContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <MenuContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </MenuContextProvider>
    </ChatContextProvider>
  </AuthContextProvider>
)
