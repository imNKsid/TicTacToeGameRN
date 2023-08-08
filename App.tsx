import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Game from './src/components/Game';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Game />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
