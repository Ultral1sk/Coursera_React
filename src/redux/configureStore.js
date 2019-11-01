/* SECOND STEP  - CREATING THE STORE which takes the REDUCER FUNCITON AND THE initialstate */
/* creating the STORE */
import { createStore } from 'redux';  // creates the store implemented from redux
import { Reducer, initialState } from './reducer';  // getting the function and the initial store init

export const ConfigureStore = ( ) => {
    const store = createStore (  // createStore takes two paremeters a reducer, intialState and it can take also other parameters
        Reducer,                   // these two are the most comon
        initialState
    );

    return store;
}