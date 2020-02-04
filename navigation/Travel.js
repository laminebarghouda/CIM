import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from  'react-navigation-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import List from '../screens/List';
import Article from '../screens/Article';
import Settings from "../screens/Settings";
import * as theme from "../theme";

 const stackNavigator = createStackNavigator(
  {
    List: {
        screen : List
    },
    Article:{
        screen: Article,
    },
  },
  {
    initialRouteName: "List",
  }
);

stackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible
    };
};

 const TabNavigator = createBottomTabNavigator(
    {
        List: {
            screen: stackNavigator,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({focused}) => {
                    return <AntDesign
                        focused={{ focused }}
                        name="home"
                        size={theme.sizes.font * 1.5}
                        active={focused}
                        color={focused ? theme.colors.active : theme.colors.black}
                    />
                },
            }),
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return <AntDesign
                        focused={{ focused }}
                        name="exclamationcircleo"
                        size={theme.sizes.font * 1.5}
                        active={focused}
                        color={focused ? theme.colors.active : theme.colors.black}
                    />
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            activeTintColor:theme.colors.active,
            showLabel: false,
            showIcon: true,
        },
    }
)
export default createAppContainer(TabNavigator)
