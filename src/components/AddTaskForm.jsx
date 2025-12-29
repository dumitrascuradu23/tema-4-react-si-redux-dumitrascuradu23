import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../stores/actions/tasks'

function AddTaskForm() {
  const [title, setTitle] = useState('')

  const tasks = useSelector(state => state.tasks.list)

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return

    const maxId = tasks.reduce((max, t) => Math.max(max, t.id), 0)
    const newTask = { id: maxId + 1, title: trimmed }

    dispatch(addTask(newTask))
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Titlul task-ului" value={title} onChange={e => setTitle(e.target.value)} />

      <button type='submit'>
        Add task
      </button>
    </form>
  )
}

export default AddTaskForm
