import React from 'react';
import NewArticleForm from './NewArticleForm';
import {connect} from 'react-redux';
import {addNewArticle} from '../../Redux/actions/articles';

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.setState({...this.props.route.params.article});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.route.params !== this.props.route.params) {
      this.setState({...this.props.route.params.article});
    }
  }

  onChange = (input, value) => {
    this.setState({ [input]: value });
  }

  onSubmit = () => {
    this.props.addNewArticle(this.state);
    this.props.navigation.goBack();
  }

  render() {
    return <NewArticleForm onChange={this.onChange} onSubmit={this.onSubmit} article={this.state} />
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewArticle: (article) => dispatch(addNewArticle(article)),
})

export default connect(undefined, mapDispatchToProps)(NewArticle);
