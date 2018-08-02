import React from 'react';
import PropTypes from 'prop-types';
import RandomQuotesButton from './RandomQuotesButton'

function Programme({ title, quotes, handleClick, randomQuote }) {
  const displayQuote = function(quote, index) {
    return (
      <div className="quotes" key={index}>{quote}</div>
    )
  };
  return (
    <div>
      <h1>{title}</h1>
      {quotes && quotes.map(displayQuote)}
      <hr />
      <RandomQuotesButton handleClick={handleClick} />
      <h2 className="randomQuote">{randomQuote}</h2>

    </div>
  )
}

Programme.propTypes = {
  title: PropTypes.string,
  quotes: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
  randomQuote: PropTypes.string,
}

export default Programme
