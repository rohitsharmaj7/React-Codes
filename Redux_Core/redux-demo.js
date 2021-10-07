const redux = require('redux');

// step 2 Reducer
const counterReducer = (state = {counter : 0 },action) =>
{
    if(action.type === "increment")
    {
    return { counter:state.counter+1 }
    }

    return state
}

// step 1
const store = redux.createStore(counterReducer);


// component subscribing to the store, indirectly in react the component will will dispatch an action or use the 
// updated state
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
};

store.subscribe(counterSubscriber);
store.dispatch({type:'increment'})