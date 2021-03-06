function takeANumber(lineArray, nameString){
    lineArray.push(nameString);
    for (let i = lineArray.length; i > 0; i++) {
      return `Welcome, ${nameString}. You are number ${i} in line.`;
    }


}

function nowServing(line){
    if (line.length === 0) {
      return 'There is nobody waiting to be served!'
    } else {
      return `Currently serving ${line.shift()}.`
    }
}

function currentLine(line) {
  if (line.length === 0) {
      return `The line is currently empty.`;
  } else {
      const currentLine = []

      for(let i = 0; i < line.length; i++) {
        currentLine.push(` ${i + 1}. ${line[i]}`)
      }

  return `The line is currently:${currentLine}`
  }
}

console.log("I would rather go down the street to Russ & Daughters.")
