let frequenz = 0
let zähler = 0
let on__off = 1
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
loops.everyInterval(1000, function () {
    if (on__off == 1) {
        zähler = randint(1, 8)
    }
    frequenz = frequenz + 150
})
basic.forever(function () {
    if (on__off == 0) {
        music.stopAllSounds()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (on__off == 1) {
        if (zähler == 1) {
            on__off = 0
        } else {
            music.ringTone(frequenz)
        }
    }
})
