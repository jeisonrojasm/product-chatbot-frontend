import { postMessage } from "../../utils/queries";

export const onSendMessageClick = async (userMessage: string, setUserMessage: React.Dispatch<React.SetStateAction<string>>, setResponseMessage: React.Dispatch<React.SetStateAction<string>>) => {
  const body = {
    message: userMessage,
    email: localStorage.getItem('email') || 'j_esteban96@hotmail.com',
  };
  setResponseMessage(`YOU: ${userMessage}`);
  setUserMessage('');
  const response = await postMessage(body);
  setResponseMessage(`AI: ${response.message.content}`);
}