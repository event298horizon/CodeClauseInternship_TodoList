import React from 'react'

const Todo = ({todo, deleteTask}) => {
  return (
    <>
    <div className="myTodo">
        {/* <p>hio</p> */}
      <p>{todo}</p>
      <button value={todo} className='deleteBtn' onClick={deleteTask}><i className='fa fa-trash-o'></i></button>
    </div>
    </>
  )
}

export default Todo
