import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase } from 'react-native';

import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

const ButtonSvg = props => {
    return (
        <TouchableRipple style={{
            backgroundColor: COLORS.green074B08,
            paddingVertical: '5%', justifyContent: 'center',
            alignItems: 'center', borderRadius: 26,
            flexDirection: 'row'
        }} onPress={props.onPress}>
            <>
                <SvgXml xml={props.xml} style={{ marginRight: '5%' }} />
                {/* <Image source={require('../utilities/svgs/camera.svg')} resizeMode={'cover'}
                    style={{ height: 40, width: 40 }} /> */}
                <Text style={STYLES.fontSize20_whiteFFFFFF_Arial_400}>{props.text}</Text>
            </>
        </TouchableRipple>
    );
};

ButtonSvg.propTypes = {

};

export default ButtonSvg;