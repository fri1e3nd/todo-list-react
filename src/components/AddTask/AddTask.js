import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import style from './AddTask.module.scss'

export default function AddTask({setTask, tasks, setTasks}) {

  const [value, setValue] = useState('')

  const saveTask = () => {
    if (value) {
      let newTask = {
        id: uuidv4(),
        text: value,
        status: true
      }
      setTasks(() => ([newTask, ...tasks]))
      setValue('')
      setTask('')
    }
  }

  return (
    <div className={style.wrapper}>
      <input className={style.addTask}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter a task'
      />
      <button className={style.saveTask}
        onClick={() => saveTask()}>
        Add Task
      </button>
    </div>
  )

}