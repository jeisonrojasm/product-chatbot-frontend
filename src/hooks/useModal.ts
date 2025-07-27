import { useEffect, useState } from 'react'

type UseModalReturn = [boolean, () => void, () => void]

/**
* Name           : useModal
* Purpose        : Custom React hook to control the visibility of a modal. 
*                  It provides functions to show and hide the modal, and 
*                  prevents key interactions when the modal is open.
* Parameters     : None
* Returns        : [boolean, () => void, () => void]
*    - showModal (boolean)       : Indicates whether the modal is currently visible.
*    - handleShow (function)     : Function to show the modal.
*    - handleClose (function)    : Function to hide the modal.
* 
*/
export const useModal = (): UseModalReturn => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleClose = () => setShowModal(false)

  const handleShow = () => setShowModal(true)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (showModal) {
        event.preventDefault() // Prevent default action of the key press
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showModal])

  return [showModal, handleShow, handleClose]
}
