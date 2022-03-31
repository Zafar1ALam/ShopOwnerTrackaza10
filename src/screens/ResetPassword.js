import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AwesomeAlert from 'react-native-awesome-alerts';
import SweetAlert from 'react-native-sweet-alert';
const ResetPassword = ({ route, navigation }) => {
    const { rstateEmail } = route.params;
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateData, setStataData] = useState({

        password: '',
        confirmPassword: ''
    })
    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }
    const continue1 = () => {

        console.log(stateData.password)
        console.log(stateData.confirmPassword)



        if (stateData.password == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPassword(false)
        }

        if (stateData.confirmPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidConfirmPassword(false)



        }
        console.log(passwordCheck())
        if (!passwordCheck()) {
            console.log('a')
            alert("enter same password and confirm password")
        }


        if (stateData.password != '' && stateData.confirmPassword != ''
            && passwordCheck()) {
            //navigation.navigate("SignIn")
            setStateShowAlert(true)
            console.log('https://trackaza-app.herokuapp.com/api/owner/updatePass/'
                + rstateEmail +
                "password:" + stateData.password +
                "CONFIRMpassword:" + stateData.confirmPassword)
            fetch('https://trackaza-app.herokuapp.com/api/owner/updatePass/'
                + rstateEmail, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: stateData.password,
                    confirmpassword: stateData.confirmPassword
                })

            })
                .then((response) => response.json())
                .then((json) => {

                    console.log(json)
                    setStateShowAlert(false)
                    if (json.success) {
                        SweetAlert.showAlertWithOptions({
                            title: 'Password Successfully Change',
                            //  subTitle: '',
                            confirmButtonTitle: 'OK',

                            confirmButtonColor: '#000',

                            style: 'success',
                            //cancellable: true
                        },
                            // callback => console.log('callback')
                        );
                        navigation.navigate("SignIn")

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
                        flex: 0.25,//backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', //marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>

                    </View>
                    <View style={{ //backgroundColor: 'red',
                        flex: 0.55
                    }}>
                        <Text style={[STYLES.fontSize21_black1C1A1A_Arial_Bold,
                        { alignSelf: 'center', marginBottom: '15%', marginTop: '7%' }]}>Reset Password</Text>
                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='New Password'
                                xml={Svgs.lock}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    setStateIsValidPassword(true)
                                    setStataData({
                                        ...stateData, password: text
                                    })
                                }}
                            />
                            {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
                        </View>

                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Confirm New Password' xml={Svgs.lock}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    setStateIsValidConfirmPassword(true)
                                    setStataData({
                                        ...stateData, confirmPassword: text
                                    })
                                }}
                            />
                            {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Confirm Password </Text> : null}
                        </View>

                    </View>
                    <View style={{
                        //  backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2, paddingBottom: '15%'
                    }}>
                        <Button1 text="CONTINUE"
                            onPress={() => { continue1() }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

ResetPassword.propTypes = {

};

export default ResetPassword;