import React, {useEffect, useState} from 'react';
import NewArticleForm from './NewArticleForm';
import {connect, useDispatch} from 'react-redux';
import {addNewArticle} from '../../Redux/actions/articles';
import useFormFields from '../../Hooks/useFormFields';

const NewArticleHooks = ({ route, navigation }) => {
  const defaultFields = {title: '', author: '', image: '', readingTime: '', body: ''};
  const initialValues = route.params ? {...route.params.article} : defaultFields
  const [article, handleChange] = useFormFields(initialValues);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addNewArticle(article));
    navigation.goBack();
  }

  return (
    <NewArticleForm
      onChange={handleChange}
      onSubmit={onSubmit}
      article={article}
    />
  );
}

export default NewArticleHooks;
