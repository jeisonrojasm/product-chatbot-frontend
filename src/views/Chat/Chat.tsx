import { useState } from "react"
import { TextareaIA } from "../../components/TextareaIA/TextareaIA"

import { ScreenIA } from "../../components/ScreenIA/ScreenIA"
import './Chat.css'
import { onSendMessageClick } from "./ChatFunctions"

/**
 * Name           : Chat
 * Purpose        : React functional component that renders a chatbot interface. 
 *                  It manages user input, displays AI responses, and shows a loading state while awaiting API responses.
 * Parameters     : None
 * Returns        : JSX.Element - A React component with a text area for user input and a screen area to display messages and loader.
 */
export const Chat = () => {
  const [userMessage, setUserMessage] = useState<string>('')
  const [responseMessage, setResponseMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className="chat">
      <ScreenIA
        responseMessage={responseMessage}
        loading={loading}
      />
      <TextareaIA
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onSendMessage={() =>
          onSendMessageClick(
            userMessage,
            setUserMessage,
            setResponseMessage,
            setLoading
          )
        }
      />
    </div>
  )
}
