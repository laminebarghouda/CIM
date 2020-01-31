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
    List,
    Article,
  },
  {
    initialRouteName: "List",
  }
);

 const TabNavigator = createBottomTabNavigator(
    {
        List: {
            screen: stackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <AntDesign
                        name="home"
                        size={theme.sizes.font * 1.5}
                    />
                }
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return <AntDesign
                        name="exclamationcircleo"
                        size={theme.sizes.font * 1.5}
                        active={focused}
                    />
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            activeTintColor:'blue',
            showLabel: false,
            showIcon: true
        },
    }
)
export default createAppContainer(TabNavigator)
