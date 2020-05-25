import { API, FETCH_CONFIG } from 'consts'

export const fromApi = async (url: string) => {
  const response = await fetch(`${API}${url}`, FETCH_CONFIG())
  const json = await response.json()
  return json
}
