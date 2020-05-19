/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/

*/

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Animated,
  Keyboard,
} from 'react-native';
import styles from '../styles/index';
export default function Home({ navigation }) {
  return (
    
    <KeyboardAvoidingView style={styles.backgroundcad}>

    <View>
      <Image source={require('../components/assets/cadastro.png')}
        style={styles.imgcad} />
<TouchableOpacity >
      
        <Text style={styles.textcad}>Sua ultimas limpezas</Text>
        
        <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() =>
              navigation.navigate('Motorista')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          
      </TouchableOpacity>
    
      </View>
      </KeyboardAvoidingView>
    
  );
}

 