// Spliting the managment of the state into different reducers that manage a PARTIAL STATE, we need to combine them together

import  LEADERS  from '../shared/leaders';

export const Leaders = ( state = LEADERS, action ) => {
    switch( action.type ) {

        default: 
            return state;
    }

};