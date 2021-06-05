import { combineReducers } from 'redux';
import videoReducer from './videos/videoReducer';

const rootReducer = combineReducers({
    video: videoReducer
})

export default rootReducer;
