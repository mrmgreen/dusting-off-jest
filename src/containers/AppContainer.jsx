import React from 'react';
import { connect } from 'react-redux';
import Programme from '../components/Programme';
import { thunkFetchRandomQuote, newRequestRandomQuote } from '../actions';
import { Link, withRouter } from 'react-router-dom';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick;
    this.handleOtherClick= ::this.handleOtherClick;
  }

  handleClick(e) {
    e.preventDefault();
    this.props.thunkFetchRandomQuote();
  }

  handleOtherClick(e){
    e.preventDefault();
    this.props.newRequestRandomQuote();
  }

  getProgramme(pathname) {
    return {
      title: pathname,
      handleClick: pathname === "/alan" ? this.handleClick : this.handleOtherClick,
    }
  }

  render() {
    if (this.props.programmeNames && this.props.programmeNames.includes(location.pathname)) {
      const { title, handleClick } = this.getProgramme(this.props.pathname);
      return (
        <Programme
          title={ title }
          listOfQuotes={this.props.listOfQuotes}
          handleClick={ handleClick }
          randomQuote={this.props.randomQuote}
        />
      )
    }
    return (<h1>Here</h1>)
  }
}

const mapStateToProps = state => {
  return {
    programmeNames: state.programmeNames,
    listOfQuotes: state.quotes.listOfQuotes,
    randomQuote: state.quotes.randomQuote,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    thunkFetchRandomQuote: () => dispatch(thunkFetchRandomQuote()),
    newRequestRandomQuote: () => dispatch(newRequestRandomQuote())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer))
