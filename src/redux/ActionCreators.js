/* Step 2  creating an action object a standardised way*/
// this is an action object only for the COMMENTS component and over there needs to be exported
import * as ActionTypes from './ActionTypes';


// a function that is creating an object (an action object and in the params is the data)
export const addComment = ( dishId, rating, author, comment ) => ({
    type: ActionTypes.ADD_COMMENT,    // every action object should define a type 
    payload : {                       // the payload is carrying the data that the object acction needs to have
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});