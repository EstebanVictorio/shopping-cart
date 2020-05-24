import { API, FETCH_CONFIG } from 'consts'

export const fromApi = async (url: string) =>
  await fetch(`${API}${url}`, FETCH_CONFIG())
