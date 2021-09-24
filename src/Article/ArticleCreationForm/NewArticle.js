import React from 'react';
import NewArticleForm from './NewArticleForm';
import {connect} from 'react-redux';
import {addNewArticle} from '../../Redux/actions/articles';

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onChange = (input, value) => {
    this.setState({ [input]: value });
  }

  onSubmit = () => {
    this.props.addNewArticle(this.state);
    this.props.navigation.goBack();
  }

  render() {
    return <NewArticleForm onChange={this.onChange} onSubmit={this.onSubmit} />
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewArticle: (article) => dispatch(addNewArticle(article)),
})

export default connect(undefined, mapDispatchToProps)(NewArticle);
