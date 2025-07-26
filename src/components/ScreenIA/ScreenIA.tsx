import { useState, useEffect } from "react";
import './ScreenIA.css'
import type { ScreenIAProps } from "./ScreenIATypes"

export const ScreenIA = ({ responseMessage }: ScreenIAProps) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (responseMessage) {
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }
  }, [responseMessage]);

  return (
    <div className="screen-ia">
      {
        messages.map((message, index) => {
          return (
            <p className="screen-ia__message" key={index}>
              {message}
            </p>
          )
        })
      }
    </div>
  );
}

