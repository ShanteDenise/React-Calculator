/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import InputNumberButton from './inputNumberButton'

const buttons = [
  ['AC', 'DEL'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+']
]
export default class App extends Component{
  constructor() {
    super()
  this.initialState = {
    displayValue: '0',
    operator: null,
    firstValue: '',
    secondValue: '',
    nextValue: false
  }
  this.state = this.initialState
  
  }
  renderButton(){
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputNumberButton
          value={buttonItems}
          handleOnPress={this.handleInput.bind(this.buttonItems)}
             key={'btn-' + buttonIndex}
                />

      })
      return <View style={styles.inputRow} key={'row' + index}>
        {rowItem}
      </View>
    })
    return layouts
  }

  handleInput = (input) => {
    const {displayValue, operator, firstValue, secondValue, nextValue} = this.state

  switch(input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':

       this.setState({
            displayValue: (displayValue === '0') ? input : displayValue + input
    })
    if (!nextValue) {
      this.setState({
        firstValue: firstValue + input
      })
    }else {
      this.setState({
        secondValue: secondValue + input 
      })
    }

          break;
      case '÷':
      case '-':
      case 'x':
      case '+':

      this.setState({
          nextValue: true,
          operator: input,
          displayValue: (operator !== null ? displayValue.substr(0, displayValue.length -1) :  displayValue) + input
      })
      break;

  case '.':
      let dot = displayValue.toString().slice(-1) 
      this.setState({
        displayValue: dot !== '.' ? displayValue + input : displayValue
      })
      if (!nextValue) {
        this.setState({
          firstValue: firstValue + input
        })
      }else {
        this.setState({
          secondValue: secondValue + input 
        })
      }
      break;

  case '=':
  let formatOperator = (operator == 'x') ? '*' : (operator == '÷') ? '/' : operator 
  let result = eval(firstValue + formatOperator + secondValue)
  this.setState({
        displayValue: result % 1 === 0 ? result : result.toFixed(2),
        firstValue: result % 1 === 0 ? result : result.toFixed(2),
        secondValue: '',
        operation: null,
        nextValue: false
      })
      break;

  case 'AC':
      this.setState(this.initialState);
      break;
  case 'DEL':
      let string = displayValue.toString();
      let deletedString = string.substr(0, string.length -1)
      let length = string.length

      this.setState({
        displayValue: length == 1 ? '0' : deletedString,
        firstValue: length == 1 ? '0' : deletedString
      })
  break;
  }

}

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        {this.state.displayValue}
        </Text>

      </View>
        <View 
        style={styles.inputContainer}>
        {this.renderButton()}
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  resultContainer: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'hidden',
    // borderBottomWidth: 5.5,
    // borderColor: 'teal',

  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#191b1d'
  },
  resultText: {
    color: 'teal',
    fontSize: 80,
    overflow:'hidden',
    fontWeight: 'bold',
    marginTop:100,
    padding: 20,
    textAlign: 'right',
    

  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }


});
