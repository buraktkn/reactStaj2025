// rafce

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncrement = ()=>{
    dispatch(increment());
  }
  const handleDecrement = ()=>{   
    dispatch(decrement());
  }
  const handleReset = ()=>{
    dispatch(reset());
  }
  const handleIncrementByValue = (value: number) =>{
    dispatch(incrementByAmount(value));
  }
  return <div>
    <button className="bg-blue-500 text-white rounded" onClick={handleIncrement}>Arttır</button>  
    <button className="bg-red-500 text-white rounded" onClick={handleDecrement}>Azalt</button>  
    <br/>
    {value}
    <br/>
    <button className="bg-green-500 text-white rounded" onClick={handleReset}>Reset</button>  
    <br/>
    <button className="bg-gray-500 text-white rounded" onClick={()=>handleIncrementByValue(5)}>5 Arttır</button>  
    <button className="bg-orange-500 text-white rounded" onClick={()=>handleIncrementByValue(10)}>10 Arttır</button>  
  </div>
}

export default App;