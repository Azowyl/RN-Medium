import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    alignItems: 'center',
  },
  bodyContainer: {
    paddingHorizontal: 10,
    flex: 0.75
  },
  articleTitle: {
    fontSize: 14,
    color: 'black',
  },
  articleSubtitle: {
    fontSize: 12,
    color: 'grey',
  },
  articleImage: {
    height: 50,
    width: 50,
  },
  new_article_button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
});
