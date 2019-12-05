import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import {books} from '../Data';
import Products from '../components/Products';
import {connect} from 'react-redux';

class BooksScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Books'
  }
  render() {
    return (
        <View style={style.container}>
            <Products products={books} onPress={this.props.addItemCart}/>
        </View>
    );
  }
}

const mapDispatchToProps = dispatch => { 
  return {
    addItemCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product})
  }
}

export default connect(null, mapDispatchToProps)(BooksScreen);

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
