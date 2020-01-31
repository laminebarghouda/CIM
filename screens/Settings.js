import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Linking, Image,
} from 'react-native'
import * as theme from '../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 0,
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    destinations: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    introduction: {
        borderRadius: theme.sizes.radius,
        paddingHorizontal: theme.sizes.padding,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: theme.sizes.padding / 2,
        bottom: 20,
        marginBottom:15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: theme.colors.white,

    },
    logo: {
        width: theme.sizes.padding *2,
        height: theme.sizes.padding *2,
        borderRadius: theme.sizes.padding / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5,
    },
    Link: {
        paddingBottom: 20,
    }

});

class Settings extends Component {
    static navigationOptions = {
        headerShown: false,
    };


    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: theme.sizes.padding * 1.5, paddingBottom: theme.sizes.padding }}
            >
                <View style={[styles.column, styles.introduction, styles.shadow,]}>
                    <View style={{justifyContent: 'center',  alignItems: 'center',paddingBottom: 10, }}>
                        <Image source={require("../assets/icon.png")} style={styles.logo} />
                    </View>
                    <View style={[styles.row, {justifyContent: 'space-between', alignItems: 'flex-end'}]}>
                        <Text style={{color: theme.colors.grey, fontSize: 15,}}>
                            Le Club INSAT Maintenance (CIM) vise à accomplir la formation des futurs ingénieurs à travers les visites
                            industrielles, les formations professionnelles et les applications dans le domaine de l’automatique.
                        </Text>
                    </View>
                </View>
                <View style={ [styles.column, styles.introduction, styles.shadow, styles.Link]} >
                    <TouchableOpacity onPress={() => Linking.openURL('fb://page/1374925749399726')}>
                        <View>
                            <Text style={{color: theme.colors.active}} >
                        <AntDesign
                            name="facebook-square"
                            size={theme.sizes.font*1.5}
                        />
                                {'\t'}{'\t'}Facebook
                        </Text>
                        </View>
                          </TouchableOpacity>
                    </View>
                <View style={ [styles.column, styles.introduction, styles.shadow, styles.Link]} >
                    <TouchableOpacity onPress={() => Linking.openURL('http://instagram.com/_u/club_insat_maintenance')}>
                        <View>
                            <Text style={{color: theme.colors.instagram}}>
                                <AntDesign
                                    name="instagram"
                                    size={theme.sizes.font*1.5}
                                />
                                {'\t'}{'\t'}Instagram
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={ [styles.column, styles.introduction, styles.shadow, styles.Link]} >
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${24094947}`)}>
                        <View>
                            <Text style={{color: theme.colors.green}}>
                                <AntDesign
                                    name="phone"
                                    size={theme.sizes.font*1.5}
                                />
                                {'\t'}{'\t'} Phone
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={ [styles.column, styles.introduction, styles.shadow, styles.Link]} >
                    <TouchableOpacity onPress={() => Linking.openURL('mailto:club.insat.maintenace@gmail.com')}>
                        <View>
                            <Text style={{color: theme.colors.grey}}>
                                <AntDesign
                                    name="mail"
                                    size={theme.sizes.font*1.5}
                                />
                                {'\t'}{'\t'}Email
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}


export default Settings;
