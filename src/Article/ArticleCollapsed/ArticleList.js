import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import ArticleCollapsed from './ArticleCollapsed';

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch('https://firebasestorage.googleapis.com/v0/b/rn-medium.appspot.com/o/articles.json?alt=media&token=3de2d90a-8890-4f72-b716-9ed37b150cbf');
      setArticles(await response.json());
    }

    fetchArticles();
  }, []);

  return (
    <ScrollView>
      {articles.map((article) => (
        <ArticleCollapsed article={article} onPress={() => props.navigation.navigate('ArticleDetails', { article })}/>
      ))}
    </ScrollView>
  );
};

export default ArticleList;
