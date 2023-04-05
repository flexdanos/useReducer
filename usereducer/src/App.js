import React,{useReducer} from 'react'

const ACTIONS = {
    INCREMENT:'increment',
    DECREMENT:'decrement'
}

function reducer(state, action){
  switch (action.type){
      case ACTIONS.INCREMENT:
        return{count: state.count + 1}
      case ACTIONS.DECREMENT:
       return{count: state.count - 1}
      default:
        return state
  }
}
export default function App() {
const [state, dispatch] = useReducer(reducer,{count:0})

  const increment = () => {
   dispatch({type: ACTIONS.INCREMENT})
  };

  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT});
  };

  return (
      <div className='flex justify-center items-center mt-28'>
      <button className='border w-20 h-16 font-bold' onClick={decrement}>-</button>
      <span className='flex items-center justify-center font-bold bg-slate-200 w-20 h-16'>{state.count}</span>
      <button className='border w-20 h-16 font-bold' onClick={increment}>+</button>
      </div>
  );
}

