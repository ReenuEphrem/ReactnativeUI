import {AppRegistry} from 'react-native';
import "react-native-gesture-handler";
import App from './App';
import FlatListDemo from './src/App/FlatListDemo';
// import WebView from './src/Webview';

import Login from './src/Login';

import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);