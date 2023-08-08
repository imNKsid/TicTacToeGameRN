export const checkWinner = (squares: any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let pos = '';

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      const abc = `${a}${b}${c}`;
      switch (abc) {
        case '012':
          pos = 'horizontal1';
          break;
        case '345':
          pos = 'horizontal2';
          break;
        case '678':
          pos = 'horizontal3';
          break;
        case '036':
          pos = 'vertical1';
          break;
        case '147':
          pos = 'vertical2';
          break;
        case '258':
          pos = 'vertical3';
          break;
        case '048':
          pos = 'diagonal1';
          break;
        case '246':
          pos = 'diagonal2';
          break;

        default:
          break;
      }
      //   if (a === 0 && b === 3 && c === 6) {
      //     pos = 'vertical1';
      //   } else if (a === 1 && b === 4 && c === 7) {
      //     pos = 'vertical2';
      //   } else if (a === 2 && b === 5 && c === 8) {
      //     pos = 'vertical3';
      //   }
      return {
        name: squares[a],
        position: pos,
      };
    }
  }
  return '';
};
