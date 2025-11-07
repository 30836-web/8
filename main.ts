input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    d = -1
    a1 += d
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    d = 3
    a1 += d
})
let d = 0
basic.showNumber(507)
let a1 = 2
d = 0
basic.forever(function () {
    led.plot(a1, 2)
    basic.pause(1000)
})
