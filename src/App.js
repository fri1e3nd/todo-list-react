import {useState, useEffect} from 'react'
import './App.scss'
import AddTask from './components/AddTask/AddTask'
import FilterTask from './components/FilterTask/FilterTask'
import TaskList from './components/TaskList/TaskList'

export default function App() {

  const [task, setTask]         = useState('')
  const [tasks, setTasks]       = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [filtered, setFiltered] = useState(tasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    setFiltered(tasks)
  }, [tasks])

  return (
    <div className='App'>
      <AddTask
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <FilterTask
        tasks={tasks}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        filtered={filtered}
      />
    </div>
  )
  
}