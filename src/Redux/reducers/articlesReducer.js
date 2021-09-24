import {articlesActionTypes} from '../actions/articles';

const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case articlesActionTypes.RECEIVE_ARTICLES:
      return [
        ...state,
        ...action.payload
      ]
    case articlesActionTypes.ADD_NEW_ARTICLE:
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
};

export default articlesReducer;
