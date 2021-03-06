import React from 'react'

import SetBackgroundColorMutation from 'mutations/SetBackgroundColorMutation'

import { SketchPicker } from 'react-color'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import PropTypes from 'prop-types'
import {
  cardHeaderSubtitleStyle
} from 'theme/default'

class BackgroundColorPicker extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedColor: '#000'
    }
  }

  componentDidMount () {
    const { user } = this.props
    const selectedColor = user.backgroundColor || this.state.selectedColor
    this.onColorChanged({hex: selectedColor})
  }

  onSaveSuccess () {}

  onSaveError () {
    this.props.showError('Oops, we are having trouble saving your settings right now :(')
  }

  onColorChanged (color) {
    this.setState({
      selectedColor: color.hex
    })

    SetBackgroundColorMutation.commit(
      this.props.relay.environment,
      this.props.user,
      color.hex,
      this.onSaveSuccess.bind(this),
      this.onSaveError.bind(this)
    )
  }

  render () {
    const root = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }

    const gridList = {
      display: 'flex',
      width: '100%'
    }

    const previewContainer = {
      width: '100%',
      padding: 10,
      paddingTop: 0
    }

    const preview = {
      width: '100%',
      height: '60%',
      backgroundColor: this.state.selectedColor
    }

    const header = Object.assign({}, cardHeaderSubtitleStyle, {
      paddingLeft: 0
    })

    const divider = {
      marginBottom: 10
    }

    return (
      <div style={root}>
        <Subheader style={header}>Select your color</Subheader>
        <Divider style={divider} />
        <div
          style={gridList}>
          <div>
            <SketchPicker
              color={this.state.selectedColor}
              disableAlpha
              onChangeComplete={this.onColorChanged.bind(this)}
              />
          </div>
          <div style={previewContainer}>
            <Paper style={preview} />
          </div>
        </div>
      </div>
    )
  }
}

BackgroundColorPicker.propTypes = {
  user: PropTypes.object.isRequired,
  showError: PropTypes.func.isRequired
}

export default BackgroundColorPicker
