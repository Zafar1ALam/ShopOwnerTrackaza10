import React, { useState, useRef, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView, TouchableOpacity } from 'react-native';


import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';

import Header from '../comp/Header';
import ButtonSvg from '../comp/ButtonSvg';
import { SvgXml } from 'react-native-svg';
import DoubleTextSvgHeader from '../comp/DoubleTextSvgHeader';

const MyCommision = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={STYLES.withoutpaddingcontainer}>

                <View style={[{
                    flex: 0.2, backgroundColor: COLORS.green074B08,
                    //justifyContent: 'center', 
                    //paddingLeft: '10%',

                }]}>
                    <DoubleTextSvgHeader xml={Svgs.goBack} xml1={Svgs.comission}
                        text="MY Commission" text1="Shop Name Here"
                        onPress={() => navigation.goBack()} />

                </View>
                <View style={{
                    flex: 0.80, //backgroundColor: 'red',
                    // paddingHorizontal: '7%'
                    paddingHorizontal: '7%', marginTop: '5%'
                }}>

                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Gross Commision</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>2000 $</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Net Commision</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>200 $</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Monthly Commision</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>100 $</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Yearly Commision</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>10 $</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default MyCommision;