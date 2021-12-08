export const HAS_USER_AUTH = 'HAS_USER_AUTH'
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED'
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS'
export const USER_AUTH_FAIILED = 'USER_AUTH_FAIILED'
export const AUTH_USER = 'AUTH_USER'

const userReducer = (state, action) => {
  if (action.type === USER_AUTHENTICATED) {
    return { ...state, user: action.payload }
  }

  if (action.type === USER_AUTH_SUCCESS) {
    return { ...state, user: action.payload }
  }

  if (action.type === USER_AUTH_FAIILED) {
    return { ...state, error: action.payload }
  }
}

export const hasUserAuth = () => {
  return {
    type: HAS_USER_AUTH,
    meta: {
      reducer: userReducer,
    },
  }
}

export const authUser = (payload) => {
  return {
    type: AUTH_USER,
    payload,
    meta: {
      reducer: userReducer,
    },
  }
}
