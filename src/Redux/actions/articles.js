export const articlesActionTypes = {
  RECEIVE_ARTICLES: 'RECEIVE_ARTICLES',
  ADD_NEW_ARTICLE: 'ADD_NEW_ARTICLE',
};

export const receiveArticles = (articles) => ({
  type: articlesActionTypes.RECEIVE_ARTICLES,
  payload: articles,
});

export const addNewArticle = (article) => ({
  type: articlesActionTypes.ADD_NEW_ARTICLE,
  payload: article,
})
