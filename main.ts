input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    d = -1
    a1 += d
    a2 += d
    a3 += d
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    d = 1
    a1 += d
    a2 += d
    a3 += d
})
let d = 0
basic.showNumber(507)
let a1 = 2
let a2 = 2
let a3 = 2
d = 0
basic.forever(function () {
    led.plot(3, a1)
    led.plot(2, a2)
    led.plot(1, a3)
    basic.pause(1000)
})
