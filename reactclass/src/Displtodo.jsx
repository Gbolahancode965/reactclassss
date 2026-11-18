import React from 'react'

const Displtodo = ({todolist, deleteItem}) => {
  return (
    <div>
        Displtodo
        {todolist && todolist.map((todo, index)=>(
            <div>
                <h1>{todo}</h1>
                <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Displtodo