import { createStore } from 'redux';
// import { createSlice,configureStore     } from '@reduxjs/toolkit' APPROACH USING REDUX TOOLKIT 

// const initialAuthState = { isAuthenticated: false}

// const authSlice = createSlice({
//     name:'authentication',
//     initialState:initialAuthState ,
//     reducers:{
//         login(state){
//             state.isAuthenticated = true;
//         },
//         logout(state){
//             state.isAuthenticated=false;
//         }
//     }
// });

// export const authAction = authSlice.actions;
// const store = configureStore({reducer:{auth:authSlice.reducer}})
// End of redux toolkit approach


// APPROACH 1 CODE BLOCK STARTING
// initial state object
const initialCounterState = { counter:0, showCounter:true }

// Unique indentifier to keep application simple while the app grows
// export const INCREMENT ='increment';

// Step 2: Create the reducer function
const counterReducer = (state = initialCounterState,action) => {
    if(action.type === 'increment')
    {
        return {
            counter : state.counter+1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'increase')
    {
        return{
            counter : state.counter+action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'decrement')
    {
        return{
            counter : state.counter-1,
            showCounter: state.showCounter
        }
    }

    if(action.type === "toggle")
    {
        return{
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state
};

// Step 1: create store 
// Step 3: Pass the reducer function to the store
const store = createStore(counterReducer)
// APPROACH 1 CODE BLOCK ENDING

export default store;