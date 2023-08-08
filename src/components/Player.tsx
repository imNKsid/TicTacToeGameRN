import {Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';

interface PlayerProps {
  index: number;
  markers: string[];
  markPostion: () => void;
  playerStyle: any;
}

const Player = ({playerStyle, index, markers, markPostion}: PlayerProps) => {
  return (
    <>
      <Pressable style={playerStyle} onPress={markPostion}>
        {markers[index] === 'X' && (
          <Image
            source={require('../assets/images/cross.png')}
            style={styles.icon}
          />
        )}
        {markers[index] === '0' && (
          <Image
            source={require('../assets/images/zero.png')}
            style={styles.icon}
          />
        )}
      </Pressable>
    </>
  );
};

export default Player;

const styles = StyleSheet.create({
  icon: {
    height: 62,
    width: 62,
  },
});
