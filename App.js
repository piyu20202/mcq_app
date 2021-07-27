import React from 'react';
import Quiz_Dashboard_View from "./component/Quiz_Dashboard_View";
import Quiz_View from "./component/Quiz_View";
import Report_Card_View from "./component/Report_Card_View";
import Right_Answer_View from "./component/Right_Answer_View";
import GetSetGo_View from "./component/GetSetGo_View";



import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Quiz_Dashboard_View"
                //screenOptions={{headerShown: false}}
            >
                <Stack.Screen
                    name="Quiz_Dashboard_View"
                    component={Quiz_Dashboard_View}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Quiz_View"
                    component={Quiz_View}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="GetSetGo_View"
                    component={GetSetGo_View}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Right_Answer_View"
                    component={Right_Answer_View}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
