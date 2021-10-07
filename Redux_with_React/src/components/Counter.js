import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

// import { INCREMENT , DECREMENT, INCREASE} from '../store';

const Counter = () => {
  // Here we are fetching the  value of the counter from our redux store i.e. use Slector hook is usually used to
  // fetch the values of the store states to our component
  const counter = useSelector(state => state.counter)
  const show = useSelector(state =>state.showCounter)

  // useDispatch hook is used to dipatch the actions from our component to the reducer function, present in our store
  // usually useDispatch return a function which can be use by us to dispatch our actions
  const dispatch = useDispatch();

  const incrementHandler = () =>
  {
    dispatch({type:'increment'})
  }

  const increaseHandler = () =>{
    dispatch({type:'increase',amount:5})
  }

  const decrementHandler = () =>{
    dispatch({type:'decrement'})
  }

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
       {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
