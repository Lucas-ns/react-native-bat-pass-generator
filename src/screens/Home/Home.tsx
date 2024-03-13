import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Style'
import { Menu } from '../../components/Menu/Menu';

export default function Home() {
  return (
    <View style={styles.container}>
      <Menu/>
      <Text>Testing Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

