/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class WwApp extends Component {
  constructor(props){
    super(props)            // 继承或拿到父容器所传下来的属性
    this.state ={times: 0} // 设置属性的初始值
  }

  timesPlus(){
    let times = this.state.times
    times++
    this.setState({
        times:times
    })
  }

  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
      console.log('componentWillMount')
  }
  // 是否要更新
  shouldComponentUpdate(){
      console.log('shouldComponentUpdate')
      // 默认返回true，但第2次执行需要手动返回true
      return true
  }
  // 执行更新
  componentWillUpdate(){
      console.log('componentWillUpdate')
  }
  componentDidUpdate(){
      console.log('componentDidUpdate')
  }
  render() {
      console.log('render')
    return (
      <View style={styles.container}>
        {/* bind绑定上下文*/}
        <Text style={styles.welcome} onPress={this.timesPlus.bind(this)}>
        有本事你点我!!!
        </Text>
        <Text style={styles.instructions}>
          你点了我{this.state.times}次
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WwApp', () => WwApp);
