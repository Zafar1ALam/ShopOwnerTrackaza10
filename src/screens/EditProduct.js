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
import Header from '../comp/Header';
import { SvgXml } from 'react-native-svg';
import TextInputWithoutSVG from '../comp/TextInputWithoutSVG';
import Entypo from 'react-native-vector-icons/Entypo'
import ButtonSvg from '../comp/ButtonSvg';
import AwesomeAlert from 'react-native-awesome-alerts';
import SweetAlert from 'react-native-sweet-alert';
const EditProduct = ({ route, navigation }) => {
    const { routeState_AS_OwnerId,
        routeStateProductId } = route.params;
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidProductName, setStateIsValidProductName] = useState(true);
    const [stateIsValidProductPrice, setStateIsValidProductPrice] = useState(true);
    const [stateData, setStataData] = useState({

        productName: '',
        productPrice: ''
    })

    const updateProduct = () => {




        if (stateData.productName == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidProductName(false)
        }

        if (stateData.productPrice == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidProductPrice(false)



        }


        if (stateData.productName != '' && stateData.productPrice != '') {
            //navigation.navigate("ManageProducts")
            setStateShowAlert(true)
            console.log('https://trackaza-app.herokuapp.com/api/product/updateProduct/' +
                routeStateProductId + '/' + routeState_AS_OwnerId
                + "name:" + stateData.productName +
                "price:" + stateData.productPrice
            )
            fetch('https://trackaza-app.herokuapp.com/api/product/updateProduct/' + routeStateProductId + '/' + routeState_AS_OwnerId, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: stateData.productName,
                    price: stateData.productPrice
                })

            })
                .then((response) => response.json())
                .then((json) => {

                    console.log(json)
                    setStateShowAlert(false)
                    if (json.success) {
                        SweetAlert.showAlertWithOptions({
                            title: 'Product Successfully Update',
                            //  subTitle: '',
                            confirmButtonTitle: 'OK',

                            confirmButtonColor: '#000',

                            style: 'success',
                            //cancellable: true
                        },
                            // callback => console.log('callback')
                        );


                        navigation.navigate("ManageProducts"
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
            <View style={STYLES.withoutpaddingcontainer}>
                <View style={[{
                    flex: 0.2, backgroundColor: COLORS.green074B08,
                    //justifyContent: 'center', 
                    paddingLeft: '10%',

                }]}>
                    <Header xml={Svgs.goBack} xml1={Svgs.manageProducts}
                        text="Edit Product"
                        onPress={() => navigation.goBack()} />

                </View>
                <View style={{ flex: 0.6, paddingHorizontal: '8%' }}>
                    <View style={{
                        alignSelf: 'stretch',
                        //backgroundColor: 'green',
                        marginTop: '15%'
                    }}>
                        <TextInputWithoutSVG placeholder='product Name' xml={Svgs.logoHuman}
                            onChangeText={(text) => {
                                setStateIsValidProductName(true)
                                setStataData({
                                    ...stateData, productName: text
                                })
                            }}
                        />
                        {stateIsValidProductName == false ? <Text style={{ color: 'red' }}>Enter Valid Product Name</Text> : null}
                    </View>
                    <View style={{
                        alignSelf: 'stretch',
                        //backgroundColor: 'green',
                        marginTop: '7%'
                    }}>
                        <TextInputWithoutSVG placeholder='Product Price' xml={Svgs.logoHuman}
                            keyboardType='numeric'
                            onChangeText={(text) => {
                                setStateIsValidProductPrice(true)
                                setStataData({
                                    ...stateData, productPrice: text
                                })
                            }}
                        />
                        {stateIsValidProductPrice == false ? <Text style={{ color: 'red' }}>Enter Valid Product Price</Text> : null}
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
                        <ButtonSvg text="Update" xml={Svgs.minus}
                            onPress={() => updateProduct()} />

                    </View>

                </View>
            </View>
        </ScrollView>
    );
};

EditProduct.propTypes = {

};

export default EditProduct;