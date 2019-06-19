import { combineReducers } from 'redux';
import success from './successReducer';
import guess from './guessedWordReducer';

export default combineReducers({
    success,
    guess
});