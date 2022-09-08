/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image, Alert
} from 'react-native';

import styles from '../styles/index';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
export default function login({ navigation }) {
  const [scan,setScan]=useState(false)
  const [result,setResult]= useState()
  return (
    
    
      <QRCodeScanner
        onRead={setScan}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
  );}
