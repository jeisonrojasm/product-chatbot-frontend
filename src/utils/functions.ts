export const setAuthToken = (token: string) => localStorage.setItem('authToken', token)
export const getAuthToken = () => localStorage.getItem('authToken')
export const clearAuthToken = () => localStorage.removeItem('authToken')

/**
 * Name           : getViteHost
 * Purpose        : Retrieves the value of the `VITE_HOST` environment variable defined in the Vite configuration.
 * Parameters     : None
 * Returns        : string - The current value of `VITE_HOST` from the environment variables at build time.
 */
export const getViteHost = (): string => {
  const host = import.meta.env.VITE_HOST;
  return host;
}
