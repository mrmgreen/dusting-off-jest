import React from 'react';
import { connect } from 'react-redux';
import Programme from '../components/Programme';
import { fetchRandomAlanQuote } from '../actions';

class AppContainer extends React.Component {
  constructor(props) {
    console.log('props ===', props);
    super(props);
    this.handleClick = ::this.handleClick
  }

  handleClick(e) {
    e.preventDefault();
    this.props.fetchRandomAlanQuote();
  }

  render() {
    return (
      <Programme
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
    pathname: state.router.location.pathname,
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
