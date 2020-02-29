import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Picker} from 'react-native';
import {updateAction} from '../actions';
import {bindActionCreators} from 'redux';
import fetchRestaurantsAction from '../actions/fetchRestaurants';

export class Location extends Component {
  updateLocation(itemValue) {
    console.log('update', itemValue);

    this.props.updateLocation(itemValue);
    this.props.fetchRestaurants(itemValue);
  }

  render() {
    console.log('this.props.location', this.props.location);

    return (
      <Picker
        selectedValue={this.props.location}
        style={{height: 50, width: 200}}
        onValueChange={itemValue => this.updateLocation(itemValue)}>
        <Picker.Item label="Delhi" value="1" />
        <Picker.Item label="Kolkata" value="2" />
        <Picker.Item label="Mumbai" value="3" />
        <Picker.Item label="Bangalore" value="4" />
      </Picker>
    );
  }
}

const mapStateToProps = ({location}) => ({
  location,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchRestaurants: fetchRestaurantsAction,
      updateLocation: newLocation => updateAction(newLocation),
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Location);
