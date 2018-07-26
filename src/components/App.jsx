import React from 'react';
import RandomQuotesButton from './RandomQuotesButton'

export default function({ title, quotes, handleClick, randomAlanQuote }) {
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
