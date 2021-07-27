import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {colors} from "./config";
import {Card} from "react-native-shadow-cards";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Quiz_Dashboard_View extends React.Component{
    state={

    }

    render() {
        /*React.useLayoutEffect(()=>{
           this.props.navigation.setOption
        })*/
        return(
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.firstText}>Company Low . Chapter 2</Text>
                    <Text style={styles.secondText}>{"Business Mathematics and"}</Text>
                    <Text style={styles.secondText}>{"Logical reasoning &"}</Text>
                    <Text style={styles.secondText}>{"Statistics"}</Text>
                    <View style={styles.iconMainView}>
                        <View >
                            <View  style={styles.iconView}>
                                <Feather name={"watch"} size={25} />
                            </View>
                            <View style={styles.iconTextView}>
                                <Text>Time</Text>
                                <Text style={styles.secondText}>30 min</Text>
                            </View>
                        </View>
                        <View>
                            <View  style={styles.iconView}>
                                <Entypo name={"text-document"} size={25}/>
                            </View>
                            <View style={styles.iconTextView}>
                                <Text>Questions</Text>
                                <Text style={styles.secondText}>06</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.iconMainView}>
                        <View>
                            <View  style={styles.iconView}>
                                <Ionicons name={"md-trophy-outline"} size={25}/>
                            </View>
                            <View style={styles.iconTextView}>
                                <Text>Marks</Text>
                                <Text style={styles.secondText}>60</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.iconView}>
                                <Feather name={"users"} size={25}/>
                            </View>
                            <View style={styles.iconTextView}>
                                <Text>Students</Text>
                                <Text>attempted</Text>
                                <Text style={styles.secondText}>810</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("GetSetGo_View")}>
                        <Text style={styles.buttonText}>Attempt Now</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    card:{
      elevation:0,
        marginHorizontal:20,
        marginVertical:50,
        backgroundColor:colors.blue_light,
        borderRadius:20,
        paddingHorizontal:20,
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical:20
    },
    firstText:{
        fontSize:15,
        alignContent:"center",
        color:colors.textColorFirst,
    },
    secondText:{
        fontSize:20,
        alignContent:"center",
        color:colors.blue_dark,
        fontWeight: "bold"
    },
    iconMainView:{
        flexDirection:"row",
        justifyContent:'space-around'
    },
    iconView:{
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: colors.blue_light_dark,
        padding:30,
        borderRadius:20
    },
    iconTextView:{
        alignItems:'center',
        marginTop: 5,
    },
    button:{
        marginVertical: 20,
        backgroundColor: colors.blue_dark,
        borderRadius:50,
    },
    buttonText:{
        color:colors.white,
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:80,
        marginVertical:12,
    }
})
