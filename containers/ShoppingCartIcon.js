import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux';

const ShoppingCartIcon = (props) => (
    <TouchableOpacity onPress={()=> props.navigation.navigate('Cart')} style={{ padding: 5 }} >
        <View style={{
            position: 'absolute', 
            height:30, 
            width: 30,
            borderRadius: 15, 
            backgroundColor: 'rgba(95,197,123,0.8)',
            rigth: 15,
            bottom: 15,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,

            // aqui
        }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{props.cartItems.length}</Text>
        </View>
        <Icon name="ios-cart" size={30} />
    </TouchableOpacity>
)

const mapStateToProps = (state) => {
  return {
      cartItems: state
  }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
