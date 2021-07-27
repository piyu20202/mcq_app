import React from "react";
import {Text, View, StyleSheet, Animated, TouchableOpacity, Image} from "react-native";
import {colors} from "./config";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default class Report_Card_View extends React.Component{
    state={

    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.mainCard}>
                    <View style={{flexDirection:"row",marginHorizontal:20,marginTop:30}}>
                        <Image source={require('../assets/harder.png')} style={{height:100,width:60,
                            marginRight:20}} />
                        <View>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Try harder next time !</Text>
                            <Text style={{fontSize:15,color:colors.light_gray}}>Company Low Chapter 2</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Business Mathematics and</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Logical reasoning & Statics</Text>
                        </View>
                    </View>
                    <View style={{borderRadius:30,backgroundColor:colors.resultCardOther,
                        marginHorizontal:20,paddingHorizontal:20,paddingVertical:10,marginTop:20}}>
                        <Text style={{marginTop:10}}>Accuracy</Text>
                        <View style={{ width: "100%", height: 10, padding: 0, borderColor: "#FAA", borderWidth: 3,
                            borderRadius: 30, marginTop: 10, justifyContent: "center", backgroundColor:'#faa'  }}>
                            <Animated.View
                                style={[{width: "100%", height: 10,marginTop:0, borderRadius: 15, backgroundColor: "green"},
                                    ,{width: 50 +"%"},]}
                            />
                            <Animated.Text style={{fontSize:12, fontWeight:'bold', color: "black", width:'20%',position:'absolute',
                                backgroundColor:'white', borderRadius:10, paddingLeft:15,alignSelf:'center'}}>
                                {"50"}%
                            </Animated.Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                            <Text>Correct</Text>
                            <Text>InCorrect</Text>
                        </View>
                    </View>
                    <View style={{borderRadius:30,backgroundColor:colors.resultCardOther,marginHorizontal:20,
                        paddingHorizontal:20,paddingVertical:20,marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <AntDesign name={"check"} size={20} style={{color:colors.ans_bg}}/>
                                    <Text style={{color:colors.ans_bg}}>Correct</Text>
                                </View>
                                <Text style={{fontSize:22,color:colors.blue_dark,fontWeight:'bold'}}>{"10"}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <AntDesign name={"close"} size={20} style={{color:colors.buttonPlayPause}}/>
                                    <Text style={{color:colors.buttonPlayPause}}>InCorrect</Text>
                                </View>
                                <Text style={{fontSize:22,color:colors.blue_dark,fontWeight:'bold'}}>{"05"}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                <Feather name={"watch"} size={30} />
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:colors.buttonPlayPause}}>Time taken</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:22,color:colors.blue_dark,fontWeight:'bold'}}>{"23"}</Text>
                                        <Text style={{fontSize:12,color:colors.blue_dark,fontWeight:'bold',alignSelf:'flex-end'}}>{" min"}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',
                        marginHorizontal:20,
                    }}>
                        <View style={{borderRadius:30,backgroundColor:colors.resultCardOther,paddingHorizontal:20,
                            marginTop:20,alignItems:'center',justifyContent:'center',paddingVertical:30}}>
                            <View style={{flexDirection:'row'}}>
                                <Ionicons name={"md-trophy-outline"} size={30} style={{marginTop: 5,}}/>
                                <View>
                                    <Text>Overall Rank</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:25,color:colors.blue_dark,fontWeight:'bold'}}>{"21"}</Text>
                                        <MaterialCommunityIcons name={'slash-forward'} size={25} />
                                        <Text style={{fontSize:25,color:colors.blue_dark,fontWeight:'bold'}}>{"56"}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{borderRadius:30,backgroundColor:colors.resultCardOther, paddingHorizontal:20,
                            marginTop:20,alignItems:'center',justifyContent:'center'}}>
                            <View style={{alignItems:'flex-start'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Feather name={"users"} size={25} style={{marginTop: 5,}}/>
                                    <Text style={{fontSize:25,color:colors.blue_dark,fontWeight:'bold'}}>{"23"}</Text>
                                </View>
                                <Text style={{fontSize:11}}>
                                    {"students completed \nthis test before you"}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginHorizontal:20,marginTop:20,marginBottom:30}}>
                        <TouchableOpacity style={{backgroundColor:colors.blue_dark,borderRadius:30,
                            width:"100%",alignItems:'center',justifyContent:'center',paddingVertical:10}}>
                            <Text style={{fontSize:20,color:colors.white}}>Review Questions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:colors.buttonPlayPause,borderRadius:30,
                            marginTop:20, width:"100%",alignItems:'center',justifyContent:'center',
                            paddingVertical:10,}}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                                <EvilIcons name={"share-google"} size={40} color={colors.white}/>
                                <Text style={{fontSize:20,color:colors.white}}>Share this</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    mainCard:{
      backgroundColor:colors.resultMainCard,
        flex: 1,
        marginVertical:100,
        marginHorizontal:20,
        borderRadius:20,
    },
})
