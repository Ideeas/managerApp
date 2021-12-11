export const ADD_PROJECT = 'ADD_PROJECT'
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const UPDATE_USER_DATA_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const ADD_PROJECT_FAILED = 'ADD_PROJECT_FAILED'
export const CLEAR_LOCAL_PROJECT = 'CLEAR_LOCAL_PROJECT'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT_SUCCESS: {
      return { ...state, project: action.payload }
    }

    case ADD_PROJECT_FAILED: {
      return { ...state, payload: action.error }
    }

    case CLEAR_LOCAL_PROJECT: {
      return { ...state, project: undefined }
    }

    default: {
      return state
    }
  }
}

export const addProject = (payload) => ({
  type: ADD_PROJECT,
  payload,
  meta: {
    reducer,
  },
})

export const clearProject = () => ({
  type: CLEAR_LOCAL_PROJECT,
  meta: {
    reducer,
  },
})
