import { SELECT_TASK, DESELECT_TASK } from '../actions/selection'

const initialState = {
  selectedIds: []
}

export function selectionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TASK:
      if (state.selectedIds.includes(action.payload)) {
        return state
      }
      return {
        ...state,
        selectedIds: [...state.selectedIds, action.payload]
      }

    case DESELECT_TASK:
      return {
        ...state,
        selectedIds: state.selectedIds.filter(id => id !== action.payload)
      }

    default:
      return state
  }
} 
