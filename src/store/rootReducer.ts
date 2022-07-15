import {combineReducers} from "redux";
import {hotelReducer} from "./ducks/hotels/reducer";
import {authReducer} from "./ducks/auth/reducer";

export const rootReducer = combineReducers(
    {
        hotel: hotelReducer,
        auth: authReducer
    }
)