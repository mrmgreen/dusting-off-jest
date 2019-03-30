import React from 'react';
import { connect } from 'react-redux';
import Programme from '../components/Programme';
import { thunkFetchRandomQuote, newRequestRandomQuote } from '../actions';
import { Link, withRouter } from 'react-router-dom';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClickWithThunk;
    this.handleOtherClick= ::this.handleClickWithSaga;
  }

  handleClickWithThunk(e) {
    e.preventDefault();
    this.props.thunkFetchRandomQuote();
  }

  handleClickWithSaga(e){
    e.preventDefault();
    this.props.newRequestRandomQuote();
  }

  getProgramme(programme) {
    return {
      title: programme,
      handleClick: programme === "alan" ? this.handleClickWithThunk : this.handleClickWithSaga,
    }
  }

  render() {
    const { pathname } = this.props.location;
    const pathnameAsProgramme = pathname.replace('/', '');
    if (this.props.programmeNames && this.props.programmeNames.includes(pathnameAsProgramme)) {
      const { title, handleClick } = this.getProgramme(pathnameAsProgramme);
      return (
        <Programme
          title={ title }
          listOfQuotes={this.props.listOfQuotes}
          handleClick={ handleClick }
          randomQuote={this.props.randomQuote}
        />
      )
    }
    return (
    <nav>
      <ul>
        <li>
          <Link to="/alan">Aha with Alan Partidge</Link>
        </li>
        <li>
          <Link to="/pulp">Pulp Fiction</Link>
        </li>
      </ul>
    </nav>
   )
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
