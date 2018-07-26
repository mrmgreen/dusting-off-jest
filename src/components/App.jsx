import React from 'react';
import PropTypes from 'prop-types';
import RandomQuotesButton from './RandomQuotesButton'

function App({ title, quotes, handleClick, randomAlanQuote }) {
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
      <h2>{randomAlanQuote}</h2>

    </div>
  )
}

App.propTypes = {
  title: PropTypes.string,
  quotes: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
  randomAlanQuote: PropTypes.string,
}

export default App
