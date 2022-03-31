/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import AccountHistory from './src/screens/AccountHistory';
import AddCashier from './src/screens/AddCashier';
import AddManager from './src/screens/AddManager';
import AddProduct from './src/screens/AddProduct';
import AddShop from './src/screens/AddShop';
import BusinessPerformance from './src/screens/BusinessPerformance';
import EditCashier from './src/screens/EditCashier';
import EditManager from './src/screens/EditManager';
import EditProduct from './src/screens/EditProduct';
import EditShops from './src/screens/EditShops';
import ForgotPassword from './src/screens/ForgotPassword';
import ManageAccount from './src/screens/ManageAccount';
import ManageCashier from './src/screens/ManageCashier';
import ManageManager from './src/screens/ManageManager';
import ManageProducts from './src/screens/ManageProducts';
import ManageShop from './src/screens/ManageShop';
import MyCommision from './src/screens/MyCommision';
import MyShops from './src/screens/MyShops';
import ResetPassword from './src/screens/ResetPassword';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import VerificationCode from './src/screens/VerificationCode';
import Welcome from './src/screens/Welcome';

AppRegistry.registerComponent(appName, () => App);
