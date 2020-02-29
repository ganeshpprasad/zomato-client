import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import RestarantLists from './components/RestaurantList';
import Location from './components/Location';
import DetailsDialog from './components/DetailsDialog';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.card}>
        {this.props.detailsItem === null ? (
          <>
            <Location />
            <RestarantLists />
          </>
        ) : (
          <DetailsDialog />
        )}
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

const mapStateToProps = ({cardsList, location, detailsItem}) => ({
  cardsList,
  location,
  detailsItem,
});

const mapDispatchToProps = dispatch => ({
  // navigate to details screen
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
