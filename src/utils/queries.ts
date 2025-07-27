import { request } from './request'

/**
 * Name           : loginUser
 * Purpose        : Sends a POST request to the authentication endpoint to log in a user.
 * Parameters     :
 *    - body (object) : Object containing the login credentials (e.g., email and password).
 * Returns        : any - The server's response to the login request.
 * 
 * TODO           : This function is defined, but the login functionality is not yet implemented in the app.
 */
export const loginUser = (
  body: object
) => {
  return request({
    method: 'POST',
    endpoint: '/auth/login',
    body
  })
}

/**
 * Name           : postMessage
 * Purpose        : Sends a POST request to the chat endpoint with the user's message.
 * Parameters     :
 *    - body (object) : Object containing the message payload to send to the AI.
 * Returns        : any - The response from the AI service after processing the message.
 */
export const postMessage = (
  body: object,
) => {
  return request({
    method: 'POST',
    endpoint: '/chat',
    body
  })
}
