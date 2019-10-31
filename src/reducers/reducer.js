import { combineReducers } from 'redux';

import {reducer as formReducer} from 'redux-form';
import {usersReducer} from "./usersreducer";

export const rootReducer= combineReducers({
        form: formReducer,
        users : usersReducer
    }
);