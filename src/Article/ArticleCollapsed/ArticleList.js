import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import ArticleCollapsed from './ArticleCollapsed';
import {useDispatch, useSelector} from 'react-redux';
import {receiveArticles} from '../../Redux/actions/articles';

const ArticleList = (props) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles)

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch('https://firebasestorage.googleapis.com/v0/b/rn-medium.appspot.com/o/articles.json?alt=media&token=3de2d90a-8890-4f72-b716-9ed37b150cbf');
      dispatch(receiveArticles(await response.json()));
    }

    fetchArticles();
  }, []);

  return (
    <ScrollView>
      {articles.map((article) => (
        <ArticleCollapsed key={article.id} article={article} onPress={() => props.navigation.navigate('ArticleDetails', { article })}/>
      ))}
    </ScrollView>
  );
};

export default ArticleList;
