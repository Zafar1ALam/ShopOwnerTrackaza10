import React, { useState, useEffect } from 'react';

import {
    Image, View, Text, TextInput, TextInputBase, Modal,
    ScrollView, ActivityIndicator
} from 'react-native';

import { useIsFocused } from '@react-navigation/native';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple, } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../comp/Header';
import ButtonSvg from '../comp/ButtonSvg';
import { SvgXml } from 'react-native-svg';
const ManageManager = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [state_AS_OwnerId, setState_AS_OwnerId] = useState();
    const [isModalVisible, setModalVisible] = useState(false);
    var [listManagerRecords, setListManagerRecords] = useState([

    ]);
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
                    fetch('https://trackaza-app.herokuapp.com/api/manager/getAll/' + jsonValue)
                        .then((response) => response.json())
                        .then((json) => {
                            console.log(json)

                            setModalVisible(false)
                            setListManagerRecords(json.allManagers)


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

    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                //justifyContent: 'center', 
                paddingLeft: '10%',

            }]}>
                <Header xml={Svgs.goBack} xml1={Svgs.manageManagers}
                    text="Manage Manager"
                    onPress={() => navigation.goBack()} />

            </View>
            <View style={{
                flex: 0.66, //backgroundColor: 'red',
                // paddingHorizontal: '7%'

                //  alignItems: 'center',
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
                                justifyContent: 'center'
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
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Picture</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Action</Text>
                            </DataTable.Title>

                        </DataTable.Header>
                        {
                            listManagerRecords.map((records) => {
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
                                                <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.username}</Text></DataTable.Cell>
                                            <DataTable.Cell style={{

                                                justifyContent: 'center'
                                            }} >
                                                <View style={{
                                                    //alignSelf: 'stretch',
                                                    //backgroundColor: 'red', //alignSelf: 'center', 
                                                    //flex: 1
                                                    // width: '30%', height: '30%'
                                                }}>
                                                    <Image source={require('../utilities/images/humanBeing.png')}
                                                        style={{
                                                            // flex: 1,
                                                            resizeMode: 'contain',
                                                            flex: 1
                                                        }}
                                                    />
                                                </View>


                                            </DataTable.Cell>
                                            <DataTable.Cell style={{
                                                justifyContent: 'center'

                                            }}>

                                                <TouchableRipple style={{


                                                }}
                                                    onPress={() => navigation.navigate("EditManager"
                                                        //, {
                                                        //     routeState_AS_OwnerId: state_AS_OwnerId}
                                                    )}>
                                                    <SvgXml xml={Svgs.Eye} />
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
                        onPress={() => navigation.navigate("AddManager"
                            , {
                                routeState_AS_OwnerId: state_AS_OwnerId
                            })} />

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

ManageManager.propTypes = {

};

export default ManageManager;