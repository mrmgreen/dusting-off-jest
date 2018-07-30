import React from 'react'
import PropTypes from 'prop-types';

function RandomQuotesButton({handleClick}) {
  return (<button onClick={handleClick}>Click for thunk fetch</button>)
}

RandomQuotesButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default RandomQuotesButton
