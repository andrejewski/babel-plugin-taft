import words from './words'

const wordCount = words.length
let usage = 0
function getRandomWord () {
  return words[(usage++ % wordCount)]
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const uniques = {}
function generateNameFor (identifierName) {
  const minWordCount = 5
  let wordCount = 1
  let word = getRandomWord()
  while (true) {
    const isUnique = !uniques[word]
    const isLong = wordCount >= minWordCount
    if (isUnique && isLong) {
      break
    }

    word += capitalize(getRandomWord())
    wordCount++
  }
  return word
}

const dictionary = {}
function getNameFor (identifierName) {
  let replacement = dictionary[identifierName]
  if (!replacement) {
    replacement = dictionary[identifierName] = generateNameFor(identifierName)
  }
  return replacement
}

export default function babelPluginTaft ({types: t}) {
  return {
    visitor: {
      Identifier (path) {
        if (!path.node.__visited && path.scope.hasBinding(path.node.name)) {
          path.replaceWith(t.identifier(getNameFor(path.node.name)))
          path.node.__visited = true
        }
      }
    }
  }
}
