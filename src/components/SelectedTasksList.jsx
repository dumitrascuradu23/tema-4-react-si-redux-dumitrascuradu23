import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deselectTask } from '../stores/actions/selection'

function SelectedTasksList() {
  const tasks = useSelector(state => state.tasks.list)
  const selectedIds = useSelector(state => state.selection.selectedIds)

  const dispatch = useDispatch()

  const selectedTasks = tasks.filter(task => selectedIds.includes(task.id))

  if (selectedTasks.length === 0) {
    return <p>Niciun task selectat</p>
  }

  return (
    <ul>
      {selectedTasks.map(task => (
        <li key={task.id}>
          <span>{task.title}</span>
          {' '}
          <button onClick={() => dispatch(deselectTask(task.id))}>deselect</button>
        </li>
      ))}
    </ul>
  )
}

export default SelectedTasksList
