import React from 'react'
import LogTabMutation from 'mutations/LogTabMutation'
import PropTypes from 'prop-types'

class LogTabComponent extends React.Component {
  componentDidMount () {
    // Delay so that:
    // * the user sees their VC increment
    // * ads are more likely to have loaded
    const LOG_TAB_DELAY = 1000
    setTimeout(() => {
      LogTabMutation.commit(
        this.props.relay.environment,
        this.props.user
      )
    }, LOG_TAB_DELAY)
  }

  render () {
    return null
  }
}

LogTabComponent.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default LogTabComponent
