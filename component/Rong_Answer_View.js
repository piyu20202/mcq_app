import React from "react";
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors} from "./config";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Card} from "react-native-shadow-cards";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class Rong_Answer_View extends React.Component{
    state = {
        queTab: [1, 2, 3, 4, 5, 6, 7, 8],
        que: [1, 2, 3, 4, 5],
        selecAWS1:false,
        selecAWS2:false,
        selecAWS3:false,
        selecAWS4:false,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={styles.headerView}>
                        <TouchableOpacity style={styles.closeButton}>
                            <AntDesign name={"close"} size={20}/>
                        </TouchableOpacity>
                        <View style={styles.headerTextView}>
                            <Text style={styles.headerTextFirst}>Question Bank</Text>
                            <Text style={styles.headerTextSecond}>Question 1 to 8</Text>
                        </View>
                    </View>
                    <Card style={styles.cardQue}>


                        <View>
                            <View>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.queTab}
                                    renderItem={(item, index) => {
                                        console.log("index--->",item)
                                        return (
                                            <View style={styles.flitList}>
                                                <Image source={{uri: 'https://icons-for-free.com/iconfiles/png/512/MINUS-131994911326791920.png'}}
                                                       style={{height:10,width:'auto',resizeMode:'contain'}}
                                                />
                                            </View>

                                        )
                                    }}
                                />
                            </View>
                            <View style={{marginHorizontal:10,marginBottom:10}}>
                                <View style={{flexDirection:"row",marginRight:15}}>
                                    <Text style={{ fontSize:18,fontWeight:"bold",marginRight:5}}>Q.</Text>
                                    <Text style={{ marginRight:15,fontSize:18,color:"#5B5D6C",fontWeight:"bold"}}>A person follows Calendar year for accounting. For taxation, he has to follow:</Text>
                                </View>
                            </View>


                        </View>

                    </Card>
                    <ScrollView style={{flex:0.7}}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                    >
                        <Card style={{
                            elevation:2,
                            marginHorizontal:20,
                            marginVertical:10,
                            backgroundColor:this.state.selecAWS1?colors.blue_dark:colors.white,
                            borderRadius:20,
                            paddingHorizontal:10,
                            paddingVertical:20,
                        }}>
                            <View style={{marginHorizontal:10,marginBottom:10}}>
                                <View style={{flexDirection:"row",marginRight:15}}>
                                    <Text style={{color: this.state.selecAWS1?colors.white:colors.blue_dark, fontSize:18,fontWeight:"bold",marginRight:5}}>A.</Text>
                                    <Text style={{color: this.state.selecAWS1?colors.white:colors.blue_dark, marginRight:15,fontSize:17,}}>A person follows Calendar year for accounting. For taxation</Text>
                                </View>
                            </View>
                            <View style={{alignItems:'flex-end',marginRight:20,justifyContent:'flex-end'}}>
                                {this.state.selecAWS1 ? <AntDesign name={"check"} size={25} style={{color:colors.white}}/> : null}
                            </View>
                        </Card>
                        <Card style={{
                            elevation:2,
                            marginHorizontal:20,
                            marginVertical:10,
                            backgroundColor:this.state.selecAWS2?colors.blue_dark:colors.white,
                            borderRadius:20,
                            paddingHorizontal:10,
                            paddingVertical:20,
                        }}>
                            <View style={{marginHorizontal:10,marginBottom:10}}>
                                <View style={{flexDirection:"row",marginRight:15}}>
                                    <Text style={{color: this.state.selecAWS2?colors.white:colors.blue_dark,fontSize:18,fontWeight:"bold",marginRight:5,}}>B.</Text>
                                    <Text style={{ color: this.state.selecAWS2?colors.white:colors.blue_dark,marginRight:15,fontSize:17,}}>Jodhpur Is Called Sun City,Its Start From June To August</Text>
                                </View>
                            </View>
                            <View style={{alignItems:'flex-end',marginRight:20,justifyContent:'flex-end'}}>
                                {this.state.selecAWS2 ? <AntDesign name={"check"} size={25} style={{color:colors.white}}/> : null}
                            </View>
                        </Card>
                        <Card style={{
                            elevation:2,
                            marginHorizontal:20,
                            marginVertical:10,
                            backgroundColor:this.state.selecAWS3?colors.blue_dark:colors.white,
                            borderRadius:20,
                            paddingHorizontal:10,
                            paddingVertical:20,
                        }}>
                            <View style={{marginHorizontal:10,marginBottom:10}}>
                                <View style={{flexDirection:"row",marginRight:15}}>
                                    <Text style={{color: this.state.selecAWS3?colors.white:colors.blue_dark, fontSize:18,fontWeight:"bold",marginRight:5}}>C.</Text>
                                    <Text style={{color: this.state.selecAWS3?colors.white:colors.blue_dark, marginRight:15,fontSize:17}}>Ajmer Is The Greate City In Rajasthan, All Worshipe Place exist in Ajmer And Darga For Muslim</Text>
                                </View>
                            </View>
                            <View style={{alignItems:'flex-end',marginRight:20,justifyContent:'flex-end'}}>
                                {this.state.selecAWS3 ? <AntDesign name={"check"} size={25} style={{color:colors.white}}/> : null}
                            </View>
                        </Card>
                        <Card style={{
                            elevation:2,
                            marginHorizontal:20,
                            marginVertical:10,
                            backgroundColor:this.state.selecAWS4?colors.blue_dark:colors.white,
                            borderRadius:20,
                            paddingHorizontal:10,
                            paddingVertical:20,
                        }}>
                            <View style={{marginHorizontal:10,marginBottom:10}}>
                                <View style={{flexDirection:"row",marginRight:15}}>
                                    <Text style={{ color: this.state.selecAWS4?colors.white:colors.blue_dark,fontSize:18,fontWeight:"bold",marginRight:5}}>D.</Text>
                                    <Text style={{ color: this.state.selecAWS4?colors.white:colors.blue_dark,marginRight:15,fontSize:17}}>It Follows Moon Calender Which is Directly Depend On Person</Text>
                                </View>
                            </View>
                            <View style={{alignItems:'flex-end',marginRight:20,justifyContent:'flex-end'}}>
                                {this.state.selecAWS4 ? <AntDesign name={"check"} size={25} style={{color:colors.white}}/> : null}
                            </View>
                        </Card>
                    </ScrollView>

                </View>
                <View>
                    <View style={styles.timeView}>
                        <Text style={{fontSize: 20, color: colors.black,fontWeight:'bold'}}>Yay! Correct Answer</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.buttonPreview}>
                            <Text style={{marginLeft:10,fontSize:18,color:colors.blue_dark,}}>View Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNext}>
                            <Text style={{marginHorizontal:10,fontSize:18,color:'#FD7150',fontWeight:"bold"}}>Next</Text>
                            <Entypo name={"chevron-right"} color={'#FD7150'} size={15}/>
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
        backgroundColor:colors.ans_bg
    },
    headerView:{
        flexDirection:'row',
        marginTop:50,
        alignItems:'flex-start',
        marginHorizontal:20,
    },
    closeButton:{
        borderRadius:100,
        padding:5,
        elevation: 5,
        backgroundColor:colors.closeBGColor,
        height:34,
        width:34,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTextView:{
        alignItems:'center',
        marginHorizontal:0,
    },
    headerTextFirst:{
        fontSize:15,
        alignContent:"center",
        color:colors.white,
    },
    headerTextSecond:{
        fontSize:18,
        alignContent:"center",
        color:colors.blue_dark,
        fontWeight: "bold",
        marginLeft:25
    },
    cardQue:{

        flexDirection: 'row',
        elevation:3,
        marginHorizontal:20,
        marginVertical:20,
        backgroundColor:colors.quiz_card,
        borderRadius:10,
        paddingHorizontal:5,
    },
    cardAWS:{
        elevation:2,
        marginHorizontal:20,
        marginVertical:10,
        backgroundColor: "#fff",
        borderRadius:20,
        paddingHorizontal:10,
        paddingVertical:20,
    },
    flitList:{
        paddingHorizontal: 6,
    },
    timeView:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10
    },
    buttonView:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginVertical:20,
    },
    buttonPlayPause:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:100,
        padding: 15,
        backgroundColor:colors.buttonPlayPause,
    },
    buttonPreview:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:100,
        padding: 15,
        backgroundColor:colors.btn_next
    },
    buttonNext:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:100,
        padding: 15,
        backgroundColor:colors.buttonColor
    }

})
