import style from './FilterTask.module.scss'

export default function FilterTask ({tasks, setFiltered}) {

  const filter = (status) => {
    if (status === 'all') {
      setFiltered(tasks)
    } else {
      let newTask = [...tasks].filter(item => item.status === status)
      setFiltered(newTask)
    }
  }

  return (
    <div className={style.wrapper}>
      <button className={style.btn}
        onClick={() => filter('all')}>
        All
      </button>
      <button className={style.btn}
        onClick={() => filter(true)}>
        Open
      </button>
      <button className={style.btn}
        onClick={() => filter(false)}>
        Closed
      </button>
    </div>
  )

}