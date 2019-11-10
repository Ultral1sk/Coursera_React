// Spliting the managment of the state into different reducers that manage a PARTIAL STATE, we need to combine them together

import  PROMOTIONS  from '../shared/promotions';

export const Promotions = ( state = PROMOTIONS, action ) => {
    switch( action.type ) {

        default:
            return state
    }
}