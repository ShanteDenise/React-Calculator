import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class InputNumberButton extends Component{
  render() {
      const {value, handleOnPress} = this.props;
    return (
      <TouchableOpacity 
      style={styles.container}
      onPress={() => handleOnPress(value)}
      >
          <Text style={styles.text}>{value}</Text>
          
          </TouchableOpacity>
  
       
   
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4ce0d3',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: 'white',
     
  
    },
    text: {
        color: 'white',
        fontSize: 36,
    }

  
  
  });