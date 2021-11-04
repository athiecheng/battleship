import { combineReducers } from 'redux';
import gameReducer from "./gameReducer";
import robotReducer from "./robotReducer";

export default combineReducers({
    game: gameReducer,
    robot: robotReducer
})