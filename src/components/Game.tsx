import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const {width, height} = Dimensions.get('window');

const Game = () => {
  const [activePlayer, setActivePlayer] = useState('X');
  const [markers, setMarkers] = useState(['', '', '', '', '', '', '', '', '']);

  const markPostion = (position: number) => {
    let temp = [...markers];
    temp[position] = activePlayer;
    setMarkers(temp);

    if (activePlayer === 'X') {
      setActivePlayer('0');
    } else {
      setActivePlayer('X');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: activePlayer === 'X' ? '#007ff4' : '#f40075'},
        ]}>
        <Text style={styles.playerTxt}>Player {activePlayer}'s turn</Text>
      </View>

      <View style={styles.gameContainer}>
        {/* Top Left Cell */}
        <Pressable
          style={[styles.cell, styles.cellTopLeft]}
          onPress={() => markPostion(0)}>
          {markers[0] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[0] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>

        {/* Top Mid Cell */}
        <Pressable
          style={[styles.cell, styles.cellTopMid]}
          onPress={() => markPostion(1)}>
          {markers[1] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[1] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>

        {/* Top Right Cell */}
        <Pressable
          style={[styles.cell, styles.cellTopRight]}
          onPress={() => markPostion(2)}>
          {markers[2] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[2] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>

        {/* Mid Left Cell */}
        <Pressable
          style={[styles.cell, styles.cellMidLeft]}
          onPress={() => markPostion(3)}>
          {markers[3] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[3] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>

        {/* Mid Mid Cell */}
        <Pressable
          style={[styles.cell, styles.cellMid]}
          onPress={() => markPostion(4)}>
          {markers[4] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[4] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>

        {/* Mid Right Cell */}
        <Pressable
          style={[styles.cell, styles.cellMidRight]}
          onPress={() => markPostion(5)}>
          {markers[5] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[5] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>

        {/* Bottom Left Cell */}
        <Pressable
          style={[styles.cell, styles.cellBottomLeft]}
          onPress={() => markPostion(6)}>
          {markers[6] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[6] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>

        {/* Bottom Mid Cell */}
        <Pressable
          style={[styles.cell, styles.cellBottomMid]}
          onPress={() => markPostion(7)}>
          {markers[7] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[7] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>

        {/* Bottom Right Cell */}
        <Pressable
          style={[styles.cell, styles.cellBottomRight]}
          onPress={() => markPostion(8)}>
          {markers[8] === 'X' && (
            <Image
              source={require('../assets/images/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[8] === '0' && (
            <Image
              source={require('../assets/images/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
      </View>

      {/* Restart Button */}
      <Pressable style={styles.restartBtn}>
        <Image
          source={require('../assets/images/replay.png')}
          style={styles.restart}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 60,
  },
  cell: {
    width: width / 3.2,
    height: width / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderRadius: 10,
  },
  cellTopLeft: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  cellTopMid: {
    borderTopWidth: 0,
  },
  cellTopRight: {
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  cellMidLeft: {
    borderLeftWidth: 0,
  },
  cellMid: {},
  cellMidRight: {
    borderRightWidth: 0,
  },
  cellBottomLeft: {
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  cellBottomMid: {
    borderBottomWidth: 0,
  },
  cellBottomRight: {
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  icon: {
    height: 62,
    width: 62,
  },
  restartBtn: {
    position: 'absolute',
    bottom: 0,
    right: 20,
  },
  restart: {
    height: 80,
    width: 80,
  },
});
