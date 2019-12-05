import React, { Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';


class Products extends Component {
    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <View key={index} style={{padding: 20}}>
                    <Button onPress={() => this.props.onPress(item) }
                        title={item.name + " - " + item.price} />
                </View>
                )
        })
    }
  render() {
    return (
        <View style={style.container}>
           {this.renderProducts(this.props.products)}
        </View>
    );
  }
}

export default Products;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
      padding: 10,
      backgroundColor: '#000'
    }
})