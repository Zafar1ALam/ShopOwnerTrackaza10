import React, { useState, useRef, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView, TouchableOpacity } from 'react-native';


import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';

import Header from '../comp/Header';
import ButtonSvg from '../comp/ButtonSvg';
import { SvgXml } from 'react-native-svg';
import DoubleTextSvgHeader from '../comp/DoubleTextSvgHeader';
import RBSheet from "react-native-raw-bottom-sheet";
const AccountHistory = ({ navigation }) => {

    const refRBSheetDays = useRef();
    const daysList = [
        {
            id: 1,
            Label: "Last 7 days",
            value: "7Days"
        },
        {
            id: 2,
            Label: "Last 15 days",
            value: "15Days"
        },
        {
            id: 3,
            Label: "Last 30 days",
            value: "30Days"
        },

    ];
    var shopRecords = [
        {
            id: '4',
            date: "01-02-21",
            transictionId: "#0001",
            managerName: "Manager Name",
            Amount: 200


        },
        {
            id: '5',
            date: "01-02-21",
            transictionId: "#0001",
            managerName: "Manager Name",
            Amount: 200

        },
        {
            id: '6',
            date: "01-02-21",
            transictionId: "#0001",
            managerName: "Manager Name",
            Amount: 200

        },
    ];
    const [stateDays, setStateDays] = useState('Last 30 days');
    const [stateDataBaseDays, setStateDateBaseDays] = useState('30Days');
    return (
        <ScrollView>
            <View style={STYLES.withoutpaddingcontainer}>

                <View style={[{
                    flex: 0.2, backgroundColor: COLORS.green074B08,
                    //justifyContent: 'center', 
                    //paddingLeft: '10%',

                }]}>
                    <DoubleTextSvgHeader xml={Svgs.goBack} xml1={Svgs.account}
                        text="Account History" text1="Shop Name Here"
                        onPress={() => navigation.goBack()} />

                </View>
                <View style={{
                    flex: 0.80, //backgroundColor: 'red',
                    // paddingHorizontal: '7%'
                    alignItems: 'center'
                }}>

                    <TouchableRipple
                        style={{
                            width: '33%',
                            backgroundColor: COLORS.green074B08,
                            marginTop: '5%', borderRadius: 15,
                            paddingHorizontal: '2%',
                            paddingVertical: '1%',
                            flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        onPress={() => refRBSheetDays.current.open()}
                    >
                        <>
                            <Text style={[STYLES.fontSize14_whiteFFFFFF_Arial_Bold, {
                                marginRight: '5%'
                            }]}>{stateDays}</Text>
                            <SvgXml xml={Svgs.downArrow} />
                        </>
                    </TouchableRipple>
                    <DataTable style={{
                        // backgroundColor: 'green',
                        marginTop: '7%'
                    }}>
                        <DataTable.Header style={{
                            borderBottomWidth: 0,
                            // borderBottomColor: COLORS.grey707070_51
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
                                    }]}>Date</Text>
                                </View>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}
                                >Transiction ID</Text>
                            </DataTable.Title>

                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Manager</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ justifyContent: 'center' }} >
                                <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Amount</Text>
                            </DataTable.Title>

                        </DataTable.Header>
                        {
                            shopRecords.map((records) => {
                                return (
                                    <View key={records.id}>
                                        <DataTable.Row
                                            style={{
                                                borderBottomWidth: 0,
                                                borderBottomColor: COLORS.grey707070_51
                                            }}>
                                            <DataTable.Cell style={{
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.date}</Text>
                                            </DataTable.Cell>
                                            <DataTable.Cell style={{
                                                justifyContent: 'center'
                                            }} >
                                                <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.transictionId}</Text>
                                            </DataTable.Cell>

                                            <DataTable.Cell style={{
                                                justifyContent: 'center'
                                                //backgroundColor: 'green',
                                                //  justifyContent: 'space-evenly'

                                            }}>
                                                <Text style={[STYLES.fontSize18_black161923_Arial_400,
                                                ]}>{records.managerName}</Text>



                                            </DataTable.Cell>
                                            <DataTable.Cell style={{
                                                justifyContent: 'center'
                                                //backgroundColor: 'green',
                                                //  justifyContent: 'space-evenly'

                                            }}>
                                                <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.Amount}</Text>



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

                </View>


                <RBSheet
                    // closeOnDragDown={true}
                    dragFromTopOnly={true}
                    closeOnPressMask={false}
                    height={300}
                    animationType="slide"
                    ref={refRBSheetDays}


                    // closeOnPressBack={false}
                    customStyles={{
                        container: {
                            //borderRadius: 40,
                            backgroundColor: COLORS.whiteFFFFFF,
                            paddingVertical: "5%"
                        },

                    }}


                >

                    <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                        <View style={{
                            flexDirection: 'row', justifyContent:
                                'space-between',
                            marginBottom: '5%'
                        }}>
                            <Text style={STYLES.fontSize24_074B08_Arial_Bold}>
                                Select Days</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetDays.current.close()}

                            >
                                <SvgXml xml={Svgs.cross} />

                            </TouchableRipple>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{
                                flex: 1, //backgroundColor: 'green',
                                marginTop: '3%',
                                paddingHorizontal: '2%',
                                justifyContent: 'space-between'
                            }}>
                                {daysList.map((list, index) => {
                                    return (
                                        <View key={index}
                                            style={{
                                                // backgroundColor: COLORS.whiteFFFFFF,
                                                paddingVertical: '7%',
                                                backgroundColor: COLORS.whiteFFFFFF,
                                                borderBottomWidth: 1,
                                                //borderBottomColor: COLORS.black000000_20

                                                borderBottomColor: COLORS.grey707070_51

                                            }}>
                                            <TouchableOpacity style={{
                                                //height: 40,
                                                //flex: 1,
                                                // backgroundColor: 'red',
                                                justifyContent: 'center'
                                            }} onPress={() => {
                                                refRBSheetDays.current.close()
                                                setStateDays(list.Label)




                                                //fetchReports(list.value)
                                            }}>
                                                <Text style={[{
                                                    alignSelf: 'center',
                                                }, STYLES.fontSize18_black161923_Arial_400]}>{list.Label}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}

                            </View>
                        </ScrollView>

                    </View>


                </RBSheet>

            </View >
        </ScrollView>
    );
};


export default AccountHistory;