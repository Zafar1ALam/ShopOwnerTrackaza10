
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer
} from '@react-navigation/native';

import { ActivityIndicator, StyleSheet, Text, View, useColorScheme } from "react-native";
import Splash from './src/screens/Splash';
import SignIn from './src/screens/SignIn'
import ForgotPassword from './src/screens/ForgotPassword';
import VerificationCode from './src/screens/VerificationCode';
import ResetPassword from './src/screens/ResetPassword';
import ManageProducts from './src/screens/ManageProducts';
import AddProduct from './src/screens/AddProduct';
import EditProduct from './src/screens/EditProduct';
import Welcome from './src/screens/Welcome';
import MyShops from './src/screens/MyShops';
import AddShop from './src/screens/AddShop';
import EditShops from './src/screens/EditShops';
import ManageManager from './src/screens/ManageManager';
import ManageCashier from './src/screens/ManageCashier';
import AddManager from './src/screens/AddManager';
import EditManager from './src/screens/EditManager';
import AddCashier from './src/screens/AddCashier';
import EditCashier from './src/screens/EditCashier';
import ManageShop from './src/screens/ManageShop';
import ManageAccount from './src/screens/ManageAccount';
import BusinessPerformance from './src/screens/BusinessPerformance';
import AccountHistory from './src/screens/AccountHistory';
import MyCommision from './src/screens/MyCommision';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();
const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SignIn'}
      >
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ManageProducts" component={ManageProducts} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="AddProduct" component={AddProduct} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="EditProduct" component={EditProduct} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="MyShops" component={MyShops} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="AddShop" component={AddShop} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="EditShops" component={EditShops} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ManageManager" component={ManageManager} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ManageCashier" component={ManageCashier} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="AddManager" component={AddManager} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="EditManager" component={EditManager} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="AddCashier" component={AddCashier} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="EditCashier" component={EditCashier} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ManageShop" component={ManageShop} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ManageAccount" component={ManageAccount} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="BusinessPerformance" component={BusinessPerformance} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="AccountHistory" component={AccountHistory} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="MyCommission" component={MyCommision} options={{
          headerShown: false,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

App.propTypes = {

};

export default App;