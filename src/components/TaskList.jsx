import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTask, deselectTask } from '../stores/actions/selection'

function TaskList() {
  const tasks = useSelector(state => state.tasks.list)
  const selectedIds = useSelector(state => state.selection.selectedIds)

  const dispatch = useDispatch()

  function handleSelect(id) {
    dispatch(selectTask(id))
  }

  function handleDeselect(id) {
    dispatch(deselectTask(id))
  }

  return (
    <ul>
      {tasks.map(task => {
        const isSelected = selectedIds.includes(task.id)

        return (
          <li key={task.id}>
            <span>{task.title}</span>
            {' '}
            {isSelected ? (
              <button onClick={() => handleDeselect(task.id)}>deselect</button>
            ) : (
              <button onClick={() => handleSelect(task.id)}>select</button>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
