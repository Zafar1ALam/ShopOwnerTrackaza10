
import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import Box from '../comp/Box';
import LastBox from '../comp/LastBox';
const DoubleTextHeader = (props) => {
    return (
        <>
            <TouchableRipple onPress={props.onPress}
                style={{ alignSelf: "flex-start" }}>
                <SvgXml xml={Svgs.goBack} style={{
                    marginTop: '5%',
                    marginLeft: "5%"
                }} />
            </TouchableRipple>
            <View style={[{
                flex: 0.9,
                // backgroundColor: 'red',
                // backgroundColor: COLORS.green074B08,
                justifyContent: 'center', //paddingLeft: '10%'
                alignItems: 'center'
            }]}>
                <Text style={STYLES.fontSize27_whiteFFFFFF_Arial_Bold}>{props.text}</Text>
                <Text style={[STYLES.fontSize21_whiteFFFFFF_Arial_Bold,
                {}]}>{props.text1}</Text>

            </View>
        </>
    );
};

export default DoubleTextHeader;