import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <App title="boom shake the room" quotes={this.props.quotes} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  }
}

export default connect(mapStateToProps)(AppContainer)
