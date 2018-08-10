import React from 'react';
import PropTypes from 'prop-types';
import RandomQuotesButton from './RandomQuotesButton';
import Button from '@material-ui/core/Button';

function Programme({ title, programmeNames, listOfQuotes, handleClick, randomQuote }) {
  const displayQuote = function(quote, index) {
    return (
      <div className="quotes" key={index}>{quote}</div>
    )
  };
  return (
    <div>
      <h1>{title}</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      {listOfQuotes && listOfQuotes.map(displayQuote)}
      <hr />
      <RandomQuotesButton handleClick={handleClick} />
      <h2 className="randomQuote">{randomQuote}</h2>

    </div>
  )
}

Programme.propTypes = {
  title: PropTypes.string,
  programmeNames: PropTypes.arrayOf(PropTypes.string),
  listOfQuotes: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
  randomQuote: PropTypes.string,
};

export default Programme
