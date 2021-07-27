import React, {useState} from "react";
import {Text, View, StyleSheet, Button, TouchableOpacity, FlatList, ScrollView, Image} from "react-native";
import {colors} from "./config";
import {Card} from "react-native-shadow-cards";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

//const [secletAWS,setSelectAWS] = useState(false)
var secletAWS=false;
export default class Quiz_View extends React.Component {
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
                                                {/*<FontAwesome5 name={"minus"} size={30}
                                                              style={{color:item.index==0?colors.dark_gray:colors.light_gray}}
                                                />*/}
                                                <Image source={require('../assets/minus.png')}
                                                       style={{width:45,height:10,resizeMode:'cover',
                                                           tintColor:item.index==0?colors.dark_gray:colors.light_gray}}
                                                />
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View style={{marginHorizontal:10,marginBottom:10,marginTop:13}}>
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
                            paddingVertical:5,
                        }}>
                            <TouchableOpacity onPress={()=>{
                                this.setState({selecAWS1:true})
                                this.setState({selecAWS2:false})
                                this.setState({selecAWS3:false})
                                this.setState({selecAWS4:false})
                            }}>
                                <View style={{marginHorizontal:10,marginBottom:10}}>
                                    <View style={{flexDirection:"row",marginRight:15}}>
                                        <Text style={{color: this.state.selecAWS1?colors.white:colors.blue_dark, fontSize:18,fontWeight:"bold",marginRight:5}}>A.</Text>
                                        <Text style={{color: this.state.selecAWS1?colors.white:colors.blue_dark, marginRight:15,fontSize:17,}}>A person follows Calendar year for accounting. For taxation</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{alignItems:'flex-end',marginRight:20,}}>
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
                            paddingVertical:5,
                        }}>
                            <TouchableOpacity onPress={()=>{
                                this.setState({selecAWS1:false})
                                this.setState({selecAWS2:true})
                                this.setState({selecAWS3:false})
                                this.setState({selecAWS4:false})
                            }}>
                                <View style={{marginHorizontal:10,marginBottom:10}}>
                                    <View style={{flexDirection:"row",marginRight:15}}>
                                        <Text style={{color: this.state.selecAWS2?colors.white:colors.blue_dark,fontSize:18,fontWeight:"bold",marginRight:5,}}>B.</Text>
                                        <Text style={{ color: this.state.selecAWS2?colors.white:colors.blue_dark,marginRight:15,fontSize:17,}}>Jodhpur Is Called Sun City,Its Start From June To August</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{alignItems:'flex-end',marginRight:20,}}>
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
                            paddingVertical:5,
                        }}>
                            <TouchableOpacity onPress={()=>{
                                this.setState({selecAWS1:false})
                                this.setState({selecAWS2:false})
                                this.setState({selecAWS3:true})
                                this.setState({selecAWS4:false})
                            }}>
                                <View style={{marginHorizontal:10,marginBottom:10}}>
                                    <View style={{flexDirection:"row",marginRight:15}}>
                                        <Text style={{color: this.state.selecAWS3?colors.white:colors.blue_dark, fontSize:18,fontWeight:"bold",marginRight:5}}>C.</Text>
                                        <Text style={{color: this.state.selecAWS3?colors.white:colors.blue_dark, marginRight:15,fontSize:17}}>Ajmer Is The Greate City In Rajasthan, All Worshipe Place exist in Ajmer And Darga For Muslim</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{alignItems:'flex-end',marginRight:20,}}>
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
                            paddingVertical:5,
                        }}>
                            <TouchableOpacity onPress={()=>{
                                this.setState({selecAWS1:false})
                                this.setState({selecAWS2:false})
                                this.setState({selecAWS3:false})
                                this.setState({selecAWS4:true})
                            }}>
                                <View style={{marginHorizontal:10,marginBottom:10}}>
                                    <View style={{flexDirection:"row",marginRight:15}}>
                                        <Text style={{ color: this.state.selecAWS4?colors.white:colors.blue_dark,fontSize:18,fontWeight:"bold",marginRight:5}}>D.</Text>
                                        <Text style={{ color: this.state.selecAWS4?colors.white:colors.blue_dark,marginRight:15,fontSize:17}}>It Follows Moon Calender Which is Directly Depend On Person</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{alignItems:'flex-end',marginRight:20,}}>
                                {this.state.selecAWS4 ? <AntDesign name={"check"} size={25} style={{color:colors.white}}/> : null}
                            </View>
                        </Card>
                    </ScrollView>

                </View>
                <View>
                    <View style={styles.timeView}>
                        <Text style={{fontSize: 15, color: colors.light_gray}}>Time Left</Text>
                        <Text style={{fontSize: 22, color: colors.black, fontWeight: 'bold'}}>00:25:00</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.buttonNext_Preview}>
                            <Entypo name={"chevron-left"} color={'#FD7150'} size={15}/>
                            <Text style={{marginLeft:10,fontSize:18,color:'#FD7150',fontWeight:"bold"}}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonPlayPause}>
                            <FontAwesome name={"pause"} size={20} color={colors.white}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNext_Preview}
                            onPress={()=>{this.props.navigation.navigate("Right_Answer_View")}}
                        >
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
        backgroundColor:"white"
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
        color:colors.textColorFirst,
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
        backgroundColor: secletAWS?"#fff000":"#fff",
        borderRadius:20,
        paddingHorizontal:10,
        paddingVertical:20,
    },
    flitList:{
        paddingVertical: 5,
    },
    timeView:{
        alignItems:'center',
        justifyContent:'center'
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
    buttonNext_Preview:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:100,
        padding: 15,
        backgroundColor:colors.buttonColor
    }

})
