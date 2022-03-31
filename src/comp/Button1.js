import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase } from 'react-native';

import { TouchableRipple } from 'react-native-paper';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';

const Button1 = props => {
    return (
        <TouchableRipple style={{
            backgroundColor: COLORS.green074B08,
            paddingVertical: '5%', justifyContent: 'center',
            alignItems: 'center', borderRadius: 26
        }} onPress={props.onPress}>
            <Text style={STYLES.fontSize20_whiteFFFFFF_Arial_400}>{props.text}</Text>
        </TouchableRipple>
    );
};

Button1.propTypes = {

};

export default Button1;