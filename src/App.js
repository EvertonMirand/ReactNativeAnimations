/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

import BugerButton from './components/BurgerButton';
import BurgerMenuWarning from './components/BurgerMenuWarning';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  burgerButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    height: 100,
    paddingVertical: 20,
    borderRadius: 50,
    backgroundColor: '#448aff',
  },
  inner: {
    width: '60%',
    height: 10,
    borderRadius: 10,
    backgroundColor: '#37474f',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BugerButton />
      <BurgerMenuWarning />
    </SafeAreaView>
  );
};

export default App;
