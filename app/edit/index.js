var ReactNative = require('react-native')
var Icon = require('react-native-vector-icons/Ionicons')
var React = require('react')
var StyleSheet = ReactNative.StyleSheet
var Text = ReactNative.Text
var View = ReactNative.View
var Image = ReactNative.Image

var Edit = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Text>编辑页面</Text>
                <Image
                    source={{uri:'https://dummyimage.com/480/5f5164)'}}
                />
            </View>
        )
    }
})

// ES5
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

module.exports = Edit;