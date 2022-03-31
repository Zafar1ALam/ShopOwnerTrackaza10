import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";
import COLORS from './utilities/colors/Color';



const STYLES = StyleSheet.create({


    container: {
        flex: 1,

        width: Dimensions.get('window').width,

        height: Dimensions.get('window').height,
        paddingHorizontal: '8%',
        //  height: '100%',
        backgroundColor: COLORS.whiteFFFFFF
        // backgroundColor: 'red'
    },
    withoutpaddingcontainer: {
        flex: 1, width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.whiteFFFFFF
    },
    // fontSize25_000000_Roboto_Regular_38: {
    //     fontSize: 30,
    //     fontFamily: 'Roboto-Regular',
    //     //color: '#1C1A1A'
    //     // color: COLORS.black000000_38
    // },//
    fontSize27_whiteFFFFFF_Arial_Bold: {
        fontSize: 27,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.whiteFFFFFF,

    },
    fontSize25_074B08_Arial_Bold: {
        fontSize: 25,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.green074B08,

    },
    fontSize24_074B08_Arial_Bold: {
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.green074B08,

    },
    fontSize21_whiteFFFFFF_Arial_Bold: {
        fontSize: 21,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.whiteFFFFFF,

    },
    fontSize21_black1C1A1A_Arial_Bold: {
        fontSize: 21,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.black1C1A1A
    },
    fontSize20_whiteFFFFFF_Arial_400: {
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: "400",
        color: COLORS.whiteFFFFFF
    },
    fontSize19_grey1C1939_Arial_400: {
        fontSize: 19,
        fontFamily: 'Arial',
        fontWeight: "400",
        color: COLORS.grey1C1939
    },
    fontSize19_black000000_Arial_400: {
        fontSize: 19,
        fontFamily: 'Arial',
        fontWeight: "400",
        color: COLORS.black000000
    },//
    fontSize18_grey1C1939_Arial_400: {
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: "400",
        color: COLORS.grey1C1939
    },//

    fontSize18_074B08_Arial_Bold: {
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.green074B08,

    },
    fontSize18_black161923_Arial_400: {
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: "400",
        color: COLORS.black161923,

    },
    fontSize17_074B08_Arial_Bold: {
        fontSize: 17,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.green074B08,

    },
    fontSize17_black000000_Arial_Bold: {
        fontSize: 17,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.black000000,
    },
    fontSize16_green074B08_Arial_Bold: {
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.green074B08,

    },//
    fontSize16_grey1C1939_Arial_Bold: {
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.grey1C1939
    },
    fontSize15_grey707070_Arial_400: {
        fontSize: 15,
        fontFamily: 'Arial',
        fontWeight: "400",
        color: COLORS.grey707070
    },
    fontSize14_whiteFFFFFF_Arial_Bold: {
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.whiteFFFFFF,

    },
    fontSize13_black1C1A1A_Arial_400: {
        fontSize: 13,
        fontFamily: 'Arial',
        fontWeight: "400",
        color: COLORS.black1C1A1A
    },
    fontSize12_black1C1A1A_Arial_400: {
        fontSize: 12,
        fontFamily: 'Arial',
        fontWeight: "400",
        color: COLORS.black1C1A1A
    },
    fontSize11_whiteFFFFFF_Arial_Bold: {
        fontSize: 11,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.whiteFFFFFF,

    },
    fontSize11_green074B08_Arial_Bold: {
        fontSize: 11,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.green074B08,

    },


});

export default STYLES;