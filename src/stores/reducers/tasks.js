import { ADD_TASK } from '../actions/tasks'

const initialState = {
  list: [
    { id: 1, title: 'Învață Redux' },
    { id: 2, title: 'Scrie tema la React' },
    { id: 3, title: 'Bea o cafea' }
  ]
}

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        list: [...state.list, action.payload]
      }

    default:
      return state
  }
} 
