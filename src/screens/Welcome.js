import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox } from 'react-native-paper';
import Button1 from '../comp/Button1';
import Box from '../comp/Box';
import LastBox from '../comp/LastBox';
const Welcome = ({ navigation }) => {
    const [stateName, setStateName] = useState();


    useEffect(() => {
        getMyObject()
    }, [])
    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('ownerName')
            if (jsonValue != null) {
                return (
                    setStateName(jsonValue)
                    //  console.log('appname'),
                )
            }
            else {
                return (
                    null
                )
            }
        } catch (e) {
            alert(e)
        }
    }
    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                justifyContent: 'center', paddingLeft: '10%'
            }]}>
                <Text style={STYLES.fontSize27_whiteFFFFFF_Arial_Bold}>Welcome , {stateName}</Text>

            </View>
            <View style={{
                flex: 0.70, //backgroundColor: 'red',
                paddingHorizontal: '7%'
            }}>
                <View style={{
                    flexDirection: 'row', //width: '70%',
                    marginTop: '5%', justifyContent: 'space-between'
                }}>
                    <Box xml={Svgs.myShope} text="My Shops"
                        onPress={() => navigation.navigate("MyShops")} />
                    <Box xml={Svgs.manageManagers} text="MANAGE MANAGERS"
                        onPress={() => navigation.navigate("ManageManager")} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: '5%', justifyContent: 'space-between'
                }}>
                    <Box xml={Svgs.manageManagers} text="MANAGE CASHIER"
                        onPress={() => navigation.navigate("ManageCashier")} />
                    <Box xml={Svgs.manageProducts} text="MANAGE PRODUCTS"
                        onPress={() => navigation.navigate("ManageProducts")} />
                </View>
                <View style={{

                    marginTop: '5%',
                }}>
                    <LastBox xml={Svgs.Report} text="REPORT" />

                </View>
            </View>
            <View style={{
                flex: 0.1, //backgroundColor: 'green',
                justifyContent: 'flex-start',
                paddingHorizontal: '7%'
            }}>

                {/* <View style={{
                    marginBottom: '7%',
                    // backgroundColor: 'pink'
                }}> */}
                <Button1 text="LOGOUT"
                    onPress={() => navigation.navigate("SignIn")} />

                {/* </View> */}

            </View>
        </View>
    );
};

Welcome.propTypes = {

};

export default Welcome;