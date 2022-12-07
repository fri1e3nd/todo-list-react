import {useState} from 'react'
import {BsFillTrashFill, BsFillCheckCircleFill, BsFillPencilFill} from "react-icons/bs"
import style from './TaskList.module.scss'

export default function TaskList({tasks, setTasks, filtered}) {
  
  const [edit, setEdit]   = useState(null)
  const [value, setValue] = useState('')

  const deleteTask = (id) => {
    let newTask = [...tasks].filter(item => item.id !== id)
    setTasks(newTask)
  }

  const statusTask = (id) => {
    let newTask = [...tasks].filter(item => {
      if (item.id == id) {
        item.status = !item.status
      }
      return item
    })
    setTasks(newTask)
  }

  const editTask = (id, text) => {
    setEdit(id)
    setValue(text)
  }

  const saveTask = (id) => {
    let newTask = [...tasks].map(item => {
      if (item.id == id) {
        item.text = value
      }
      return item
    })
    setTasks(newTask)
    setEdit(null)
  }

  return (
    <ul>
      <div className={style.noTasks}>{tasks.length ? '' : 'No Tasks...'}</div>
      {filtered.map((item, index) => (
      <li className={style.taskItem} 
        key={item.id}>
        {
          edit == item.id
          ? 
          <div>
            <input className={style.text}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          :
          <div className={style.wrapperText}>
            <span className={style.number}>{index + 1}.</span>
            <div className={!item.status ? `${style.text_completed}` : `${style.text}`}>{item.text}</div>
          </div>
        }
        {
          edit == item.id
          ?
          <button className={style.icon}
            onClick={() => saveTask(item.id)}>
            <BsFillCheckCircleFill />
          </button>
          :
          <div className={style.icons}>
            <button className={style.icon}
              onClick={() => statusTask(item.id)}>
              <BsFillCheckCircleFill />
            </button>
            <button className={style.icon}
              onClick={() => editTask(item.id, item.text)}>
              <BsFillPencilFill />
            </button>
            <button className={style.icon}
              onClick={() => deleteTask(item.id)}>
              <BsFillTrashFill />
            </button>
          </div>
        }
      </li>
      ))}
    </ul>
  )

}