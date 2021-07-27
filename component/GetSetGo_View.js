import React from "react";
import {Text, View,StyleSheet} from "react-native";
import {colors} from "./config";
import {Card} from "react-native-shadow-cards";

export default class GetSetGo_View extends React.Component{
    state={
        number:0,
    }
    componentDidMount() {
        this.setState({number:3})
        let decres
        setInterval(()=>{
            decres=this.state.number-1;
            this.setState({number:decres})
            if (decres==0){
                this.setState({number:"GO!"})
                clearInterval(this.state.number)
            }

            if (this.state.number=="GO!"){
                this.props.navigation.navigate("Quiz_View")
                clearInterval(this.state.number)
            }

        },1000)
        // clearInterval(this.state.number)
    }
    componentDidUpdate(){
        if(this.state.number === null){
            clearInterval(this.interval);
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return(
            <View style={styles.container}>
                <Card style={styles.card}>
                    <View style={styles.textView}>
                        <Text style={styles.textTime}>{this.state.number}</Text>
                        <Text style={styles.textBeReady}>Be ready</Text>
                    </View>
                </Card>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    card:{
        flex: 0.8,
        elevation:5,
        marginHorizontal:20,
        marginVertical:50,
        backgroundColor:colors.blue_dark,
        borderRadius:20,
        paddingHorizontal:20,
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical:20,
    },
    textView:{

        justifyContent: 'center',
        alignItems:'center',
    },
    textTime:{
        color:colors.white,
        justifyContent: 'center',
        alignItems:'center',
        fontWeight:'bold',
        fontSize:50
    },
    textBeReady:{
        color:colors.white,
        justifyContent: 'center',
        alignItems:'center',
    },
})
