import React, { useState, useEffect, useRef } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import Box from '../comp/Box';
import LastBox from '../comp/LastBox';
import DoubleTextHeader from '../comp/DoubleTextHeader';
import ButtonSvg from '../comp/ButtonSvg';
import RBSheet from 'react-native-raw-bottom-sheet';
import TextInputWithoutSVG from '../comp/TextInputWithoutSVG';
const ManageAccount = ({ navigation }) => {
    const refRBSheetAddFunds = useRef();


    const [stateIsValidPriceHere, setStateIsValidPriceHere] = useState(true);
    const [statePriceHere, setStatePriceHere] = useState('');


    const addFunds = () => {




        if (statePriceHere == '') {
            console.log('hhhhhhhhhhhhhhhh')
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPriceHere(false)



        }
        console.log(statePriceHere)
        if (statePriceHere != '') {
            // setStateIsValidPriceHere(true)
            refRBSheetAddFunds.current.close()

        }


    }
    return (
        <ScrollView>
            <View style={STYLES.withoutpaddingcontainer}>

                <View style={[{
                    flex: 0.2, backgroundColor: COLORS.green074B08,
                    // justifyContent: 'center', //paddingLeft: '10%'
                    // alignItems: 'center'
                }]}>

                    <DoubleTextHeader
                        onPress={() => navigation.goBack()}
                        text="Manage Account" text1="Shop Name Here" />
                </View>
                <View style={{
                    flex: 0.6, //backgroundColor: 'red',
                    paddingHorizontal: '7%', marginTop: '5%'
                }}>

                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Manager Name</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>Manager name here</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Funds Avalilable</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>200 $</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Admin Balance</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>100 $</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Expenses</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>10 $</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', //backgroundColor: 'red',
                        paddingVertical: '5%', borderBottomWidth: 1,
                        borderColor: COLORS.grey707070_51,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Available Cash</Text>
                        <Text style={STYLES.fontSize19_black000000_Arial_400}>50 $</Text>
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
                        <ButtonSvg text="Funds" xml={Svgs.add}

                            onPress={() => { refRBSheetAddFunds.current.open() }}
                        />

                    </View>

                </View>




            </View>

            {/* bottom sheet funds */}
            <RBSheet
                // closeOnDragDown={true}
                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={250}
                animationType="slide"
                ref={refRBSheetAddFunds}


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
                            ADD FUNDS</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetAddFunds.current.close()}

                            style={{


                            }}>
                            <SvgXml xml={Svgs.cross} />
                        </TouchableRipple>
                    </View>

                    <View style={{
                        flex: 0.5, //backgroundColor: 'green',
                        marginTop: '3%',
                        paddingHorizontal: '2%',
                        justifyContent: 'space-between'
                    }}>


                        <TextInputWithoutSVG placeholder='Price Here' keyboardType="numeric"
                            value={statePriceHere}
                            onChangeText={(text) => {
                                setStateIsValidPriceHere(true)
                                setStatePriceHere(text)
                            }} />
                        {stateIsValidPriceHere == false ? <Text style={{ color: 'red' }}>Enter Valid Price</Text>
                            : null}

                    </View>
                    <View style={{
                        flex: 0.5, //backgroundColor: 'green',
                        justifyContent: 'flex-end',
                        paddingHorizontal: '2%'
                    }}>


                        <ButtonSvg text="Add" xml={Svgs.add}
                            onPress={() => addFunds()} />



                    </View>

                </View>


            </RBSheet>
        </ScrollView>
    );
};



export default ManageAccount;
