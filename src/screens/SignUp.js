import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView, Alert } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button1 from '../comp/Button1';
import AwesomeAlert from 'react-native-awesome-alerts';
import SweetAlert from 'react-native-sweet-alert';

const SignUp = ({ navigation }) => {
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [checked, setChecked] = React.useState(false);

    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidUserName, setStateIsValidUserName] = useState(true);

    const [stateData, setStataData] = useState({
        email: '',
        password: '',
        userName: ''
    }
    )
    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('falsse')
            return false;
        }
    }



    const signUp = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }
        if (stateData.userName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUserName(false)

        }

        if (stateData.password == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPassword(false)
        }
        if (stateData.emailAddress != '' && stateData.password != ''
            && stateData.userName != ''
            && handleValidEmail(stateData.email)) {
            console.log('https://trackaza-app.herokuapp.com/api/owner/signup' +
                'email' + stateData.email,
                'username:' + stateData.userName,
                'password:' + stateData.password)
            setStateShowAlert(true)
            fetch('https://trackaza-app.herokuapp.com/api/owner/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: stateData.email,
                    username: stateData.userName,
                    password: stateData.password

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateShowAlert(false)
                    console.log(json)
                    if (json.succes) {
                        SweetAlert.showAlertWithOptions({
                            title: 'Account Successfully Created',
                            //  subTitle: '',
                            confirmButtonTitle: 'OK',

                            confirmButtonColor: '#000',

                            style: 'success',
                            //cancellable: true
                        },
                            // callback => console.log('callback')
                        );

                        // console.log(json.addedUser._id + " or " + json.addedUser.email
                        //     + " or " + json.addedUser.username)
                        // multiSet(json.addedUser._id, json.addedUser.email, json.addedUser.username)
                        navigation.navigate("SignIn")
                    }

                    else {
                        Alert.alert('Email Already Exist')
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
                    <View style={{
                        flex: 0.35,// backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>
                        <Text style={[STYLES.fontSize16_grey1C1939_Arial_Bold,
                        { textAlign: 'center', marginTop: '5%' }]}>Registration</Text>
                    </View>
                    <View style={{ //backgroundColor: 'red',
                        flex: 0.45
                    }}>
                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Email' xml={Svgs.logoHuman}
                                onChangeText={(text) => {
                                    setStateIsValidEmail(true)
                                    setStataData({
                                        ...stateData, email: text
                                    })
                                }} />
                            {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
                        </View>

                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Password' xml={Svgs.lock}
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
                            <TextInput1 placeholder='User Name' xml={Svgs.logoHuman}
                                onChangeText={(text) => {
                                    setStateIsValidUserName(true)
                                    setStataData({
                                        ...stateData, userName: text
                                    })
                                }} />
                            {stateIsValidUserName == false ? <Text style={{ color: 'red' }}>Enter Valid UserName</Text> : null}
                        </View>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            marginLeft: '2%', //backgroundColor: 'red'
                        }}>

                            <Checkbox color={COLORS.green074B08}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={STYLES.fontSize12_black1C1A1A_Arial_400}>Remember Me</Text>
                        </View>
                    </View>
                    <View style={{
                        //  backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2, paddingBottom: '15%'
                    }}>
                        <Button1 text="SIGNUP"
                            onPress={() => signUp()}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

SignUp.propTypes = {

};

export default SignUp;