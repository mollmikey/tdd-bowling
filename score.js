export { scoreFrame }

function scoreFrame(frame) {
  let total = 0
  for (let i = 0; i < frame.length; i++) {
    total += frame[i][0] + frame[i][1] + frame[i + 1][0]
    return total
  }
}
/*gutterBall*/
//frame[0] + frame[1]
/*normalFrame*/
// return frame.reduce((a, c) => a + c, 0)
