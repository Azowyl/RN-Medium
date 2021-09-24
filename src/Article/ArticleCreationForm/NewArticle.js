import React, {useEffect, useState} from 'react';
import NewArticleForm from './NewArticleForm';
import {connect, useDispatch} from 'react-redux';
import {addNewArticle} from '../../Redux/actions/articles';

const NewArticleHooks = ({ route, navigation }) => {
  const [article, setArticle] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setArticle({ ...route.params ? route.params.article : {} });
  }, [route.params]);

  const onChange = (input, value) => {
    setArticle({...article, [input]: value});
  }

  const onSubmit = () => {
    dispatch(addNewArticle(article));
    navigation.goBack();
  }

  return (
    <NewArticleForm
      onChange={onChange}
      onSubmit={onSubmit}
      article={article}
    />
  );
}

export default NewArticleHooks;
