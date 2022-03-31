import React, { useState, useEffect } from 'react';

import {
    Image, View, Text, TextInput, TextInputBase, ScrollView,
    ActivityIndicator, Modal, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple, } from 'react-native-paper';
import Button1 from '../comp/Button1';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import Header from '../comp/Header';
import ButtonSvg from '../comp/ButtonSvg';
import { SvgXml } from 'react-native-svg';
import AwesomeAlert from 'react-native-awesome-alerts';
import SweetAlert from 'react-native-sweet-alert';
const ManageProducts = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [state_AS_OwnerId, setState_AS_OwnerId] = useState();
    const [stateShowAlert, setStateShowAlert] = useState(false)

    const [isModalVisible, setModalVisible] = useState(false);

    console.log(`is ModalVisible ${isModalVisible}`)
    useEffect(() => {
        getMyObject()
    }, [isFocused]
    )
    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('ownerId')
            if (jsonValue != null) {
                return (
                    setState_AS_OwnerId(jsonValue),
                    //  console.log('appname'),
                    setModalVisible(true),
                    fetch('https://trackaza-app.herokuapp.com/api/product/getAllByOwner/' + jsonValue)
                        .then((response) => response.json())
                        .then((json) => {
                            console.log(json)

                            setModalVisible(false),
                                setListShopRecords(json.allProducts)
                            // setStateListAlphabet(json.allJournels)
                            // setStateShowAlert(false)

                        })
                        .catch((error) => console.error(error))
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

    const deleteManagerProduct = (productId) => {
        console.log(productId)
        console.log(state_AS_OwnerId)
        setModalVisible(true)
        // setStateShowAlert(false)
        fetch('https://trackaza-app.herokuapp.com/api/product/deleteSingleProduct/' + productId + '/' +
            state_AS_OwnerId,
            { method: 'DELETE' })
            .then((response) => response.json())
            .then((json) => {
                // setStateShowAlert(false)
                console.log(json)
                if (json.success) {

                    console.log(json)

                    fetch('https://trackaza-app.herokuapp.com/api/product/getAllByOwner/' + state_AS_OwnerId)
                        .then((response) => response.json())
                        .then((json) => {
                            console.log(json)
                            SweetAlert.showAlertWithOptions({
                                title: 'Product Successfully Delete',
                                //  subTitle: '',
                                confirmButtonTitle: 'OK',

                                confirmButtonColor: '#000',

                                style: 'success',
                                //cancellable: true
                            },
                                // callback => console.log('callback')
                            );
                            setModalVisible(false),
                                setListShopRecords(json.allProducts)

                        })
                        .catch((error) => console.error(error))

                }

                else {
                    Alert.alert(json)
                }
            })
            .catch((error) => {

                console.error(error);
            });
    }

    const [listShopRecords, setListShopRecords] = useState([

    ]);
    return (

        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                justifyContent: 'center',
                paddingLeft: '10%',

            }]}>
                <Header xml={Svgs.goBack} xml1={Svgs.manageProducts}
                    text="Manage Products"
                    onPress={() => navigation.goBack()} />
            </View>
            <View style={{
                flex: 0.66, //backgroundColor: 'red',
                // paddingHorizontal: '7%'
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <DataTable style={{ marginTop: '7%' }}>
                        <DataTable.Header style={{
                            borderBottomWidth: 0
                        }}>
                            <DataTable.Title style={{
                                //backgroundColor: 'red'
                                justifyContent: 'center'
                            }}>

                                <View style={{

                                }}>
                                    <Text style={[STYLES.fontSize18_074B08_Arial_Bold,
                                    {
                                        textAlign: 'center',
                                        alignSelf: 'stretch',// backgroundColor: 'green'
                                    }]}>Id</Text>
                                </View>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}
                                >Name</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Price</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Edit</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Delete</Text>
                            </DataTable.Title>
                        </DataTable.Header>
                        {
                            listShopRecords.map((records) => {
                                return (
                                    <View key={records._id}>
                                        <DataTable.Row
                                            style={{ borderBottomWidth: 0, height: 70 }}>
                                            <DataTable.Cell style={{ justifyContent: 'center' }}>
                                                <Text style={STYLES.fontSize18_black161923_Arial_400}>{records._id}</Text></DataTable.Cell>
                                            <DataTable.Cell style={{ justifyContent: 'center' }} >
                                                <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.name}</Text></DataTable.Cell>
                                            <DataTable.Cell style={{ justifyContent: 'center' }} ><Text
                                                style={STYLES.fontSize18_black161923_Arial_400}>{records.price}</Text></DataTable.Cell>
                                            <DataTable.Cell style={{
                                                //backgroundColor: 'green',
                                                //  justifyContent: 'space-evenly'
                                                justifyContent: 'center'
                                            }}>

                                                <TouchableRipple style={{


                                                }}
                                                    onPress={() => navigation.navigate("EditProduct"
                                                        , {
                                                            routeState_AS_OwnerId: state_AS_OwnerId,
                                                            routeStateProductId: records._id
                                                        })}
                                                >
                                                    <SvgXml xml={Svgs.Edit} />
                                                </TouchableRipple>


                                            </DataTable.Cell>
                                            <DataTable.Cell style={{
                                                //  backgroundColor: 'green',
                                                //  justifyContent: 'space-evenly'
                                                justifyContent: 'center'
                                            }}>

                                                <TouchableRipple style={{


                                                }} onPress={() => { deleteManagerProduct(records._id) }}>
                                                    <SvgXml xml={Svgs.Delete} />
                                                </TouchableRipple>


                                            </DataTable.Cell>


                                        </DataTable.Row>
                                        <View style={{
                                            width: '85%',
                                            alignSelf: 'center',
                                            borderBottomWidth: 1,
                                            borderBottomColor: COLORS.grey707070_51
                                        }}></View>
                                    </View>
                                )
                            })
                        }



                    </DataTable>
                </ScrollView>

            </View>
            <View style={{
                flex: 0.14, //backgroundColor: 'green',
                justifyContent: 'flex-end',
                paddingHorizontal: '7%'
            }}>

                <View style={{
                    marginBottom: '8%',
                    // backgroundColor: 'pink'
                }}>
                    <ButtonSvg text="Add" xml={Svgs.add}
                        onPress={() => navigation.navigate("AddProduct")} />

                </View>

            </View>


            <Modal visible={isModalVisible} transparent={true}>

                <View style={{
                    flex: 1, justifyContent: 'center',
                    //   backgroundColor: COLORS.grey494949_28,
                    paddingHorizontal: '7%',
                }}>
                    <ActivityIndicator size="large" color={COLORS.green074B08}
                        style={{
                            // flex: 1,
                            // backgroundColor: 'red'
                        }} />
                </View>
            </Modal>

        </View >
    );
};

ManageProducts.propTypes = {

};

export default ManageProducts;