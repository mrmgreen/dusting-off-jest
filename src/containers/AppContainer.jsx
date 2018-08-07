import React from 'react';
import { connect } from 'react-redux';
import Programme from '../components/Programme';
import { fetchRandomAlanQuote } from '../actions';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick;
    this.handleOtherClick= ::this.handleOtherClick;
  }

  handleClick(e) {
    e.preventDefault();
    this.props.fetchRandomAlanQuote();
  }

  handleOtherClick(e){
    e.preventDefault();
    this.props.fetchRandomAlanQuote();
  }

  getProgramme(pathname, programmeNames) {
    if (programmeNames && programmeNames.includes(pathname)) {
      return {
        title: pathname,
        handleClick: pathname === "/alan" ? this.handleClick : this.handleOtherClick,
      }
    }
    return {
      title: 'mr miyagi',
      handleClick: this.handleClick,
    }
  }

  render() {
    const { title, handleClick } = this.getProgramme(this.props.pathname, this.props.programmeNames);
    return (
      <Programme
        title={ title }
        listOfQuotes={this.props.listOfQuotes}
        handleClick={ handleClick }
        randomQuote={this.props.randomQuote}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    pathname: state.router.location.pathname,
    programmeNames: state.programmeNames,
    listOfQuotes: state.quotes.listOfQuotes,
    randomQuote: state.quotes.randomQuote,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRandomAlanQuote: () => dispatch(fetchRandomAlanQuote())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
