export {
  scoreFrame,
  gutterBall,
  spareFrame,
  singleStrikeFrame,
  doubleStrikeFrame,
  scoreGame
};

function gutterBall(frame) {
  return frame[0] + frame[1];
}

function scoreFrame(frame) {
  return frame.reduce((a, c) => a + c, 0);
}

function spareFrame(frame) {
  return frame[0][0] + frame[0][1] + frame[1][0];
}

function singleStrikeFrame(frame) {
  for (let i = 0; i < frame.length; i++)
    if (frame[i][0] + frame[i][1] === 10) {
      return frame[i][0] + frame[i + 1][0] + frame[i + 1][1];
    }
}

function doubleStrikeFrame(frame) {
  for (let i = 0; i < frame.length; i++)
    if (frame[i][0] + frame[i][1] === 10) {
      return frame[i][0] + frame[i + 1][0] + frame[i + 2][0];
    }
}

function scoreGame(game) {}
