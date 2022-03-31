import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView, Alert } from 'react-native';

import { SvgXml } from 'react-native-svg';
import Svg, { Circle, SvgUri } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import SVGImg from '../utilities/svgs/backIcon.svg';
import AwesomeAlert from 'react-native-awesome-alerts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import TextInputWithoutSVG from '../comp/TextInputWithoutSVG';
const ForgotPassword = ({ navigation }) => {
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);


    const [stateData, setStataData] = useState({
        email: '',
    })
    const handleValidEmail = (val) => {

        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            return true;
        }
        else {
            return false;
        }
    }
    const sendCode = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)
        }


        if (stateData.emailAddress != ''

            && handleValidEmail(stateData.email)) {
            // navigation.navigate("VerificationCode")
            setStateShowAlert(true)
            fetch('https://trackaza-app.herokuapp.com/api/owner/sendMail/' + stateData.email, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },

            })
                .then((response) => response.json())
                .then((json) => {

                    console.log(json)
                    setStateShowAlert(false)
                    if (json.success) {

                        navigation.navigate("VerificationCode"
                            , {
                                routeStateemail: stateData.email
                            }
                        )
                    }

                    else {
                        Alert.alert('plz insert valid data')
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
                        flex: 0.35, //backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', //marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>

                    </View>
                    <View style={{
                        //   backgroundColor: 'red',
                        flex: 0.45, alignItems: 'center'
                    }}>
                        <Text style={STYLES.fontSize21_black1C1A1A_Arial_Bold}>Forgot Password?</Text>
                        <Text style={[STYLES.fontSize13_black1C1A1A_Arial_400,
                        { marginTop: '7%' }]}>Enter Phone No for Verification Code</Text>
                        <View style={{
                            marginBottom: '5%', alignSelf: 'stretch',
                            //backgroundColor: 'green',
                            marginTop: '7%'
                        }}>
                            <TextInputWithoutSVG placeholder='Enter Email' xml={Svgs.logoHuman}
                                onChangeText={(text) => {
                                    setStateIsValidEmail(true)
                                    setStataData({
                                        ...stateData, email: text
                                    })
                                }} />
                            {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
                        </View>



                    </View>
                    <View style={{
                        //backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2, paddingBottom: '15%'
                    }}>
                        <Button1 text="SEND CODE"
                            onPress={() => sendCode()}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

ForgotPassword.propTypes = {

};

export default ForgotPassword;