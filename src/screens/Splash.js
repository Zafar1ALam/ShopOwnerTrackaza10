import React, { useState, useEffect } from 'react';

import { Image, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES';
import Svgs from '../utilities/svgs/Svgs';

const Splash = ({ navigation }) => {
    const [stateIsVisible, setStateIsVisible] = useState(true)




    useEffect(() => {
        {
            if (!stateIsVisible) {
                navigation.navigate("SignIn")
                // getMyObject()
            }
            else {
                setTimeout(() => {
                    setStateIsVisible(false)
                }
                    , 4000);
            }
        }

    }, [stateIsVisible])

    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <SvgXml xml={Svgs.logo} />
                {/* <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text> */}
            </View>

        </View>
    );
};

Splash.propTypes = {

};

export default Splash;