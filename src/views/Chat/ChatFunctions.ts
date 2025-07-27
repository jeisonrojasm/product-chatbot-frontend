import { postMessage } from "../../utils/queries";

/**
 * Name           : onSendMessageClick
 * Purpose        : Handles the logic for sending a user message to the backend API, updating the UI with the user's message,
 *                  setting the loading state, and displaying the AI's response or an error message.
 * Parameters     :
 *    - userMessage (string) : The text message inputted by the user to be sent to the backend.
 *    - setUserMessage (React.Dispatch<React.SetStateAction<string>>) : Function to clear or update the user's input field.
 *    - setResponseMessage (React.Dispatch<React.SetStateAction<string>>) : Function to update the displayed message (user or AI).
 *    - setLoading (React.Dispatch<React.SetStateAction<boolean>>) : Function to toggle the loading state while awaiting the API response.
 * Returns        : Promise<void> - This is an asynchronous function and does not return any value explicitly.
 */
export const onSendMessageClick = async (
  userMessage: string,
  setUserMessage: React.Dispatch<React.SetStateAction<string>>,
  setResponseMessage: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const body = {
    message: userMessage,
    email: localStorage.getItem('email') || 'j_esteban96@hotmail.com',
  };
  setResponseMessage(`YOU: ${userMessage}`);
  setUserMessage('');
  setLoading(true);

  try {
    const response = await postMessage(body);
    setResponseMessage(`AI: ${response.message.content}`);
  } catch (err) {
    setResponseMessage('Error getting response from the AI.');
  } finally {
    setLoading(false);
  }
}
