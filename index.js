//Add elements to an array
//Return items from an array
//Iterate through an array
//Pass an array as a function parameter


function takeANumber(lineArray, nameString){
    lineArray.push(nameString);
    for (let i = lineArray.length; i > 0; i++) {
      return `Welcome, ${nameString}. You are number ${i} in line.`;
      console.log(nameString)
    }
}


//function nowServing(line){
//    if (line.length === 0) {
//    return 'There is nobody waiting to be served!'
//    } else {
//
// return `Currently serving ${line.shift()}.`
//    }
//}
function nowServing(line) {
  if (line.length > 0) {
  return `Currently serving ${line.shift()}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

//function currentLine(line) {
//  if (line.length === 0) {
//      return `The line is currently empty.`;
//  } else {
//      const currentLine = []
//      for(let i = 0; i < line.length; i++) {
//        currentLine.push(` ${i + 1}. ${line[i]}`)
//      }

//  return `The line is currently:${currentLine}`
//  }
//}

function currentLine(line) {
  const currentLine = []

  if (line.length > 0) {
    for(let i = 0; i < line.length; i++) {
        currentLine.push(` ${i + 1}. ${line[i]}`)
      }
      return `The line is currently:${currentLine}`
}   else {
  return `The line is currently empty.`;
}
}
