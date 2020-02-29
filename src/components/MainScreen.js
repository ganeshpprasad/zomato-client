import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestarantLists from './RestaurantList';
import Location from './Location';
import {View, StyleSheet} from 'react-native';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Location />
        <RestarantLists />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
  },
});

const mapStateToProps = ({cardsList, location}) => ({
  cardsList,
  location,
});

const mapDispatchToProps = dispatch => ({
  // navigate to details screen
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
