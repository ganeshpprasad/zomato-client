import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import closeDialogAction from '../actions/closeDialog';

export class DetailsDialog extends Component {
  render() {
    const {name} = this.props.data;
    return (
      <View>
        <View>
          <Text>{}</Text>
        </View>
        <Button title={'Close'}></Button>
      </View>
    );
  }
}

const mapStateToProps = ({detailsItem}) => ({
  data: detailsItem,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeDialog: closeDialogAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DetailsDialog);
