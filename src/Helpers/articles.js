import AsyncStorage from '@react-native-community/async-storage';

class Articles {
  static getArticles = async () => {
    return await AsyncStorage.getItem('articles');
  }

  static addNewArticle = async (newData) => {
    const currentArticles = Articles.getArticles();
    const newId = currentArticles.length + 1;
    const newArticles = JSON.stringify([...currentArticles, {...newData, id: newId } ]);
    return await AsyncStorage.setItem('articles', newArticles)
  }
}

export default Articles;
