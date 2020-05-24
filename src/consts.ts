const API = API_URL

const FETCH_CONFIG = () => {
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return config
}

export { API, FETCH_CONFIG }
