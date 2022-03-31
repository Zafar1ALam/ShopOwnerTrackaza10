
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
const DoubleTextSvgHeader = (props) => {
    return (
        <>
            <TouchableRipple style={{ alignSelf: 'flex-start' }}
                onPress={props.onPress}>
                <SvgXml xml={Svgs.goBack} style={{
                    marginTop: '5%',
                    marginLeft: "5%"
                }} />
            </TouchableRipple>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'center',
                //    , backgroundColor: 'red'
                //  , width: '70%',
                flex: 0.7,
                alignItems: 'center',
                justifyContent: 'center'


            }}>
                <SvgXml xml={props.xml1} style={{ marginRight: '3%' }} />
                <Text style={STYLES.fontSize27_whiteFFFFFF_Arial_Bold}>{props.text}</Text>
            </View>
            <Text style={[STYLES.fontSize21_whiteFFFFFF_Arial_Bold,
            { alignSelf: 'center' }]}>{props.text1}</Text>
        </>
    );
};

export default DoubleTextSvgHeader;