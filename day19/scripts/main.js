// Create a closure which has one inner function
function greet(greeting) {
    return function(person) {
        return greeting + ' ' + person;
    }
}
let hello = greet('Hello')
console.log (hello('John'))

// Create a closure which has three inner functions
function count() {
    let total = 0
    function addOne() {
        total++
        return total
    }
    function minusOne() {
        total--
        return total
    }
    function reset() {
        total = 0
        return total
    }
    return {
        addOne: addOne(),
        minusOne: minusOne(),
        reset: reset()
    }
}
const countTotal = count()
console.log(countTotal.addOne)
console.log(countTotal.minusOne)
console.log(countTotal.addOne)
console.log(countTotal.reset)