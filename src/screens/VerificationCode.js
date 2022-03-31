import React, { useState, useEffect } from 'react';

import {
    Image, View, Text, TextInput, TextInputBase, ScrollView,
    StyleSheet,
    Alert
} from 'react-native';

import { SvgXml } from 'react-native-svg';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import AwesomeAlert from 'react-native-awesome-alerts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const CELL_COUNT = 4;
const VerificationCode = ({ route, navigation }) => {
    const { routeStateemail } = route.params;
    const [value, setValue] = useState('');
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [stateIsValidOTPCode, setStateIsValidOTPCode] = useState(true)


    useEffect(() => {
        Alert.alert('check your email')

    }, [])
    const verify = () => {


        console.log(value)


        if (value.length == 4) {
            setStateIsValidOTPCode(true)
        }

        if (value.length != 4) {
            //  console.log(stateData.password + 'password')
            setStateIsValidOTPCode(false)
        }
        let a = parseInt(value)
        console.log(typeof (a))
        console.log(a)


        if (value.length == 4) {

            setStateShowAlert(true)
            console.log('https://trackaza-app.herokuapp.com/api/owner/checkOtp/' + routeStateemail)
            fetch('https://trackaza-app.herokuapp.com/api/owner/checkOtp/' + routeStateemail, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    otpCode: a

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateShowAlert(false)
                    console.log(json)
                    if (json.success) {
                        console.log(json)
                        //Alert.alert(json.message)
                        navigation.navigate("ResetPassword"
                            ,
                            {
                                rstateEmail: routeStateemail
                            }
                        )
                    }
                    else {
                        Alert.alert(json.message)
                        navigation.navigate("ForgotPassword")
                    }

                })
                .catch((error) => {

                    console.error(error);
                });
        }
    }

    return (
        <ScrollView>
            <AwesomeAlert
                show={stateShowAlert}
                showProgress={true}

                closeOnTouchOutside={false}
            //  closeOnHardwareBackPress={false}
            />
            <View style={STYLES.container}>
                <View style={{
                    //backgroundColor: 'red', 
                    flex: 1,
                    // alignItems: 'center',
                }}>
                    <TouchableRipple style={{
                        alignSelf: 'flex-start',
                        marginTop: '10%'
                    }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={23} color={COLORS.black000000}
                        />
                    </TouchableRipple>
                    <View style={{
                        flex: 0.30,//. backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', //marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>

                    </View>
                    <View style={{
                        //   backgroundColor: 'red',
                        flex: 0.50, alignItems: 'center', paddingTop: '5%'
                    }}>
                        <Text style={STYLES.fontSize21_black1C1A1A_Arial_Bold}>Verification</Text>
                        <Text style={[STYLES.fontSize13_black1C1A1A_Arial_400,
                        ]}>Enter Code Below</Text>

                        <CodeField
                            ref={ref}
                            {...prop}
                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                value == '' ?

                                    <Text
                                        key={index}
                                        style={[styles.cell, isFocused && styles.focusCell]}
                                        onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                        {console.log('a')}
                                        {console.log(symbol)}
                                        {console.log(isFocused)}
                                        {symbol || (isFocused ? <Cursor /> : null)}

                                    </Text>
                                    : <Text
                                        key={index}
                                        style={[styles.cell, isFocused && styles.focusCell]}
                                        onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                        {console.log(symbol)}
                                        {console.log(isFocused)}
                                        {symbol || (isFocused ? <Cursor /> : null)}

                                    </Text>

                            )}
                        />


                        {stateIsValidOTPCode == false ? <Text style={{ color: 'red' }}>Enter Valid OTP Code </Text> : null}
                    </View>
                    <View style={{
                        //backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2, paddingBottom: '15%'
                    }}>
                        <Button1 text="VERIFY"
                            onPress={() => verify()}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

VerificationCode.propTypes = {

};

export default VerificationCode;


const styles = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    codeFieldRoot: {
        width: '80%', alignSelf: 'center',
        //backgroundColor: 'red'
        marginTop: '5%'
    },
    cell: {
        width: 45,

        height: 50,
        lineHeight: 48,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#00000030',
        textAlign: 'center',
        marginTop: '6%',
        //backgroundColor:'orange'
    },
    focusCell: {
        borderColor: '#000',
    },
});