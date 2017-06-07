/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// ES5 语法
var ReactNative = require('react-native')
var React = require('react')
var Component = React.Component
var AppRegistry = ReactNative.AppRegistry
var StyleSheet = ReactNative.StyleSheet
var Text = ReactNative.Text
var View = ReactNative.View

// ES6 语法
// import React,{Component} from 'react'
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native'

// ES5 的class创建方式/方法后面，不能省略/未部理论上需要使用；结束
// 方法一般使用：function()
// 不需要bind 设定上下文
var Son = React.createClass({
    //只能使用传统静态成员定义方式，在getDefaultProps和getInitialState 定义初始的属性和状态
    getDefaultProps: function(){
        console.log('son','getDefaultProps')
    },

    getInitialState: function(){
        console.log('son','getInitialState')
        return {
            times: this.props.times
        }
    },

    timesPlus: function(){
        let times = this.state.times
        times++
        this.setState({
            times:times
        })
    },

    componentWillMount: function(){
        console.log('son','componentWillMount')
    },
    componentDidMount: function(){
        console.log('son','componentWillMount')
    },
    // 调用父类的属性
    componentWillReceiveProps: function(props){
        console.log(this.props)
        console.log('son','componentWillReceiveProps')
        this.setState({
            times: props.times
        })
    },
    // 是否要更新
    shouldComponentUpdate: function(){
        console.log('son','shouldComponentUpdate')
        // 默认返回true，但第2次执行需要手动返回true
        return true
    },
    // 执行更新
    componentWillUpdate: function(){
        console.log('son','componentWillUpdate')
    },
    componentDidUpdate: function(){
        console.log('son','componentDidUpdate')
    },
    timesReset: function(){
        // 获取父组件的方法
        this.props.timesReset()
    },
    render: function() {
        console.log('son','render')
        return (
            <View style={sonStyles.container}>
                {/* bind绑定上下文*/}
                <Text style={sonStyles.welcome} onPress={this.timesPlus}>
                    子组件：有本事你点我!!!
                </Text>
                <Text style={sonStyles.instructions}>
                    你居然点了我{this.state.times}次
                </Text>
                <Text style={sonStyles.instructions} onPress={this.timesReset}>
                    信不信我清空{this.state.times}次
                </Text>
            </View>
        )
    }
})
// ES6 的声明组件，方法后面，不需要
// 调用方法，必须使用bind
class WwApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            hit: true,
            times:2
        }
    }

  componentWillMount(){
    console.log('father','componentWillMount')
  }
  componentDidMount(){
      console.log('father','componentWillMount')
  }
  // 是否要更新
  shouldComponentUpdate(){
      console.log('father','shouldComponentUpdate')
      // 默认返回true，但第2次执行需要手动返回true
      return true
  }
  // 执行更新
  componentWillUpdate(){
      console.log('father','componentWillUpdate')
  }
  componentDidUpdate(){
      console.log('father','componentDidUpdate')
  }

  timesReset(){
      this.setState({
          times: 0
      })
  }

  willHit(){
        this.setState({
            hit: !this.state.hit     // 取相反的值
        })
    }

timesPlus(){
        var times = this.state.times
        times+= 3
        this.setState({
            times:times
        })
    }
  render() {
      console.log('father','render')
    return (
      <View style={styles.container}>
          {
              // 如果hit为true，传递父组件times值 和 timesReset方法
              this.state.hit
              ?<Son times={this.state.times} timesReset={this.timesReset.bind(this)}/>
              :null
          }

          {/* bind绑定上下文*/}
          <Text style={styles.welcome} onPress={this.timesReset.bind(this)}>
              父类说：心情好就放你一马!!!
          </Text>
          <Text style={styles.instructions} onPress={this.willHit.bind(this)}>
              到底揍不揍
          </Text>
          <Text style={styles.instructions} >
              就揍了你{this.state.times}次而已
          </Text>
          <Text style={styles.instructions} onPress={this.timesPlus.bind(this)}>
              不听话！就揍了你 3 次
          </Text>

      </View>
    )
  }
}
// ES5
var sonStyles = StyleSheet.create({
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
})
// ES6
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
})

AppRegistry.registerComponent('WwApp', () => WwApp)
