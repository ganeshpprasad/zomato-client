import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import fetchRestaurantsAction from '../actions/fetchRestaurantAPI';

export class RestaurantList extends Component {
  componentWillMount() {
    this.props.fetchRestaurants();
  }

  // getParsedData(list) {
  //   return list.map(item => {
  //     return {
  //       name: item.name,
  //       location: item.locality,
  //       cuisines: item.cuisines,
  //     };
  //   });
  // }

  render() {
    console.log('asdasd', this.props.cardList);
    const {cardList} = this.props;
    if (cardList.length < 1) {
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
      <Text>{item.location}</Text>
      <Text>{item.cuisines}</Text>
    </View>
  );
};

const mapStateToProps = ({cardList}) => ({
  cardList,
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
