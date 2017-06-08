/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// ES5 语法
var ReactNative = require('react-native')
var Icon = require('react-native-vector-icons/Ionicons')
var React = require('react')

var List = require('./app/creation/index')
var Edit = require('./app/edit/index')
var Account = require('./app/account/index')

var Component = React.Component
var AppRegistry = ReactNative.AppRegistry
var StyleSheet = ReactNative.StyleSheet
var Text = ReactNative.Text
var View = ReactNative.View
var TabBarIOS = ReactNative.TabBarIOS



var WwApp = React.createClass({
    getInitialState: function(){
        console.log('son','getInitialState')
        return {
            selectedTab: 'List'
        }
    },

    render: function() {
        return (
            <TabBarIOS tintColor="#ee735c">
                <Icon.TabBarItem
                    iconName='ios-videocam-outline'
                    selectedIconName='ios-videocam'
                    selected={this.state.selectedTab === 'List'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'List',
                        });
                    }}>
                    <List />
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    iconName='ios-recording-outline'
                    selectedIconName='ios-recording'
                    // 未读信息提醒，小红点
                    // badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'Edit'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Edit',
                        });
                    }}>
                    <Edit />
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    iconName='ios-more-outline'
                    selectedIconName='ios-more'
                    selected={this.state.selectedTab === 'Account'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Account',
                        });
                    }}>
                  <Account />
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    },

})

// ES5
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});


AppRegistry.registerComponent('WwApp', () => WwApp)