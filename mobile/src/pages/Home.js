import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import rocket from '../../assets/foguete.json'

export default function pages({ navigation }) {
  return (
  <>  
    <View style={styles.safeArea} >
      <LottieView resizeMode="contain" autoSize source={rocket} autoPlay loop />
    </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttom} onPress={() => {navigation.navigate('Main')}}>
        <Text style={styles.textButtom}>Bora lá</Text>
      </TouchableOpacity>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e55e5e',
  },
  container: {
    backgroundColor: '#e55e5e'
  },
  buttom: {
    margin: 30,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
    borderRadius: 50,
    bottom: 60,
    alignItems:'center',
    justifyContent: 'center',
  },

  textButtom: {
    fontSize: 18,
    alignContent: 'center',
    justifyContent: 'center',
    color: '#666'
  }
})
