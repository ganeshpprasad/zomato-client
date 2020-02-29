import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text, StyleSheet, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import fetchRestaurantsAction from '../actions/fetchRestaurants';

export class RestaurantList extends Component {
  componentWillMount() {
    console.log('mount', this.props.location);
    this.props.fetchRestaurants(this.props.location);
  }

  render() {
    const {cardList} = this.props;
    if (this.props.apiPending) {
      return <Text>Loading</Text>;
    }
    // const a = this.getParsedData(cardList);
    // console.log('a', a);
    return (
      <FlatList
        data={cardList}
        renderItem={({item}) => <RestaurantItem item={item} />}
      />
    );
  }
}

const RestaurantItem = ({item}) => {
  return (
    <View style={styles.listItem}>
      <Text>{item.name}</Text>
      <Text>{item.locality}</Text>
      <Text>{item.cuisines}</Text>
      {<Button title={'Show more'} />}
    </View>
  );
};

const mapStateToProps = ({cardList, location, apiPending}) => ({
  cardList,
  location,
  apiPending,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchRestaurants: fetchRestaurantsAction,
    },
    dispatch,
  );

const styles = StyleSheet.create({
  flatlist: {
    padding: 1,
  },
  listItem: {
    padding: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
