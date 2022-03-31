import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import STYLES from '../STYLES';
import { TouchableRipple } from 'react-native-paper';

const Box = props => {
    return (
        <TouchableRipple style={{
            borderWidth: 1, width: '48%',
            alignItems: 'center',
            borderColor: COLORS.green074B08, paddingHorizontal: '5%',
            paddingVertical: '7%'
        }} onPress={props.onPress}>
            <>
                <View style={{
                    backgroundColor: COLORS.green074B08,
                    borderRadius: 10, paddingHorizontal: '10%',
                    paddingVertical: '10%', alignItems: 'center'
                }}>
                    <SvgXml xml={props.xml} />
                </View>
                <Text style={[STYLES.fontSize18_grey1C1939_Arial_400,
                { marginTop: '10%', textAlign: 'center' }]}>{props.text}</Text>
            </>
        </TouchableRipple>
    );
};

Box.propTypes = {

};

export default Box;