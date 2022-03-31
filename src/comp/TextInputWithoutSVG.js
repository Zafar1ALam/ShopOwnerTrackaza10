
import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput } from 'react-native';

import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
const TextInputWithoutSVG = props => {

    return (
        <View style={{
            borderRadius: 29,
            borderWidth: 1, borderColor: COLORS.black1A1A1A,
            paddingHorizontal: '1%',
            //paddingVertical: '5%', 

        }}>

            <TextInput placeholder={props.placeholder} style={[STYLES.fontSize15_grey707070_Arial_400,
            { marginLeft: '5%', }]} keyboardType={props.keyboardType}
                editable={props.editable}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value} />
        </View>
    );
};

TextInputWithoutSVG.propTypes = {

};

export default TextInputWithoutSVG;