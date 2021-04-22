try {
    let a = 'a'
    let c = a + b
}   catch(err) {
    console.log(err)
}

try {
    let a = 'a'
    let c = a + b
}   catch(err) {
    console.log('Type:', err.name)
    console.log('Explanation:', err.message)
} finally {
    console.log('Whatever')
}

/*
const throwErrorExampleFun = () => {
    let x = prompt('Enter a number:')
    try {
      if (x == '') throw 'Empty'
      if (isNaN(x)) throw 'Not a number'
      x = Number(x)
      if (x < 5) throw 'Too low'
      if (x > 10) throw 'Too high'
    } catch (err) {
      console.log(err)
    }
  }
throwErrorExampleFun()
*/

function moreThrow() {
    let input = prompt('Number please:')
    try {
        if (input == '7') throw "Lucky seven!"
        if (input != '7') throw "Unlucky"
    } catch(err) {
        console.log(err)
    }
}
moreThrow()
