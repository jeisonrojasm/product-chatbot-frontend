import { clearAuthToken, getViteHost } from './functions'

const VITE_HOST = getViteHost()

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  endpoint: string
  body?: object
  token?: string
  handleShow?: () => void
  setModalMessage?: (msg: string) => void
}

/**
 * Name           : request
 * Purpose        : Sends an HTTP request to a given endpoint with optional headers and body. 
 *                  Handles token-based authentication and expired session behavior globally.
 * Parameters     :
 *    - method (string) : HTTP method to be used (default is 'GET').
 *    - endpoint (string) : API endpoint to send the request to.
 *    - body (object | undefined) : Optional request payload to be sent as JSON.
 *    - token (string | undefined) : Optional Bearer token for authentication.
 *    - handleShow (function | undefined) : Optional function to trigger UI behavior (e.g., show modal) on token expiration.
 *    - setModalMessage (function | undefined) : Optional function to set the modal message on token expiration.
 * Returns        : Promise<any> - The parsed JSON response from the API or null if the token is invalid/expired.
 **/
export const request = async ({
  method = 'GET',
  endpoint,
  body,
  token,
  handleShow,
  setModalMessage,
}: RequestOptions) => {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    if (token) headers['Authorization'] = `Bearer ${token}`

    const response = await fetch(`${VITE_HOST}${endpoint}`, {
      method,
      headers,
      ...(body ? { body: JSON.stringify(body) } : {})
    })

    const json = await response.json()

    // Centralized handling of invalid/expired tokens
    if (json?.body?.message === 'INVALID_OR_EXPIRED_TOKEN') {
      clearAuthToken()
      setModalMessage?.(
        `Your session has expired. Please log in again.`
      )
      handleShow?.()
      return null
    }

    return json
  } catch (error) {
    console.error(`Error in request to ${endpoint}:`, error)
  }
}
