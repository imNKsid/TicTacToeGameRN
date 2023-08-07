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
  return (
    <SafeAreaView>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: activePlayer === 'X' ? '#007ff4' : '#f40075'},
        ]}>
        <Text style={styles.playerTxt}>Player {activePlayer}'s turn</Text>
      </View>

      <View style={styles.gameContainer}>
        {/* Top Left Cell */}
        <Pressable style={[styles.cell, styles.cellTopLeft]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Top Mid Cell */}
        <Pressable style={[styles.cell, styles.cellTopMid]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Top Right Cell */}
        <Pressable style={[styles.cell, styles.cellTopRight]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Mid Left Cell */}
        <Pressable style={[styles.cell, styles.cellMidLeft]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Mid Mid Cell */}
        <Pressable style={[styles.cell, styles.cellMid]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Mid Right Cell */}
        <Pressable style={[styles.cell, styles.cellMidRight]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Bottom Left Cell */}
        <Pressable style={[styles.cell, styles.cellBottomLeft]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Bottom Mid Cell */}
        <Pressable style={[styles.cell, styles.cellBottomMid]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Bottom Right Cell */}
        <Pressable style={[styles.cell, styles.cellBottomRight]}>
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        </Pressable>
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
});
