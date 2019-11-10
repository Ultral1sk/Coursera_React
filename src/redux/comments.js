// Spliting the managment of the state into different reducers that manage a PARTIAL STATE, we need to combine them together
import COMMENTS from '../shared/comments'

export const Comments = ( state = COMMENTS, action ) => {
    switch( action.type ) {

        default : 
         return state
    }

}