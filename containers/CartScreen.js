import React, { Component } from 'react';

import { View, Text, StyleSheet} from 'react-native';
import Products from '../components/Products';
import {connect} from 'react-redux';

// import { Container } from './styles';

class CartScreen extends Component {
  render() {
    return ( 

    <View style={style.container}>
        {this.props.cartItems.length>0?
            <Products
            onPress={this.props.removeItem} 
            products={this.props.cartItems}/>
            : <Text>No items in your cart</Text>
        }
    </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => 
        dispatch({type: 'REMOVE_FROM_CART', payload: product})
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})