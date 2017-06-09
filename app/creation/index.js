var ReactNative = require('react-native')
var Icon = require('react-native-vector-icons/Ionicons').default;
var React = require('react')
var StyleSheet = ReactNative.StyleSheet
var Text = ReactNative.Text
var View = ReactNative.View
var ListView = ReactNative.ListView
var TouchableHighlight = ReactNative.TouchableHighlight
var Image = ReactNative.Image
var Dimensions = ReactNative.Dimensions   // 获取屏幕的宽度

var width = Dimensions.get('window').width

var List = React.createClass({

    getInitialState: function(){
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2
        })
        return{
            dataSource:ds.cloneWithRows([
                {
                    "_id":"630000200206096081","thumb":"https://dummyimage.com/480/df3ae8)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"430000201310069152","thumb":"https://dummyimage.com/480/1e5405)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"420000199611041434","thumb":"https://dummyimage.com/480/2d0a4d)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"510000197308117777","thumb":"https://dummyimage.com/480/f4aaf0)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"61000019830712536X","thumb":"https://dummyimage.com/480/de3486)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"710000201004262293","thumb":"https://dummyimage.com/480/2b97df)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"120000197607063358","thumb":"https://dummyimage.com/480/6f967a)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"650000199906155474","thumb":"https://dummyimage.com/480/40f2b8)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"430000200610070919","thumb":"https://dummyimage.com/480/b0a46b)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
                ,
                {
                    "_id":"320000198701051128","thumb":"https://dummyimage.com/480/ae7980)","title":"测试内容p3u7","video":"'http://alicdn.ku6.com/v145/9/58/ab67b274f3edb66f45f07c383a5e2226-f4v-h264-aac-251-32-281334.0-10148555-1388158506769-2b10b0f32e98ed4243641f424085ec2d-1-00-00-00.f4v.mp4?auth_key=1496920863-0-0-5176b9010b3a2ab1584962f94ad4c1c9&start=0'"
                }
            ]),
        }
    },

    renderRow:function (row) {
        return (
            <TouchableHighlight onPress={this._onPressButton}>
                <View style={styles.item}>
                    <Text style={styles.title}>{row.title}</Text>
                    <Image
                        source={{uri:row.thumb}}
                        style={styles.thumb}
                        >
                    <Icon
                        name='ios-play'
                        size={28}
                        style={styles.play}
                    />
                    </Image>
                    <View style={styles.itemFooter}>
                        <View style={styles.handleBox}>
                            <Icon
                                name='ios-heart-outline'
                                size={28}
                                style={styles.up}
                            />
                            <Text style={styles.handleText}>点赞</Text>

                        </View>
                        <View style={styles.handleBox}>
                            <Icon
                                name='ios-chatboxes-outline'
                                size={28}
                                style={styles.commentIcon}
                            />
                            <Text style={styles.handleText}>评论</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    },
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>列表页面</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                    automaticallyAdjustContentInsets={false}
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
    header: {
        paddingTop:25,
        paddingBottom:12,
        backgroundColor: '#ee735c',
    },
    headerTitle: {
        color: 'white',
        fontSize:16,
        textAlign:'center',
        fontWeight:'600'
    },
    item:{
        width:width,
        marginBottom:10,
        backgroundColor:'#fff'
    },
    thumb:{
        width:width,
        height:width * 0.56,
        resizeMode:'cover'
    },
    title:{
        padding:10,
        fontSize:18,
        color:'#333'
    },
    itemFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#eee'
    },
    handleBox:{
        padding:10,
        flexDirection:'row',
        width:width/2 - 0.5,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    play:{
        position:'absolute',
        bottom:14,
        right:14,
        width:46,
        height:46,
        paddingTop:9,
        paddingLeft:18,
        backgroundColor:'transparent',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:23,
        color:'#ed7d66'
    },
    handleText:{
        paddingLeft:12,
        fontSize:18,
        color:'#333'
    },
    up:{
        fontSize:22,
        color:'#333'
    },
    commentIcon: {
        fontSize:22,
        color:'#333'
    }
});

module.exports = List;