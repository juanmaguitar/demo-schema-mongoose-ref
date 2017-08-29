function randomBeatle() {
  const beatles = ['john','paul','george','ringo']
  const randomPosition = Math.floor(Math.random()*4)
  return beatles[randomPosition]
}

module.exports = randomBeatle