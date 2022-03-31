import React, { useState, useEffect } from 'react';

import {
    Image, View, Text, TextInput, TextInputBase,
    Modal, ActivityIndicator, ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import SweetAlert from 'react-native-sweet-alert';
import Header from '../comp/Header';
import ButtonSvg from '../comp/ButtonSvg';
import { SvgXml } from 'react-native-svg';
const ManageCashier = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [state_AS_OwnerId, setState_AS_OwnerId] = useState();
    const [stateShowAlert, setStateShowAlert] = useState(false)

    const [isModalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        getMyObject()
    }, [isFocused])

    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('ownerId')
            if (jsonValue != null) {
                return (
                    setState_AS_OwnerId(jsonValue),
                    //  console.log('appname'),
                    setModalVisible(true),
                    fetch('https://trackaza-app.herokuapp.com/api/cashier/getAll/' + jsonValue)
                        .then((response) => response.json())
                        .then((json) => {
                            console.log(json.allCashiers)
                            setModalVisible(false)
                            setListCashierRecords(json.allCashiers)


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

    const deleteManageCashier = (cashierId) => {
        console.log(cashierId)
        console.log(state_AS_OwnerId)
        setModalVisible(true)
        // setStateShowAlert(false)
        fetch('https://trackaza-app.herokuapp.com/api/cashier/deleteCashier/' + cashierId + '/' +
            state_AS_OwnerId,
            { method: 'DELETE' })
            .then((response) => response.json())
            .then((json) => {
                // setStateShowAlert(false)
                console.log(json)
                if (json.success) {

                    console.log(json)

                    fetch('https://trackaza-app.herokuapp.com/api/cashier/getAll/' + state_AS_OwnerId)
                        .then((response) => response.json())
                        .then((json) => {
                            console.log(json)
                            SweetAlert.showAlertWithOptions({
                                title: 'Cashier Successfully Delete',
                                //  subTitle: '',
                                confirmButtonTitle: 'OK',

                                confirmButtonColor: '#000',

                                style: 'success',
                                //cancellable: true
                            },
                                // callback => console.log('callback')
                            );
                            setModalVisible(false),
                                setListCashierRecords(json.allCashiers)

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
    const [listCashierRecords, setListCashierRecords] = useState([

    ]);
    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                //justifyContent: 'center', 
                paddingLeft: '10%',

            }]}>
                <Header xml={Svgs.goBack} xml1={Svgs.manageManagers}
                    text="Manage Cashier"
                    onPress={() => navigation.goBack()} />

            </View>
            <View style={{
                flex: 0.66, //backgroundColor: 'red',
                // paddingHorizontal: '7%'


                // justifyContent: 'center'
            }}>
                <ScrollView>
                    <DataTable style={{
                        marginTop: '5%',
                        //width: '95%',
                        //backgroundColor: 'red'
                    }}>
                        <DataTable.Header style={{
                            borderBottomWidth: 0
                        }}>
                            <DataTable.Title style={{
                                //  backgroundColor: 'red',
                                justifyContent: 'center',
                                // numberOfLines: 2,

                            }}>

                                <View style={{
                                    //   backgroundColor: 'green'
                                }}>
                                    <Text style={[STYLES.fontSize18_074B08_Arial_Bold,
                                    {
                                        // 
                                    }]}>Id</Text>
                                </View>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}
                                >Name</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Edit</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Delete</Text>
                            </DataTable.Title>

                        </DataTable.Header>

                        {
                            listCashierRecords.map((records) => {
                                return (
                                    <View key={records._id}>
                                        <DataTable.Row
                                            style={{
                                                borderBottomWidth: 0,
                                                height: 80,

                                            }} >
                                            <DataTable.Cell style={{
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={STYLES.fontSize18_black161923_Arial_400}>{records._id}</Text></DataTable.Cell>
                                            <DataTable.Cell style={{ justifyContent: 'center' }} >
                                                <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.name}</Text></DataTable.Cell>
                                            <DataTable.Cell style={{
                                                justifyContent: 'center'

                                            }}>

                                                <TouchableRipple style={{


                                                }} onPress={() =>
                                                    navigation.navigate("EditCashier", {
                                                        routeState_AS_OwnerId: state_AS_OwnerId,
                                                        routeStateCasherId: records._id
                                                    }
                                                    )}>
                                                    <SvgXml xml={Svgs.Edit} />
                                                </TouchableRipple>


                                            </DataTable.Cell>
                                            <DataTable.Cell style={{
                                                justifyContent: 'center'

                                            }}>

                                                <TouchableRipple style={{


                                                }}
                                                    onPress={() => { deleteManageCashier(records._id) }}>
                                                    <SvgXml xml={Svgs.Delete} />
                                                </TouchableRipple>


                                            </DataTable.Cell>



                                        </DataTable.Row>
                                        <View style={{
                                            width: '80%',
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

                        onPress={() =>
                            navigation.navigate("AddCashier")} />

                </View>

            </View>
            <Modal visible={isModalVisible} transparent={true}>

                <View style={{
                    flex: 1, justifyContent: 'center',
                    //   backgroundColor: COLORS.grey494949_28,
                    paddingHorizontal: '7%',
                    //  backgroundColor: 'red'
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


export default ManageCashier;