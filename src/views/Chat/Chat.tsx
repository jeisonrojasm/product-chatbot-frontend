import { useState } from "react"
import { TextareaIA } from "../../components/TextareaIA/TextareaIA"

import './Chat.css'
import { onSendMessageClick } from "./ChatFunctions"
import { ScreenIA } from "../../components/ScreenIA/ScreenIA"

export const Chat = () => {
  const [userMessage, setUserMessage] = useState<string>('')
  const [responseMessage, setResponseMessage] = useState<string>('')

  return (
    <div className="chat">
      <ScreenIA
        responseMessage={responseMessage}
      />
      <TextareaIA
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onSendMessage={() => onSendMessageClick(userMessage, setUserMessage, setResponseMessage)}
      />
    </div>
  )
}
