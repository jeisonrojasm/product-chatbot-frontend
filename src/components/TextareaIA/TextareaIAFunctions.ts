/**
* Name           : onKeyPress
* Purpose        : Handles the key press event in a textarea. If the Enter key is pressed without Shift,
*                  it prevents the default behavior and triggers the onSendMessage callback if the input is not empty.
* Parameters     :
*    - event (React.KeyboardEvent<HTMLTextAreaElement>) : The keyboard event triggered by the textarea.
*    - value (string)                                    : Current value of the textarea input.
*    - onSendMessage (() => void)                        : Callback function to execute when sending a message.
* Returns        : void - This function does not return anything.
*/
export const onKeyPress = (
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  value: string,
  onSendMessage: () => void
) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    if (value.trim()) {
      onSendMessage();
    }
  }
};
