function receivesAFunction(spy) {
    return spy()
}

function returnsANamedFunction() {
    function name() {
        console.log("My name is Terry")
    }

    return name
}

function returnsAnAnonymousFunction () {
    function imAFunction() {
        console.log("BEEP")
    }
    return function () {
        console.log(`I'm a computer, ${imAFunction}`)
    }
}