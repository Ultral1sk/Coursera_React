// Spliting the managment of the state into different reducers that manage a PARTIAL STATE, we need to combine them together

import  DISHES  from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    switch ( action.type ) {

        default : 
            return state;
    }
};