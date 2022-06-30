/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Enterphone from './enterphone';
import Getstarted from './getstarted';
import Home from './Home';
import Verification from './verification';

AppRegistry.registerComponent(appName, () => Home);
