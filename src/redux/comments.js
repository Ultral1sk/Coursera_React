// Spliting the managment of the state into different reducers that manage a PARTIAL STATE, we need to combine them together
/* initiating an action when the action is dispatched by the ACtionCreator */
/* step 3  */
import COMMENTS from '../shared/comments';
import * as ActionTypes from './ActionTypes'; // we import the action type here

export const Comments = ( state = COMMENTS, action ) => { // if the INCOMING action
    switch( action.type ) {                               // and that TYPE PROPERTY OF THAT ACITON
        case ActionTypes.ADD_COMMENT:                     // MATCHES THE CASE
            var comment = action.payload;//data           // this REDUCER function is supposed to do someting to the STATE
            comment.id = state.length;   //this is an array starting from 0 and is gonna check the id and then add the new data into a sequential order
            comment.date = new Date().toISOString();      // generating a new date
            console.log('Comment', comment);
            return state.concat(comment);                 // since we can not modify state directly we modifying  with concatinating(method) the state with the newly added comment
                                                          // it pushes the data and it creating new object and we can return the new object
        default :                                         // concatinate(method) is an immutable method
         return state
    }

};