function myFirstFunction() {
  greeting = 'hi'
  return greeting
}
function sayHi() {
  return 'hi'
}
function sayHello() {
  return 'hello'
}
function sayHiLater(hi) {
  return hi()
}
console.log(sayHiLater(sayHi))
console.log(sayHiLater(sayHello))

function interaction(genericInteraction, name) {
  return genericInteraction(name)
}
const beenPoked = (name) => {
  return `${name} has been poked`
}
console.log(interaction(beenPoked, 'Harley'))
console.log(interaction(beenPoked, 'Anders'))

console.log(
  interaction(
    (lick = (name) => {
      return 'lick ' + name
    }),
    'Harley',
  ),
)
console.log(
  interaction((name) => 'lick ' + name),
  'Harley',
)
