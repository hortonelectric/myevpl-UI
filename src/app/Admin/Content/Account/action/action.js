export const LIST_PLAYERS			= 'LIST_PLAYERS'
export const LIST_PLAYERS_ONLINE	= 'LIST_PLAYERS_ONLINE'
export const SELECT_PLAYER      	= 'SELECT_PLAYER'
export const EDIT_PLAYER        	= 'EDIT_PLAYER'

export const listAccounts = (data) => {
    return {
        type: LIST_PLAYERS,
        data
    }
}

export const listOnlineAccounts = (data) => {
    return {
        type: LIST_PLAYERS_ONLINE,
        data
    }
}

export const selectAccount = (id) => {
    return {
        type: SELECT_PLAYER,
        id
    }
}

export const editAccount = (data) => {
    return {
        type: EDIT_PLAYER,
        data
    }
}
