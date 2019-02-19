/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
// import React, { Component } from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';




// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";  
AppRegistry.registerComponent(appName, () => App);