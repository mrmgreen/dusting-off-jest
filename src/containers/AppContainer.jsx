import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { getRandomAlanQuote } from '../actions';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onRandomQuoteClick();
  }

  render() {
    return (
      <App
        title="Alan"
        quotes={this.props.quotes}
        handleClick={this.handleClick}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRandomQuoteClick: () => dispatch(getRandomAlanQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
