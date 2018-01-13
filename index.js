function  shout(string) {
  return string.toUpperCase()
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

function whisper(string) {
  string = 'Hello'
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisperer(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (sting === string.toLowerCase())
  return {"I can't hear you"}
}
