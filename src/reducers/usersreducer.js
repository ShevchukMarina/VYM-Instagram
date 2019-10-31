import {GET_POSTS, GET_USERS} from "../actions/action";


export const initialState = {
    client: {
        user: 'Users',
        password: 'qwerty1',
        type: 'animal',
        childs:{
            boy:'Johnny',
            girl:'Jonhenna'
        }
    }
};


export function usersReducer(state = initialState, action ) {
    switch (action.type) {
        case GET_POSTS :
            return {...state, client:{...state.client, posts:action.payload}};
        case GET_USERS:
            return{...state,client:{...state.client, users: action.payload}};
        default:
            return state
    }

}


