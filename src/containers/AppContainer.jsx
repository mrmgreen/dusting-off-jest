import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRandomAlanQuote } from '../actions';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick
  }

  handleClick(e) {
    e.preventDefault();
    this.props.fetchRandomAlanQuote();
  }

  render() {
    return (
      <App
        title="Alan"
        quotes={this.props.quotes}
        handleClick={this.handleClick}
        randomAlanQuote={this.props.randomAlanQuote}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    randomAlanQuote: state.randomAlanQuote,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRandomAlanQuote: () => dispatch(fetchRandomAlanQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
