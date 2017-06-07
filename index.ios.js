/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var ReactNative = require('react-native')
var React = require('react')
var Component = React.Component
var AppRegistry = ReactNative.AppRegistry
var StyleSheet = ReactNative.StyleSheet
var Text = ReactNative.Text
var View = ReactNative.View


var Son = React.createClass({
    getDefaultProps(){
        console.log('son','getDefaultProps')
    },

    getInitialState(){
        console.log('son','getInitialState')
        return {
            times: this.props.times
        }
    },

    timesPlus(){
        let times = this.state.times
        times++
        this.setState({
            times:times
        })
    },

    componentWillMount(){
        console.log('son','componentWillMount')
    },
    componentDidMount(){
        console.log('son','componentWillMount')
    },
    // 调用父类的属性
    componentWillReceiveProps(props){
        console.log(this.props)
        console.log('son','componentWillReceiveProps')
        this.setState({
            times: props.times
        })
    },
    // 是否要更新
    shouldComponentUpdate(){
        console.log('son','shouldComponentUpdate')
        // 默认返回true，但第2次执行需要手动返回true
        return true
    },
    // 执行更新
    componentWillUpdate(){
        console.log('son','componentWillUpdate')
    },
    componentDidUpdate(){
        console.log('son','componentDidUpdate')
    },
    timesReset(){
        // 获取父组件的方法
        this.props.timesReset()
    },
    render() {
        console.log('son','render')
        return (
            <View style={styles.container}>
                {/* bind绑定上下文*/}
                <Text style={styles.welcome} onPress={this.timesPlus}>
                    子组件：有本事你点我!!!
                </Text>
                <Text style={styles.instructions}>
                    你居然点了我{this.state.times}次
                </Text>
                <Text style={styles.instructions} onPress={this.timesReset}>
                    信不信我清空{this.state.times}次
                </Text>
            </View>
        )
    }
})

var WwApp = React.createClass({
    getDefaultProps(){
        console.log('father','getDefaultProps')
    },

    getInitialState(){
        console.log('father','getInitialState')
      return {
          hit: true,
          times:2
      }
    },

  componentWillMount(){
    console.log('father','componentWillMount')
  },
  componentDidMount(){
      console.log('father','componentWillMount')
  },
  // 是否要更新
  shouldComponentUpdate(){
      console.log('father','shouldComponentUpdate')
      // 默认返回true，但第2次执行需要手动返回true
      return true
  },
  // 执行更新
  componentWillUpdate(){
      console.log('father','componentWillUpdate')
  },
  componentDidUpdate(){
      console.log('father','componentDidUpdate')
  },

  timesReset(){
      this.setState({
          times: 0
      })
  },

  wilHit(){
        this.setState({
            hit: !this.state.hit     // 取相反的值
        })
    },

timesPlus(){
        var times = this.state.times
        times+= 3
        this.setState({
            times:times
        })
    },
  render() {
      console.log('father','render')
    return (
      <View style={styles.container}>
          {
              // 如果hit为true，传递父组件times值 和 timesReset方法
              this.state.hit
              ?<Son times={this.state.times} timesReset={this.timesReset}/>
              :null
          }

          {/* bind绑定上下文*/}
          <Text style={styles.welcome} onPress={this.timesReset}>
              父类说：心情好就放你一马!!!
          </Text>
          <Text style={styles.instructions} onPress={this.willHit}>
              到底揍不揍
          </Text>
          <Text style={styles.instructions} >
              就揍了你{this.state.times}次而已
          </Text>
          <Text style={styles.instructions} onPress={this.timesPlus}>
              不听话！就揍了你 3 次
          </Text>

      </View>
    )
  }
})

var styles = StyleSheet.create({
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
