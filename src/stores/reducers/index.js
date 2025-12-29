import { combineReducers } from 'redux'
import { tasksReducer } from './tasks'
import { selectionReducer } from './selection'

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  selection: selectionReducer
})
