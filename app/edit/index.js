var ReactNative = require('react-native')
var Icon = require('react-native-vector-icons/Ionicons')
var React = require('react')
var StyleSheet = ReactNative.StyleSheet
var Text = ReactNative.Text
var View = ReactNative.View

var Edit = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Text>编辑页面</Text>
            </View>
        )
    }
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

module.exports = Edit;