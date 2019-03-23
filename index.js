function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}

function logShout (string){
  console.log(string.toUpperCase())
}

function logWhisper (string){
  console.log (string.toLowerCase ())
}
function sayHiToGrandma (string){
  var uppercase
  var lowercase
<<<<<<< HEAD
  var mixedcase
=======
>>>>>>> db310857efe1c6fd2f74cbf6232000797060caed
  uppercase=string.toUpperCase()
  if (uppercase===string)
  return ("YES INDEED!")
  lowercase=string.toLowerCase()
  if (lowercase===string)
  return ("I can't hear you!")
<<<<<<< HEAD
  mixedcase=string
  if (mixedcase==="I love you, Grandma.")
    return ("I love you, too.")
=======
  var mixedcase
  mixedcase=string
  if (string==="I love u, Grandma.")
  return ("I love you, too.")
>>>>>>> db310857efe1c6fd2f74cbf6232000797060caed
  }