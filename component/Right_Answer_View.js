import React from "react";
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors} from "./config";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Card} from "react-native-shadow-cards";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RBSheet from "react-native-raw-bottom-sheet";

export default class Right_Answer_View extends React.Component{
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
                        <TouchableOpacity style={styles.buttonPreview}
                            onPress={()=>{
                                this.RBSheet.open()
                            }}
                        >
                            <Text style={{fontSize:18,color:colors.blue_dark,}}>View Solution</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNext}>
                            <Entypo name={"chevron-left"} color={'#FD7150'} size={15}/>
                            <Text style={{marginHorizontal:5,fontSize:18,color:'#FD7150',fontWeight:"bold"}}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNext}
                            onPress={()=>this.props.navigation.navigate("Report_Card_View")}
                        >
                            <Text style={{marginHorizontal:8,fontSize:18,color:'#FD7150',fontWeight:"bold"}}>Next</Text>
                            <Entypo name={"chevron-right"} color={'#FD7150'} size={15}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    height={300}
                    customStyles={{
                        container: {
                            backgroundColor: 'white',
                            alignItems: "center",
                            borderTopLeftRadius: 25,
                            borderTopRightRadius:25,
                        },
                        draggableIcon: {
                            backgroundColor: "white"
                        }
                    }}
                    style={{

                    }}
                >
                    <View style={{marginHorizontal:20}}>
                        <Text style={{fontSize:25,fontWeight:'bold'}}>Solution</Text>
                        <Text style={{marginTop:10,fonSize:15}}>
                            {"The most fundamental component for building a UI, " +
                            "View is a container that supports layout with flexbox, " +
                            "style, some touch handling, and accessibility controls. " +
                            "View maps directly to the native view equivalent on whatever " +
                            "platform React Native is running on, whether that is a UIView," +
                            " <div>, android.view, etc."}
                        </Text>
                        <View style={{marginLeft:150,marginVertical:20}}>
                            <TouchableOpacity style={{flexDirection: 'row',
                                alignItems:'center',
                                justifyContent:'center',
                                borderRadius:100,
                                padding: 15,
                                backgroundColor:colors.buttonPlayPause}}>
                                <Text style={{fontSize:18,color:'white',
                                    fontWeight:"bold"}}>Next Quetion </Text>
                                <Entypo name={"chevron-right"} color={'white'} size={20}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </RBSheet>
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
        paddingVertical: 5,
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
