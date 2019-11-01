/* FIRST STEP TAKING THE INITIAL STATE and creating the REDUCE FUNCTION */
/* creating the redux STORE  */

import DISHES from '../shared/dishes';
import COMMENTS from '../shared/comments';
import LEADERS from '../shared/leaders';
import PROMOTIONS from '../shared/promotions';

export const initialState = {

    dishes       : DISHES,
    comments     : COMMENTS,
    leaders      : LEADERS,
    promotions   : PROMOTIONS,
};

/* 1 - this REDUCER function will receive the CURRENT STATE and an ACTION */
/* 2 - to GENERATE the NEXT STATE we need the current state and an ACTION */
/* 3 - we are not MODIFYing the STATE DIRECTLY here in the REDUCER function  what we need to do is an IMMUTABLE CHANGE
which is a COPY of this STATE and then return an UPDATED version of the STATE from this REDUCER function that is 
what the job of the REDUCER func is*/
/* 4 - we need to set the REDUCER function because the store needs to know what to do when a ACTION is DISPACHED to it */
/* 5 - what we need to do also is to set a default value of the state which means it should be un initialized/undefined */
/* 6 - when the Reducer function is first called our STORE will have no STATE that is why we set the state to initialState/undefined */
/* 7 - in this case it returns the state as just is */
export const Reducer = ( state = initialState, action ) => {
    return state;

};