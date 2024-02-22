export { scoreFrame }

function scoreFrame(frame) {
  return frame.reduce((a, c) => a + c, 0)
}
//frame[0] + frame[1]
