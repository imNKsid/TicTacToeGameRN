import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Game = () => {
  const [activePlayer, setActivePlayer] = useState('X');
  return (
    <SafeAreaView>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: activePlayer === 'X' ? '#007ff4' : '#f40075'},
        ]}>
        <Text style={styles.playerTxt}>Player {activePlayer}'s turn</Text>
      </View>
    </SafeAreaView>
  );
};

export default Game;

const styles = StyleSheet.create({
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    padding: 20,
    color: '#fff',
  },
  gameContainer: {},
});
