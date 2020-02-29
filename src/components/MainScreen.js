import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {updateAction} from '../actions';

class MainScreen extends Component {
  updateLocation() {
    this.props.updateLocation('Blor');
  }

  render() {
    const a = this.props.location;
    this.updateLocation();
    return <Text>location: {a}</Text>;
  }
}

const mapStateToProps = ({cardsList, location}) => ({
  cardsList,
  location,
});

const mapDispatchToProps = dispatch => ({
  // navigate to details screen
  updateLocation: newLocation => dispatch(updateAction(newLocation)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
