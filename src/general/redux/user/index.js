export const HAS_USER_AUTH = 'HAS_USER_AUTH'
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED'
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS'
export const USER_AUTH_FAIILED = 'USER_AUTH_FAIILED'
export const AUTH_USER = 'AUTH_USER'
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA'
export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS'

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED: {
      return { ...state, user: action.payload }
    }

    case USER_AUTH_SUCCESS: {
      return { ...state, user: action.payload }
    }

    case USER_AUTH_FAIILED: {
      return { ...state, error: action.payload }
    }

    case UPDATE_USER_DATA_SUCCESS: {
      return { ...state, user: action.payload }
    }

    default: {
      return state
    }
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

export const updateUserData = (payload) => ({
  type: UPDATE_USER_DATA,
  payload,
  meta: {
    reducer: userReducer,
  },
})
