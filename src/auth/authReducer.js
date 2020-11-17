import types from '../types/types';

// Authentication routes
export default function authReducer( state = {}, action ) {
    
    switch (action.type) {

        case types.LOGIN:
            
            return {
                ...action.payload,
                logged: true
            }
            
        case types.LOGOUT:

            return {
                logged: false
            }
    
        default:
            break;
    }

}