import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './Redux/countslice'
import { decrement } from './Redux/countslice'
import { increasebyvalue } from './Redux/countslice'



const Counter = () => {
    const {count} = useSelector((state) => state.countSlice)
    console.log(count);
    const dispatch = useDispatch()
  return (
    <div>
        counter
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increasebyvalue(5))}>Increase by 5</button>
    </div>
  )
}

export default Counter
