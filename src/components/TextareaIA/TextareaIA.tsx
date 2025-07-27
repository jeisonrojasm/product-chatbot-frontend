import './TextareaIA.css'
import { onKeyPress } from './TextareaIAFunctions'
import type { TextareaIAProps } from './TextareaIATypes'

/**
* Name           : TextareaIA
* Purpose        : Functional React component that renders a textarea and a send button.
*                  It captures user input and handles message sending through the provided callbacks.
* Parameters     :
*    - value (string)                      : Current value of the textarea.
*    - onChange (ChangeEventHandler)       : Function to update the value when the textarea changes.
*    - onSendMessage (function)            : Callback function to trigger when sending a message.
* Returns        : JSX.Element - The rendered textarea input and send button UI.
*
*/
export const TextareaIA = ({ value, onChange, onSendMessage }: TextareaIAProps) => {
  return (
    <div className='textarea-ia'>
      <textarea
        className="textarea-ia__textarea"
        placeholder="Type your message here..."
        value={value}
        onChange={onChange}
        onKeyDown={(event) => onKeyPress(event, value, onSendMessage ?? (() => { }))}
      />
      <button
        className="textarea-ia__send-button"
        onClick={onSendMessage}
        disabled={!value.trim()}
      >
        Send
      </button>
    </div>
  )
}
