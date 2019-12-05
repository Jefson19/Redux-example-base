import React, { Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';


class HomeScreen extends Component {
  render() {
    return (
        <View style={style.container}>
            <Button style={style.button} title='Electronics' onPress={() => 
              this.props.navigation.navigate('Electronics')} />
            <Button style={style.button} title='Books' onPress={() => 
              this.props.navigation.navigate('Books')} />
        </View>
    );
  }
}

export default HomeScreen;

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
