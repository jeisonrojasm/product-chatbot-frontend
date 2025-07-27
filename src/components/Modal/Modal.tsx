import { createPortal } from 'react-dom'
import './Modal.css'
import type { ButtonsProps, ContentProps, ModalProps } from './ModalTypes'

/**
 * Name           : Modal
 * Purpose        : Renders a modal component using React Portal when the `isOpen` flag is true.
 * Parameters     :
 *    - isOpen (boolean)     : Indicates whether the modal should be displayed or not.
 *    - children (ReactNode) : The content to be rendered inside the modal.
 * Returns        : React portal that renders the modal content into the DOM element with ID 'modal-root',
 *                  or null if the modal is not open or the root element is not found.
 */
export const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return createPortal(
    <section className="modal-background modal-opened">
      <div className="modal-body">{children}</div>
    </section>,
    modalRoot
  )
}

/**
 * Name           : Content
 * Purpose        : Renders the content section of a modal with optional width styling.
 * Parameters     :
 *    - children (ReactNode) : The elements to be displayed inside the modal content area.
 *    - width (string)       : Optional CSS class to adjust the width of the modal content.
 * Returns        : A <div> element containing the children, with dynamic class names based on the width.
 */
const Content = ({ children, width }: ContentProps) => {
  return (
    <div className={`modal-body-content ${width ?? ''}`}>
      {children}
    </div>
  )
}

/**
 * Name           : Buttons
 * Purpose        : Renders a container for modal action buttons, allowing optional margin and additional class styling.
 * Parameters     :
 *    - children (ReactNode) : The button elements or components to be displayed inside the container.
 *    - margin (string)      : Optional CSS class to apply margin styling to the container.
 *    - className (string)   : Optional additional CSS classes for custom styling.
 * Returns        : A <div> element containing the children, with dynamic class names based on the margin and className props.
 */
const Buttons = ({ children, margin, className }: ButtonsProps) => {
  return (
    <div className={`modal-body-buttons ${margin ?? ''} ${className ?? ''}`}>
      {children}
    </div>
  )
}

Modal.Content = Content
Modal.Buttons = Buttons
