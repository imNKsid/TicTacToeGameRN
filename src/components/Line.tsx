import {StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import {Colors} from '../styles/colors';

const {width, height} = Dimensions.get('window');

interface LineProps {
  showWinnerLine: String;
}

const Line = ({showWinnerLine}: LineProps) => {
  if (
    showWinnerLine === 'horizontal1' ||
    showWinnerLine === 'horizontal2' ||
    showWinnerLine === 'horizontal3'
  ) {
    return (
      <View
        style={[
          styles.horizontalLine,
          {
            top:
              showWinnerLine === 'horizontal1'
                ? height / 15
                : showWinnerLine === 'horizontal2'
                ? height / 4.6
                : height / 2.74,
          },
        ]}
      />
    );
  } else if (
    showWinnerLine === 'vertical1' ||
    showWinnerLine === 'vertical2' ||
    showWinnerLine === 'vertical3'
  ) {
    return (
      <View
        style={[
          styles.verticalLine,
          {
            left:
              showWinnerLine === 'vertical1'
                ? width / 5.65
                : showWinnerLine === 'vertical2'
                ? width / 2
                : width / 1.22,
          },
        ]}
      />
    );
  } else {
    return (
      <View
        style={[
          styles.diagonalLine,
          {
            transform:
              showWinnerLine === 'diagonal1'
                ? [{rotate: '45deg'}]
                : [{rotate: '135deg'}],
          },
        ]}
      />
    );
  }
};

export default Line;

const styles = StyleSheet.create({
  horizontalLine: {
    position: 'absolute',
    width: width / 1.2,
    height: 4,
    backgroundColor: Colors.line,
  },
  verticalLine: {
    position: 'absolute',
    width: 4,
    height: height / 2.5,
    backgroundColor: Colors.line,
  },
  diagonalLine: {
    position: 'absolute',
    width: height / 1.8,
    height: 1,
    borderBottomColor: Colors.line,
    borderBottomWidth: 4,
  },
});
