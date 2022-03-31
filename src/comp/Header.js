import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import { Text, View } from 'react-native';
import STYLES from '../STYLES';
import { TouchableRipple } from 'react-native-paper';

const Header = props => {
    return (
        <>
            <TouchableRipple onPress={props.onPress}
                style={{ marginTop: '5%', marginLeft: "-5%", alignSelf: 'flex-start' }}>
                <SvgXml xml={props.xml} />
            </TouchableRipple>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'center',
                //    , backgroundColor: 'red'
                //  , width: '70%',
                flex: 0.7,
                alignItems: 'center',


            }}>
                <SvgXml xml={props.xml1} style={{ marginRight: '5%' }} />
                <Text style={STYLES.fontSize27_whiteFFFFFF_Arial_Bold}>{props.text}</Text>
            </View>
        </>
    );
};

Header.propTypes = {

};

export default Header;