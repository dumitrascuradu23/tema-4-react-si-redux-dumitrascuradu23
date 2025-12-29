export const SELECT_TASK = 'SELECT_TASK'
export const DESELECT_TASK = 'DESELECT_TASK'

export function selectTask(taskId) {
  return {
    type: SELECT_TASK,
    payload: taskId
  }
}

export function deselectTask(taskId) {
  return {
    type: DESELECT_TASK,
    payload: taskId
  }
} 
