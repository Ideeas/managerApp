export const USER_CREATED_SUCCESS = 'USER_CREATED_SUCCESS'
export const USER_CREATED_FAILED = 'USER_CREATED_FAILED'

export const CREATE_USER_REQUESTED = 'CREATE_USER_REQUESTED'
export const CLEAR_SIGNUP_DATA = 'CLEAR_SIGNUP_DATA'

const reducer = (state, action) => {
  if (action.type === CLEAR_SIGNUP_DATA) {
    return { ...state, user: {}, message: '', error: '' }
  }

  if (action.type === USER_CREATED_SUCCESS) {
    console.log(action.payload)
    return { ...state, user: action.payload, message: 'SUCCESS' }
  }

  if (action.type === USER_CREATED_FAILED) {
    return { ...state, error: action.error }
  }

  return state
}

export const createUser = (payload) => ({
  type: CREATE_USER_REQUESTED,
  payload,
  meta: { reducer },
})

export const clearData = () => ({
  type: CLEAR_SIGNUP_DATA,
  meta: { reducer },
})
