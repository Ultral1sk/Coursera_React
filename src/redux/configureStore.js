/*  Combining the splited state managment together */

import { createStore, combineReducers } from 'redux';
import { Dishes }                       from './dishes';
import { Comments }                     from './comments';
import { Promotions }                   from './promotions';
import { Leaders }                      from './leaders';

export const ConfigureStore = () => {
    const store = createStore(

        combineReducers({
            dishes      : Dishes,
            comments    : Comments,
            promotions  : Promotions,
            leaders     : Leaders
        })

    );
    return store
}



/* this above is an EXAMPLE OF how a REDUCER is created */

// /* SECOND STEP  - CREATING THE STORE which takes the REDUCER FUNCITON AND THE initialstate */
// /* creating the STORE */
// import { createStore } from 'redux';  // creates the store implemented from redux
// import { Reducer, initialState } from './reducer';  // getting the function and the initial store init

// export const ConfigureStore = () => {
//     const store = createStore (  // createStore takes two paremeters a reducer, intialState and it can take also other parameters
//         Reducer,                   // these two are the most common
//         initialState
//     );

//     return store;  // itll configure the react store and return the store
// }

/* this above is an EXAMPLE OF how a REDUCER is created */