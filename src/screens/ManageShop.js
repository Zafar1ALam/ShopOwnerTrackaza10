
import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox } from 'react-native-paper';
import Button1 from '../comp/Button1';
import Box from '../comp/Box';
import LastBox from '../comp/LastBox';
import DoubleTextHeader from '../comp/DoubleTextHeader';
const ManageShop = ({ navigation }) => {
    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                // justifyContent: 'center', //paddingLeft: '10%'
                // alignItems: 'center'
            }]}>
                {/* <Text style={STYLES.fontSize27_whiteFFFFFF_Arial_Bold}>Manage Shop</Text>
                <Text style={STYLES.fontSize21_whiteFFFFFF_Arial_Bold}>Shop Name Here</Text> */}
                <DoubleTextHeader text="Manage Shop" text1="Shop Name Here"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{
                flex: 0.8, //backgroundColor: 'red',
                paddingHorizontal: '7%'
            }}>
                <View style={{
                    flexDirection: 'row', //width: '70%',
                    marginTop: '5%', justifyContent: 'space-between'
                }}>
                    <Box xml={Svgs.dollar} text="Manage Account"
                        onPress={() => navigation.navigate("ManageAccount")} />
                    <Box xml={Svgs.business} text="Business Performance"
                        onPress={() => navigation.navigate("BusinessPerformance")} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: '5%', justifyContent: 'space-between'
                }}>
                    <Box xml={Svgs.account} text="Account History"
                        onPress={() => navigation.navigate("AccountHistory")} />
                    <Box xml={Svgs.recoveryEvent} text="Debts Recovery Events" />
                </View>
                <View style={{

                    marginTop: '5%',
                }}>
                    <LastBox xml={Svgs.comission} text="My Commission"
                        onPress={() => navigation.navigate("MyCommission")} />

                </View>
            </View>

        </View>
    );
};



export default ManageShop;
