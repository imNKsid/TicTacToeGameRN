import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {checkWinner} from '../utils/checkWinner';
import {Colors} from '../styles/colors';
import Line from './Line';
import Player from './Player';

const {width, height} = Dimensions.get('window');

const Game = () => {
  const [activePlayer, setActivePlayer] = useState('X');
  const [markers, setMarkers] = useState(['', '', '', '', '', '', '', '', '']);
  const [showWinnerLine, setShowWinnerLine] = useState('');

  const markPostion = (position: number) => {
    if (markers[position] === '') {
      let temp = [...markers];
      temp[position] = activePlayer;
      setMarkers(temp);

      if (activePlayer === 'X') {
        setActivePlayer('0');
      } else {
        setActivePlayer('X');
      }
    }
  };

  const reset = () => {
    setMarkers(['', '', '', '', '', '', '', '', '']);
  };

  useEffect(() => {
    const winner = checkWinner(markers);

    setShowWinnerLine(winner && winner?.position);

    if (winner && winner?.name === 'X') {
      Alert.alert('Player X won', '', [
        {
          text: 'OK',
          onPress: () => {
            reset();
            setShowWinnerLine('');
          },
        },
      ]);
    } else if (winner && winner?.name === '0') {
      Alert.alert('Player O won', '', [
        {
          text: 'OK',
          onPress: () => {
            reset();
            setShowWinnerLine('');
          },
        },
      ]);
    }
  }, [markers]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.playerInfo,
          {
            backgroundColor:
              activePlayer === 'X' ? Colors.playerX : Colors.player0,
          },
        ]}>
        <Text style={styles.playerTxt}>Player {activePlayer}'s turn</Text>
      </View>

      <View style={styles.gameContainer}>
        {/* Top Left Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellTopLeft]}
          index={0}
          markers={markers}
          markPostion={() => markPostion(0)}
        />

        {/* Top Mid Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellTopMid]}
          index={1}
          markers={markers}
          markPostion={() => markPostion(1)}
        />

        {/* Top Right Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellTopRight]}
          index={2}
          markers={markers}
          markPostion={() => markPostion(2)}
        />

        {/* Mid Left Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellMidLeft]}
          index={3}
          markers={markers}
          markPostion={() => markPostion(3)}
        />

        {/* Mid Mid Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellMid]}
          index={4}
          markers={markers}
          markPostion={() => markPostion(4)}
        />

        {/* Mid Right Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellMidRight]}
          index={5}
          markers={markers}
          markPostion={() => markPostion(5)}
        />

        {/* Bottom Left Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellBottomLeft]}
          index={6}
          markers={markers}
          markPostion={() => markPostion(6)}
        />

        {/* Bottom Mid Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellBottomMid]}
          index={7}
          markers={markers}
          markPostion={() => markPostion(7)}
        />

        {/* Bottom Right Cell */}
        <Player
          playerStyle={[styles.cell, styles.cellBottomRight]}
          index={8}
          markers={markers}
          markPostion={() => markPostion(8)}
        />

        {showWinnerLine ? <Line showWinnerLine={showWinnerLine} /> : null}
      </View>

      {/* Restart Button */}
      <Pressable style={styles.restartBtn} onPress={reset}>
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
