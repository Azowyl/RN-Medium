import articlesReducer from './articlesReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  articles: articlesReducer
});
