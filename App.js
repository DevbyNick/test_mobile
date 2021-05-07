import React, {useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, View, Dimensions} from 'react-native';

import AppNavigator from './src/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034383',
  },
});
