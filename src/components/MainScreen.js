import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestarantLists from './RestaurantList';
import Location from './Location';

class MainScreen extends Component {
  render() {
    return (
      <>
        <Location />
        <RestarantLists />
      </>
    );
  }
}

const mapStateToProps = ({cardsList, location}) => ({
  cardsList,
  location,
});

const mapDispatchToProps = dispatch => ({
  // navigate to details screen
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
