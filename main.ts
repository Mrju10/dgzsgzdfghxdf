let score = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        score = score + 1
        if (score == 1) {
            basic.showNumber(score)
        }
    } else {
        basic.clearScreen()
    }
})
