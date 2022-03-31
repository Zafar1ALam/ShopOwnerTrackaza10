import React, { useState, useEffect, useRef } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
    Image, View, Text, TextInput, TextInputBase,
    TouchableOpacity, ScrollView
} from 'react-native';
import { SvgUri } from 'react-native-svg';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import RBSheet from 'react-native-raw-bottom-sheet';
import testSvg from '../utilities/svgs/camera.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../comp/Header';
import { SvgXml } from 'react-native-svg';
import TextInputWithoutSVG from '../comp/TextInputWithoutSVG';
import Entypo from 'react-native-vector-icons/Entypo'
import ButtonSvg from '../comp/ButtonSvg';
import AwesomeAlert from 'react-native-awesome-alerts';
import SweetAlert from 'react-native-sweet-alert';
const AddCashier = ({ navigation }) => {
    const [state_AS_OwnerId, setState_AS_OwnerId] = useState();
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidCashierName, setStateIsValidCashierName] = useState(true);
    const [stateCashierName, setStateCashierName] = useState('');

    useEffect(() => {
        getMyObject()
    }, [])
    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('ownerId')
            if (jsonValue != null) {
                return (
                    setState_AS_OwnerId(jsonValue)
                    //  console.log('appname'),
                )
            }
            else {
                return (
                    null
                )
            }
        } catch (e) {
            alert(e)
        }
    }
    const addCashierName = () => {



        if (stateCashierName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidCashierName(false)



        }
        if (stateCashierName != '') {
            //navigation.navigate("ManageCashier")
            console.log('https://trackaza-app.herokuapp.com/api/cashier/addNew' +
                'name' + stateCashierName,

                'owner:' + state_AS_OwnerId)
            setStateShowAlert(true)
            fetch('https://trackaza-app.herokuapp.com/api/cashier/addNew', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: stateCashierName,

                    owner: state_AS_OwnerId

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateShowAlert(false)
                    console.log(json)
                    if (json.succes) {

                        SweetAlert.showAlertWithOptions({
                            title: 'Cashier Successfully Add',
                            //  subTitle: '',
                            confirmButtonTitle: 'OK',

                            confirmButtonColor: '#000',

                            style: 'success',
                            //cancellable: true
                        },
                            // callback => console.log('callback')
                        );
                        navigation.navigate("ManageCashier")
                    }

                    else {
                        Alert.alert('Does not Add Cashier')
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
            <View style={STYLES.withoutpaddingcontainer}>
                <View style={[{
                    flex: 0.2, backgroundColor: COLORS.green074B08,
                    //justifyContent: 'center', 
                    paddingLeft: '10%',

                }]}>
                    <Header xml={Svgs.goBack} xml1={Svgs.manageManagers}
                        text="Add Cashier"
                        onPress={() => navigation.goBack()} />

                </View>
                <View style={{ flex: 0.6, paddingHorizontal: '8%' }}>
                    <View style={{
                        alignSelf: 'stretch',
                        //backgroundColor: 'green',
                        marginTop: '15%'
                    }}>
                        <TextInputWithoutSVG placeholder='Cashier Name' xml={Svgs.logoHuman}
                            onChangeText={(text) => {
                                setStateIsValidCashierName(true)
                                setStateCashierName(text)
                            }} />
                        {stateIsValidCashierName == false ? <Text style={{ color: 'red' }}>Enter Valid Cashier Name</Text> : null}
                    </View>

                </View>
                <View style={{
                    flex: 0.2, //backgroundColor: 'green',
                    justifyContent: 'flex-end',
                    paddingHorizontal: '7%'
                }}>

                    <View style={{
                        marginBottom: '8%',

                    }}>
                        <ButtonSvg text="Add" xml={Svgs.add}
                            onPress={() =>
                                addCashierName()}
                        />

                    </View>

                </View>
            </View>
        </ScrollView>
    );
};



export default AddCashier;