function randomBeatle() {
  const beatles = ['john', 'paul', 'george', 'ringo']
  return function() {
    const lengthBeatles = beatles.length
    const randomPosition = Math.floor(Math.random()*lengthBeatles)
    return beatles.splice(randomPosition,1)[0] || 'no more beatles'
  }
}

module.exports = randomBeatle