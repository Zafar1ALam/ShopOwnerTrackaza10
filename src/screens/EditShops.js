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
import SweetAlert from 'react-native-sweet-alert';
const EditShops = ({ navigation }) => {
    const refRBSheetCamera = useRef();
    const refRBSheetAssignManager = useRef();
    const [stateImage, setStateImage] = useState(null);
    const [stateAssignManager, setStateAssignManager] = useState("Assign Manager")


    const [stateIsValidEnterShopId, setStateIsValidEnterShopId] = useState(true);
    const [stateIsValidShopName, setStateIsValidShopName] = useState(true);

    const [stateIsValidAssignManager, setStateIsValidAssignManager] = useState(true);
    const [stateIsValidImage, setStateIsValidImage] = useState(true);

    const [stateData, setStataData] = useState({
        enterShopId: '',
        shopName: '',

    }
    )


    const updateShop = () => {
        if (stateImage == null) {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidImage(false)
        }


        if (stateData.enterShopId == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEnterShopId(false)



        }
        if (stateData.shopName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidShopName(false)

        }

        if (stateAssignManager == "Assign Manager") {
            //  console.log(stateData.password + 'password')
            setStateIsValidAssignManager(false)
        }

        if (stateData.enterShopId != '' && stateData.shopName != ''
            && stateData.shopName != '' && stateImage != null
            && stateAssignManager != "Assign Manager") {
            SweetAlert.showAlertWithOptions({
                title: 'Shop Successfully Update',
                //  subTitle: '',
                confirmButtonTitle: 'OK',

                confirmButtonColor: '#000',

                style: 'success',
                //cancellable: true
            },
                // callback => console.log('callback')
            );
            navigation.navigate("MyShops")
        }


    }

    const imageTakeFromCamera = () => {
        refRBSheetCamera.current.close()
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setStateImage(image.path)
            console.log(image.path);
            console.log(image);


        });
    }

    const imageTakeFromGallery = () => {
        refRBSheetCamera.current.close()
        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImage(image.path)
        });
    }


    const [statelistAssignManager, setStateListAssignManager] = useState([
        {
            id: 1,
            label: "EUPHORIC",
            value: "EUPHORIC",
        },
        {
            id: 2,
            label: "HAPPY",
            value: "HAPPY",
        },
        {
            id: 3,
            label: "NEUTRAL",
            value: "NEUTRAL",
        },
        {
            id: 4,
            label: "SAD",
            value: "SAD",
        },
        {
            id: 5,
            label: "FRUSTRATED",
            value: "FRUSTRATED",
        },
        {
            id: 6,
            label: "ANGRY",
            value: "ANGRY",
        },

    ]);


    return (
        <ScrollView>
            <View style={STYLES.withoutpaddingcontainer}>
                <View style={[{
                    flex: 0.2, backgroundColor: COLORS.green074B08,
                    //justifyContent: 'center', 
                    paddingLeft: '10%',

                }]}>
                    <Header xml={Svgs.goBack} xml1={Svgs.myShope}
                        text="Edit Shop"
                        onPress={() => navigation.goBack()} />

                </View>
                <View style={{
                    flex: 0.6,// backgroundColor: 'red'
                    paddingHorizontal: '8%',
                    alignItems: 'center',
                    marginTop: '5%'
                }}>
                    {/* <SvgXml xml={Svgs.camera} /> */}
                    {/* <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="62.319" height="62.319" viewBox="0 0 62.319 62.319">
  <g id="Group_11135" data-name="Group 11135" transform="translate(-179 -221.801)">
    <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M31.159.563A31.159,31.159,0,1,0,62.319,31.722,31.154,31.154,0,0,0,31.159.563Zm0,12.062A11.057,11.057,0,1,1,20.1,23.681,11.057,11.057,0,0,1,31.159,12.624Zm0,43.221a24.077,24.077,0,0,1-18.407-8.569,14.008,14.008,0,0,1,12.376-7.513,3.074,3.074,0,0,1,.892.138,16.635,16.635,0,0,0,5.139.867A16.572,16.572,0,0,0,36.3,39.9a3.074,3.074,0,0,1,.892-.138,14.008,14.008,0,0,1,12.376,7.513A24.077,24.077,0,0,1,31.159,55.845Z" transform="translate(179 221.239)" opacity="0.41"/>
    <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(216.5 238.421)">
      <path id="Path_434" data-name="Path 434" d="M18,7.5V20.38" transform="translate(-4.06)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path id="Path_435" data-name="Path 435" d="M7.5,18H20.38" transform="translate(0 -4.06)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    </g>
  </g>
</svg>`} /> */}
                    {/* <SvgUri
                    width="200"
                    height="500"
                    source={require('../utilities/svgs/backIcon.svg')}
                /> */}
                    {stateImage === null ? <TouchableRipple onPress={() => refRBSheetCamera.current.open()}
                        style={{ alignItems: 'center' }}    >
                        <>
                            <Image source={require('../utilities/images/camera.png')} />
                            <Text style={[STYLES.fontSize11_green074B08_Arial_Bold,
                            {
                                marginTop: '3%', color: stateIsValidImage ? COLORS.green074B08 : 'red'
                            }]}>Add Shop Image</Text>
                        </>
                    </TouchableRipple> :
                        <TouchableRipple onPress={() => refRBSheetCamera.current.open()}
                            style={{ alignItems: 'center' }}>
                            <>
                                <Image style={{ height: 62.32, width: 62.32, borderRadius: 50, }}
                                    resizeMode='cover'
                                    source={{ uri: stateImage }} />
                                <Text style={[STYLES.fontSize11_green074B08_Arial_Bold,
                                { marginTop: '3%' }]}>Update Shop Image</Text>
                            </>
                        </TouchableRipple>
                    }

                    <View style={{
                        alignSelf: 'stretch',
                        //backgroundColor: 'green',
                        marginTop: '7%'
                    }}>
                        <TextInputWithoutSVG placeholder='Enter Shop Id' xml={Svgs.logoHuman}
                            keyboardType="numeric"
                            onChangeText={(text) => {
                                setStateIsValidEnterShopId(true)
                                setStataData({
                                    ...stateData, enterShopId: text
                                })
                            }} />
                        {stateIsValidEnterShopId == false ? <Text style={{ color: 'red' }}>Enter Valid
                            Shop Id</Text> : null}
                    </View>
                    <View style={{
                        alignSelf: 'stretch',
                        //backgroundColor: 'green',
                        marginTop: '7%'
                    }}>
                        <TextInputWithoutSVG placeholder='Shop Name' xml={Svgs.logoHuman}
                            onChangeText={(text) => {
                                setStateIsValidShopName(true)
                                setStataData({
                                    ...stateData, shopName: text
                                })
                            }} />
                        {stateIsValidShopName == false ? <Text style={{ color: 'red' }}>Enter Valid Shop Name</Text> : null}
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            // setMoodModalVisible(true)
                            refRBSheetAssignManager.current.open()
                        }}
                        style={{
                            //   height: 30,
                            borderWidth: 1,

                            borderRadius: 29,
                            borderWidth: 1, borderColor: COLORS.black1A1A1A,
                            paddingHorizontal: '5%',
                            marginTop: '7%',
                            // borderColor
                            //  borderColor: colors.border,//COLORS.black000000_20,

                            paddingVertical: '5%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignSelf: 'stretch',
                            alignItems: 'center'
                        }}>
                        <>
                            <Text style={[STYLES.fontSize15_0093F5_Roboto_Medium,
                            ]}>{stateAssignManager}</Text>



                            <SvgXml

                                xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
  <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
</svg>
`} />
                        </>
                    </TouchableOpacity>
                    {stateIsValidAssignManager == false ? <Text style={{
                        color: 'red',
                        alignSelf: 'flex-start'
                    }}>Enter Assign Manager</Text> : null}

                </View>

                <View style={{
                    flex: 0.2, //backgroundColor: 'green',
                    justifyContent: 'flex-end',
                    paddingHorizontal: '7%'
                }}>

                    <View style={{
                        marginBottom: '8%',
                        // backgroundColor: 'pink'
                    }}>
                        <ButtonSvg text="Update" xml={Svgs.add}
                            onPress={() => updateShop()} />

                    </View>

                </View>







            </View>
            {/* Bottom sheet camera        */}
            <RBSheet
                closeOnPressMask={false}
                closeOnDragDown={false}
                height={220}
                animationType="slide"
                ref={refRBSheetCamera}
                closeOnDragDown={true}


            >
                <View style={{
                    justifyContent: 'space-evenly', flex: 1,
                    paddingHorizontal: '5%'
                }}>
                    {/* <Text style={STYLES.fontSize31_7A7A7A_LouisGeorgeCafé_Bold}>Add Photo! </Text> */}
                    <TouchableOpacity onPress={() => { imageTakeFromCamera() }}>
                        <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                            Take Photo Camera </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { imageTakeFromGallery() }}>
                        <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                            Take Photo Gallery </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => refRBSheetCamera.current.close()}>
                        <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>Cancel </Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
            {/* Bottom sheet manager        */}

            <RBSheet
                // closeOnDragDown={true}
                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={400}
                animationType="slide"
                ref={refRBSheetAssignManager}


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
                            SELECT MANAGER</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetAssignManager.current.close()}

                            style={{


                            }}>
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
                            {statelistAssignManager.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            // backgroundColor: COLORS.whiteFFFFFF,
                                            // paddingVertical: '4%',
                                            backgroundColor: COLORS.whiteFFFFFF,
                                            paddingVertical: '4%',

                                            borderBottomWidth: 1,
                                            borderBottomColor: COLORS.grey1C1939
                                            // borderBottomWidth: 1,
                                            // borderBottomColor: COLORS.black000000_20

                                        }}>
                                        <TouchableOpacity style={{
                                            //height: 40,
                                            //flex: 1,
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }} onPress={() => {
                                            refRBSheetAssignManager.current.close()
                                            setStateAssignManager(list.value)
                                            setStateIsValidAssignManager(true)
                                            //isValidSetStatesleep(true)
                                        }}>
                                            <Text style={[{
                                                alignSelf: 'center',
                                            }, STYLES.fontSize16_grey1C1939_Arial_Bold]}>{list.value}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>

                </View>


            </RBSheet>
        </ScrollView>
    );
};

EditShops.propTypes = {

};

export default EditShops;