import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView, TouchableOpacity, Alert } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import SplashScreen from 'react-native-splash-screen'
import AwesomeAlert from 'react-native-awesome-alerts';
import SweetAlert from 'react-native-sweet-alert';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignIn = ({ navigation }) => {
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    const [stateData, setStataData] = useState({

        email: '',
        password: '',
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


    const multiSet = async (userId, userEmail, userName) => {
        console.log(userId)
        console.log(userEmail)
        console.log(userName)
        const firstPair = ["ownerId", userId]
        const secondPair = ["ownerEmail", userEmail]
        const thirdPair = ["ownerName", userName]
        try {
            await AsyncStorage.multiSet([firstPair, secondPair, thirdPair])
        } catch (e) {
            Alert.alert(e)
        }


    }

    const login = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }

        if (stateData.password == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPassword(false)
        }
        if (stateData.emailAddress != '' && stateData.password != ''

            && handleValidEmail(stateData.email)) {
            console.log('https://trackaza-app.herokuapp.com/api/owner/signin' +
                'email' + stateData.email,
                'password:' + stateData.password)
            setStateShowAlert(true)
            fetch('https://trackaza-app.herokuapp.com/api/owner/signin', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: stateData.email,
                    password: stateData.password

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateShowAlert(false)
                    console.log(json)
                    if (json.success) {

                        navigation.navigate("Welcome")
                        multiSet(json.Owner._id, json.Owner.email, json.Owner.username)
                        // navigation.navigate("AppName")
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
                    <View style={{
                        flex: 0.35,//backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', //marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>

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
                            <TextInput1 placeholder='Password' xml={Svgs.lock} secureTextEntry={true}
                                onChangeText={(text) => {
                                    setStateIsValidPassword(true)
                                    setStataData({
                                        ...stateData, password: text
                                    })
                                }}
                            />
                            {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
                        </View>
                        <TouchableRipple onPress={() => navigation.navigate("ForgotPassword")}
                            style={{
                                alignSelf: 'flex-end',
                                paddingHorizontal: '3%', paddingVertical: '3%'
                            }}>
                            <Text style={[STYLES.fontSize12_black1C1A1A_Arial_400, {
                                alignSelf: 'flex-end',

                            }]}>Forgot Password?</Text>
                        </TouchableRipple>

                    </View>
                    <View style={{
                        //backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2,
                    }}>
                        <Button1 text="SIGNIN" onPress={() => {
                            //navigation.navigate("Welcome")
                            login()

                        }} />
                        <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
                            <Text style={[{
                                marginVertical: '8%',
                                alignSelf: 'center'
                            }, STYLES.fontSize15_grey707070_Arial_400]}>Dont have an account Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

SignIn.propTypes = {

};

export default SignIn;