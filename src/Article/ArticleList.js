import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import ArticleCollapsed from './ArticleCollapsed';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async function() {
      const response = await fetch('https://firebasestorage.googleapis.com/v0/b/rn-medium.appspot.com/o/articles.json?alt=media&token=3de2d90a-8890-4f72-b716-9ed37b150cbf')
      setArticles(await response.json());
    };
    fetchArticles();
  }, []);

  return (
    <View style={{margin: 15}}>
      <ScrollView>
        {articles.map((article) => (<ArticleCollapsed key={article.id} data={article} />))}
      </ScrollView>
    </View>
  );
};

export default ArticleList;
