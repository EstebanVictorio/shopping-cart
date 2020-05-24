import { fromApi } from 'utils/services'

export const getGames = async () => await fromApi('/games')
