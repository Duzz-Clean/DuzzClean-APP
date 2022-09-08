import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Login = () => {
  const [myText, setMyText] = useState['Meu texto'];
  return (
    <View style={styles.container}>
      <Text>ENTRADA</Text>
      <TextInput
        value={myText}
        onChangeText={text => {
          setMyText(text);
        }}
      />
      <Text>SAIDA</Text>
      <Text>{MyText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default Login;