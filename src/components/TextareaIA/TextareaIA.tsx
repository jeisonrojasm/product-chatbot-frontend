import './TextareaIA.css'
import type { TextareaIAProps } from './TextareaIATypes'

export const TextareaIA = ({ value, onChange, onSendMessage }: TextareaIAProps) => {
  return (
    <div className='textarea-ia'>
      <textarea
        className="textarea-ia__textarea"
        placeholder="Type your message here..."
        value={value}
        onChange={onChange}
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
